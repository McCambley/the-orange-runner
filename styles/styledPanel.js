import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 65vh;
  position: relative;
  margin-bottom: 16px;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  @media (orientation: landscape) and (max-width: 768px) {
    max-width: none;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  /* outline: 1px solid red; */
`;
