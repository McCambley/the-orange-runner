import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-top: 8px solid #ff9900;
  padding: 16px 30px 0;
  max-height: 100vh;
  overflow: scroll;

  @media (max-width: 768px) {
    flex-direction: column;
    transform: rotate(-0.5deg);
    transition: transform 0.3s ease;

    &:hover {
      transform: rotate(0.5deg);
    }
  }
`;
