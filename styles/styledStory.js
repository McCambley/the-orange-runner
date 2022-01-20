import styled from "styled-components";

export const Wrapper = styled.article`
  margin-bottom: 16px;
  width: 100%;
  max-width: 65vh;
`;

export const StoryLink = styled.a`
  color: #ff9900;
  transition: opacity 0.15 ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const Hr = styled.hr`
  border: none;
  height: 2px;
  background-color: #000;
  border-radius: 5px;
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
