import styled from "styled-components";
import Link from "next/link";

export const CollectionList = styled.ul`
  list-style: none;
`;
export const CollectionItem = styled.p`
  font-size: 24px;
  margin: 0;
  margin-bottom: 8px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
