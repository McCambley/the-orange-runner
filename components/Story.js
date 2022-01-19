import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { generateShimmer } from "../lib/shimmer";
import Image from "next/image";
import Panel from "./Panel";
import Date from "./Date";
import Link from "next/link";
import Share from "./Share";

export default function Story({ comic }) {
  const { originalPublishDate, title, slug } = comic.fields;
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
    },
  };
  return (
    <>
      <Date dateString={originalPublishDate} />
      <Link href={`/comics/${slug}`}>
        <a>
          <h2>{title}</h2>
        </a>
      </Link>
      {documentToReactComponents(comic.fields.story, renderOption)}
      <Share />
    </>
  );
}
