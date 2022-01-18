import Link from "next/link";
import Image from "next/image";
import { generateShimmer } from "../lib/shimmer";
import { Wrapper, Hr, ShareContainer, Twitter, Facebook, LinkedIn, Instagram, Copy } from "../styles/styledComicCard";

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
