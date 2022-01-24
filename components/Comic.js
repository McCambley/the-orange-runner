import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { generateShimmer } from "../lib/shimmer";
import Panel from "./Panel";
import Date from "./Date";
import Link from "next/link";
import Share from "./Share";
import { StoryLink, Hr, Quote, Wrapper } from "../styles/styledComic";

export default function Story({ comic, standalone }) {
  const { originalPublishDate, subtitle, title, slug } = comic.fields;

  console.log();
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
      [BLOCKS.QUOTE]: (node, children) => {
        const { value } = node.content[0].content[0];
        return <Quote>{`"${value}"`}</Quote>;
      },
      [INLINES.HYPERLINK]: ({ data }, children) => {
        // const { value } = node.content[0].content[0];
        return (
          <StoryLink
            href={data.uri}
            // TODO pull this url out into an env var
            target={`${data.uri.startsWith(process.env.NEXT_PUBLIC_APP_URL) ? "_self" : "_blank"}`}
            rel={`${data.uri.startsWith(process.env.NEXT_PUBLIC_APP_URL) ? "" : "noopener noreferrer"}`}
          >
            {children}
          </StoryLink>
        );
      },
    },
  };
  return (
    <Wrapper>
      <Date dateString={originalPublishDate} />
      {standalone ? (
        <h1>{title}</h1>
      ) : (
        <Link href={`/comics/${slug}`} passHref>
          <a>
            <h2>{title}</h2>
          </a>
        </Link>
      )}
      {documentToReactComponents(comic.fields.story, renderOption)}
      <Hr />
      <Share slug={slug} title={title} subtitle={subtitle} />
    </Wrapper>
  );
}
