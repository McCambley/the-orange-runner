import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid red;
  /* width: 100%; */
  height: 50vh;
  max-height: 50vh;
  position: relative;
  /* display: flex;
  justify-content: flex-start; */
  /* overflow: auto; */
`;
export default function Panel({ src, width, height, alt, placeholder, blurDataURL, ...props }) {
  return (
    <Wrapper>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        layout="fill"
        objectFit="contain"
        {...props}
      />
    </Wrapper>
  );
}
