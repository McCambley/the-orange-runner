import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Story from "../../components/Story";
import Comic from "../../components/Comic";
import { createClient } from "contentful";
import Fallback from "../../components/Fallback";
import { Button, Navigation } from "../../styles/styledPost";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "comic",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await client.getEntries({
    content_type: "comic",
    "fields.slug": params.slug,
  });

  if (!res.items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { comic: res.items[0] },
    revalidate: 10,
  };
}

export default function Post({ comic }) {
  if (!comic) return <Fallback />;
  const { title, subtitle, extendedComic } = comic.fields;

  return (
    <Layout home={false}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={subtitle ? subtitle : "A relevant Orange Runner comic..."}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={subtitle} />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={subtitle} />
      </Head>
      {/* map over images from comicData to make articles */}
      {extendedComic ? <Story comic={comic} standalone /> : <Comic comic={comic} standalone />}
      <Navigation>
        {/* TODO: make these function... */}
        <Link href="/" passHref>
          <Button>Back</Button>
        </Link>
        <Link href="/" passHref>
          <Button>Random</Button>
        </Link>
        <Link href="/" passHref>
          <Button>Next</Button>
        </Link>
      </Navigation>
    </Layout>
  );
}

// For static page generation
// export async function getStaticPaths() {
//   // return a list of possible values for id
//   const paths = getAllPostIds();
//   return {
//     paths: paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }
