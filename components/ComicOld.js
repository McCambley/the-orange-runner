// import Image from "next/image";
// import { generateShimmer } from "../lib/shimmer";

// export default function Comic({ comic }) {
//   return (
//     <>
//       {comic.fields.panels.map((item) => {
//         return (
//           <Image
//             key={item.sys.id}
//             src={`http:${item.fields.file.url}`}
//             height={item.fields.file.details.image.height / 2}
//             width={item.fields.file.details.image.width / 2}
//             alt={item.fields.title}
//             placeholder="blur"
//             blurDataURL={generateShimmer(
//               item.fields.file.details.image.width / 2,
//               item.fields.file.details.image.height / 2
//             )}
//           />
//         );
//       })}
//     </>
//   );
// }
