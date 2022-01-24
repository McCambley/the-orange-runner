// import Link from "next/link";
// import { generateShimmer } from "../lib/shimmer";
// import Panel from "./Panel";
// import Date from "./Date";
// import Share from "./Share";
// import { Wrapper, Hr } from "../styles/styledComic";

// export default function ComicOld({ comic, standalone }) {
//   const { title, slug, subtitle, panels, originalPublishDate } = comic.fields;

//   return (
//     <Wrapper>
//       <Date dateString={originalPublishDate} />
//       {standalone ? (
//         <h1>{title}</h1>
//       ) : (
//         <Link href={`/comics/${slug}`}>
//           <a>
//             <h2>{title}</h2>
//           </a>
//         </Link>
//       )}
//       {panels.map((panel) => {
//         return (
//           <Panel
//             key={panel.sys.id}
//             src={`https:${panel.fields.file.url}`}
//             width={panel.fields.file.details.image.width / 2}
//             height={panel.fields.file.details.image.height / 2}
//             alt={"comic preview"}
//             placeholder="blur"
//             blurDataURL={generateShimmer(
//               panel.fields.file.details.image.width / 2,
//               panel.fields.file.details.image.height / 2
//             )}
//           />
//         );
//       })}
//       <Hr />
//       <Share slug={slug} title={title} subtitle={subtitle} />
//     </Wrapper>
//   );
// }
