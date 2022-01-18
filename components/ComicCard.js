import Link from "next/link";
import Image from "next/image";
import { generateShimmer } from "../lib/shimmer";
import { Wrapper, Hr, ShareContainer, Twitter, Facebook, LinkedIn, Instagram, Copy } from "../styles/styledComicCard";
import Panel from "./Panel";

export default function ComicCard({ comic }) {
  const { title, slug, subtitle, panels, story } = comic.fields;

  function handleShare(e) {
    alert(`Sharing to ${e.target.name}`);
  }

  return (
    <Wrapper>
      <Link href={`/comics/${slug}`}>
        <a>
          <h2>{title}</h2>
        </a>
      </Link>
      {panels.map((panel) => {
        return (
          <Panel
            key={panel.sys.id}
            src={`https:${panel.fields.file.url}`}
            width={panel.fields.file.details.image.width / 2}
            height={panel.fields.file.details.image.height / 2}
            alt={"comic preview"}
            placeholder="blur"
            blurDataURL={generateShimmer(
              panel.fields.file.details.image.width / 2,
              panel.fields.file.details.image.height / 2
            )}
          />
        );
      })}
      <Hr />
      <ShareContainer>
        <Twitter name="Twitter" type="button" onClick={handleShare} />
        <Instagram name="Instagram" type="button" onClick={handleShare} />
        <LinkedIn name="LinkedIn" type="button" onClick={handleShare} />
        <Facebook name="Facebook" type="button" onClick={handleShare} />
        <Copy name="wherever you want!" type="button" onClick={handleShare} />
      </ShareContainer>
    </Wrapper>
  );
}
