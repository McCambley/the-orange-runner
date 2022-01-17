import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { createClient } from "contentful";
import { generateShimmer } from "../../lib/shimmer";

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
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await client.getEntries({
    content_type: "comic",
    "fields.slug": params.slug,
  });

  return {
    props: { comic: res.items[0] },
  };
}

export default function Comic({ comic }) {
  console.log({ comic });

  return (
    <Layout home={false}>
      <Head>
        <title>{comic.fields.title}</title>
      </Head>
      {/* map over images from comicData to make articles */}
      <h2>{comic.fields.title}</h2>
      <h3>{comic.fields.subtitle}</h3>
      {comic.fields.panels.map((item) => {
        return (
          <Image
            key={item.sys.id}
            src={`http:${item.fields.file.url}`}
            height={item.fields.file.details.image.height / 2}
            width={item.fields.file.details.image.width / 2}
            alt={item.fields.title}
            placeholder="blur"
            blurDataURL={generateShimmer(
              item.fields.file.details.image.width / 2,
              item.fields.file.details.image.height / 2
            )}
          />
        );
      })}

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
