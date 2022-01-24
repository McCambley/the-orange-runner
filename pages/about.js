import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { generateShimmer } from "../lib/shimmer";
import Layout from "../components/Layout";
import { client } from "../utils/client";
import { Wrapper, AboutLink } from "../styles/styledAbout";
import Panel from "../components/Panel";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "about" });

  return {
    props: {
      about: res.items[0].fields,
    },
  };
}

export default function About({ about }) {
  const renderOption = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const { url, details } = node.data.target.fields.file;
        const { height, width } = details.image;
        return (
          <Panel
            src={`https:${url}`}
            height={height}
            width={width}
            alt="Illustration"
            placeholder="blur"
            blurDataURL={generateShimmer(width, height)}
          />
        );
      },
      [INLINES.HYPERLINK]: ({ data }, children) => {
        // const { value } = node.content[0].content[0];
        return (
          <AboutLink
            href={data.uri}
            // TODO pull this url out into an env var
            target={`${data.uri.startsWith(process.env.NEXT_PUBLIC_APP_URL) ? "_self" : "_blank"}`}
            rel={`${data.uri.startsWith(process.env.NEXT_PUBLIC_APP_URL) ? "" : "noopener noreferrer"}`}
          >
            {children}
          </AboutLink>
        );
      },
    },
  };
  return (
    <Layout>
      <Wrapper>
        <h1>{about.title}</h1>
        {documentToReactComponents(about.content, renderOption)}
      </Wrapper>
    </Layout>
  );
}
