import Head from "next/head";
import Layout from "../../components/Layout";
import Comic from "../../components/Comic";
import { client } from "../../utils/client";
import Fallback from "../../components/Fallback";

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "collection",
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
  const collection = await client.getEntries({
    content_type: "collection",
    "fields.slug": params.slug,
    // include: 10,
  });

  return {
    props: { collection: collection.items[0] },
    revalidate: 10,
  };
}

export default function Collection({ collection }) {
  if (!collection) return <Fallback />;
  const { title, subtitle, slug, comics } = collection.fields;

  return (
    <Layout home={false}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`A collection of Orange Runner comics - ${title}`}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={`A collection of Orange Runner comics - ${title}`} />
        <meta property="og:site_name" content={`The Orange Runner`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={`A collection of Orange Runner comics - ${title}`} />
      </Head>
      {/* map over images from comicData to make articles */}
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {comics.map((comic) => (
        <Comic comic={comic} key={comic.sys.id} />
      ))}
    </Layout>
  );
}
