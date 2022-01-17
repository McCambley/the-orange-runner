import Link from "next/link";
import Image from "next/image";

export default function ComicCard({ comic }) {
  const { title, slug, subtitle, panels } = comic.fields;
  return (
    <>
      <Link href={`/comics/${slug}`}>
        <a>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </a>
      </Link>
      <Image
        src={`https:${panels[0].fields.file.url}`}
        width={panels[0].fields.file.details.image.width / 2}
        height={panels[0].fields.file.details.image.height / 2}
        alt={"comic preview"}
      />
    </>
  );
}
