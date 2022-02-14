import Image from "next/image";
import { Wrapper, Overlay } from "../styles/styledPanel";

export default function Panel({ src, width, height, alt, placeholder, blurDataURL, ...props }) {
  return (
    <Wrapper>
      <Image
        src={src}
        // width={width}
        // height={height}
        alt={alt}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        layout="fill"
        objectFit="contain"
        {...props}
      />
      <Overlay />
    </Wrapper>
  );
}
