import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 65vh;

  @media (orientation: landscape) and (max-width: 768px) {
    max-width: none;
  }
`;

export const AboutLink = styled.a`
  color: #ff9900;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.7;
  }
`;
