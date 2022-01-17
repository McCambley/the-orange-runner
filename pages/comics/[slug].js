import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Story from "../../components/Story";
import Comic from "../../components/Comic";
import { createClient } from "contentful";
import Fallback from "../../components/Fallback";

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

  if (!items.length) {
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
      </Head>
      {/* map over images from comicData to make articles */}
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      {extendedComic ? <Story comic={comic} /> : <Comic comic={comic} />}
      <Link href="/">
        <a>← Back to home</a>
      </Link>
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
