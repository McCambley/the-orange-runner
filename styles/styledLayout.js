import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 316px 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Main = styled.main`
  border-left: 2px solid #000;
  padding: 0 60px;
  max-height: 100vh;
  overflow: scroll;
`;
