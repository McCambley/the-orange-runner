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
`;
