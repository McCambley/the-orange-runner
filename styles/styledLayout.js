import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 316px 1fr;
  min-height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-top: 96px;
  }
  @media (max-width: 580px) {
    padding-top: 80px;
  }
  @media (max-width: 400px) {
    padding-top: 68px;
  }
`;

export const Main = styled.main`
  border-left: 2px solid #000;
  padding: 30px 120px 35px;
  max-height: 100vh;
  overflow: scroll;
  /* max-width: ${768 + 120 + 120}px; */

  @media (max-width: 1024px) {
    padding: 30px 60px 35px;
  }

  @media (max-width: 768px) {
    /* removed for pagination */
    /* max-height: none; */
    border-left: none;
    padding: 30px 40px 35px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
  }
`;
