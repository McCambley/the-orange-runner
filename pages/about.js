import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { generateShimmer } from "../lib/shimmer";
import Image from "next/image";
import Layout from "../components/Layout";
import { createClient } from "contentful";
import Image from "next/image";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "about" });

  return {
    props: {
      about: res.items[0].fields,
    },
  };
}

export default function About({ about }) {
  console.log({ about });
  const renderOption = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const { url, details } = node.data.target.fields.file;
        const { height, width } = details.image;
        return (
          <Image
            src={`https:${url}`}
            height={height}
            width={width}
            alt="Illustration"
            placeholder="blur"
            blurDataURL={generateShimmer(width, height)}
          />
        );
      },
    },
  };
  return (
    <Layout>
      <h1>{about.title}</h1>
      <>{documentToReactComponents(about.content, renderOption)}</>
    </Layout>
  );
}
