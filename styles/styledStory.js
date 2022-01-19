import styled from "styled-components";

export const Wrapper = styled.article`
  margin-bottom: 16px;
  width: 100%;
  max-width: 65vh;

  quote {
  }
`;

export const Hr = styled.hr`
  border-top: 2px solid #999999;
`;

export const Quote = styled.p`
  width: 80%;
  margin: 0 auto 8px;
  font-size: 16px;
  font-style: italic;
  color: #999;
  border-left: 2px solid #999;
  padding: 0 16px;

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;
