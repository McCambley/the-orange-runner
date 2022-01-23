import styled from "styled-components";
import Link from "next/link";

export const CollectionList = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 65vh;
`;
export const CollectionItem = styled.a`
  font-size: 24px;
  margin: 0;
  margin-bottom: 8px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
  line-height: 1.6em;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
