import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
