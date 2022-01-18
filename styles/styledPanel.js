import styled from "styled-components";

export const Wrapper = styled.div`
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
