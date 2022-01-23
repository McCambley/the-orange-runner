import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Story from "../../components/Story";
import Comic from "../../components/Comic";
import { client } from "../../utils/client";
import Fallback from "../../components/Fallback";
import Pagination from "../../components/Pagination";

// const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_KEY,
// });

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "comic",
    limit: 1000,
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
  const matchingComics = await client.getEntries({
    content_type: "comic",
    "fields.slug": params.slug,
    limit: 1000,
  });

  const allComics = await client.getEntries({
    content_type: "comic",
    order: "-fields.originalPublishDate",
    limit: 1000,
  });

  if (!matchingComics.items.length || !allComics.items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const slugs = allComics.items.map((comic) => comic.fields.slug);
  const slugIndex = slugs.indexOf(params.slug);
  const nextSlug = slugIndex !== 0 ? slugs[slugIndex - 1] : slugs[slugs.length - 1];
  const previousSlug = slugIndex !== slugs.length - 1 ? slugs[slugIndex + 1] : slugs[0];

  return {
    props: { comic: matchingComics.items[0], previousSlug, nextSlug, slugs },
    revalidate: 10,
  };
}

export default function Post({ comic, slugs, previousSlug, nextSlug }) {
  if (!comic) return <Fallback />;

  const { title, subtitle = "", extendedComic, panels, slug } = comic.fields;

  return (
    <Layout home={false}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={!!subtitle ? subtitle : "A relevant Orange Runner comic..."}></meta>
        <meta name="keywords" content={comic.fields.keywords.join(", ").toLowerCase()}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={subtitle} />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={subtitle} />
        <meta property="og:image" content={!!panels[0] && `http:${panels[0].fields.file.url}`} />
        <meta name="twitter:image" content={!!panels[0] && `http:${panels[0].fields.file.url}`} />
      </Head>
      {/* map over images from comicData to make articles */}
      {extendedComic ? <Story comic={comic} standalone /> : <Comic comic={comic} standalone />}
      <Pagination slug={slug} slugs={slugs} previousSlug={previousSlug} nextSlug={nextSlug} />
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
