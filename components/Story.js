import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { generateShimmer } from "../lib/shimmer";
import Image from "next/image";

export default function Story({ comic }) {
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
  return <>{documentToReactComponents(comic.fields.story, renderOption)}</>;
}
