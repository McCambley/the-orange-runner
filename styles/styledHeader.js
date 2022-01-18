import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ;
  border-top: 8px solid #ff9900;
  padding: 16px 30px 0;
  max-height: 100vh;
  overflow: scroll;

  @media (max-width: 768px) {
    flex-direction: column;
    border-top: none;
    border-bottom: 2px solid #000;
  }
`;

export const LargeLogo = styled.a`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SmallLogo = styled.a`
  display: none;
  @media (max-width: 768px) {
    width: 76px;
    display: block;
  }
`;

export const Hamburger = styled.button`
  display: none;
  background-color: transparent;
  border: 1px solid red;
  background-image: url(${(props) => (props.$isOpen ? "/images/close.svg" : "/images/open.svg")});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
