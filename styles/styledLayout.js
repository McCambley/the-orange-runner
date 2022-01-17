import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  border-radius: 10px;
  background: #ff9900;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.3);

  padding: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    transform: rotate(-0.5deg);
    transition: transform 0.3s ease;

    &:hover {
      transform: rotate(0.5deg);
    }
  }
`;
