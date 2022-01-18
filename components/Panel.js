import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 50vh;
  position: relative;
  margin-bottom: 8px;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
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
