import Head from "next/head";
import Layout from "../../components/Layout";
import Comic from "../../components/Comic";
import { client } from "../../utils/client";
import Fallback from "../../components/Fallback";
import Pagination from "../../components/Pagination";

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

  const { title, subtitle = "", slug } = comic.fields;

  function getThumbnail() {
    const assetBlock = comic.fields.story.content.find((item) => item.nodeType == "embedded-asset-block");
    if (assetBlock) {
      return `https:${assetBlock.data.target.fields.file.url}`;
    }
    return null;
  }

  return (
    <Layout home={false}>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="keywords" content={comic.fields.keywords.join(", ").toLowerCase()}></meta>
        {subtitle && <meta name="description" content={subtitle}></meta>}{" "}
        {subtitle && <meta property="og:description" content={subtitle} />}
        {subtitle && <meta name="twitter:description" content={subtitle} />}
        {getThumbnail() && <meta property="og:image" content={getThumbnail()} />}
        {getThumbnail() && <meta name="twitter:image" content={getThumbnail()} />}
      </Head>
      <Comic comic={comic} standalone />
      <Pagination slug={slug} slugs={slugs} previousSlug={previousSlug} nextSlug={nextSlug} />
    </Layout>
  );
}
