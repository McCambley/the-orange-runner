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
    content_type: "collection",
  });

  console.log({ res });

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
  const collection = await client.getEntries({
    content_type: "collection",
    "fields.slug": params.slug,
    // include: 10,
  });

  console.log({ collection });

  return {
    props: { collection: collection.items[0] },
    revalidate: 10,
  };
}

export default function Collection({ collection }) {
  if (!collection) return <Fallback />;

  return (
    <Layout home={false}>
      {/* <Head>
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
      </Head> */}
      {/* map over images from comicData to make articles */}
      {/* {extendedComic ? <Story comic={comic} standalone /> : <Comic comic={comic} standalone />} */}
      <h1>Hello</h1>
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
