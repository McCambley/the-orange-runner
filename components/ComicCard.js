import Link from "next/link";
import Image from "next/image";
import { generateShimmer } from "../lib/shimmer";
import { Hr, Twitter, Facebook, LinkedIn, Instagram, Copy } from "../styles/styledComicCard";

export default function ComicCard({ comic }) {
  const { title, slug, subtitle, panels, story } = comic.fields;
  return (
    <>
      <Link href={`/comics/${slug}`}>
        <a>
          <h2>{title}</h2>
        </a>
      </Link>
      <Image
        src={`https:${panels[0].fields.file.url}`}
        width={panels[0].fields.file.details.image.width / 2}
        height={panels[0].fields.file.details.image.height / 2}
        alt={"comic preview"}
        placeholder="blur"
        blurDataURL={generateShimmer(
          panels[0].fields.file.details.image.width / 2,
          panels[0].fields.file.details.image.height / 2
        )}
      />
      <Hr />
      <div></div>
    </>
  );
}
