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
  background: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    border-top: none;
    padding: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    background: none;
    box-shadow: ${(props) => (props.$isOpen ? "0 0 12px rgba(0, 0, 0, .3)" : "none")};
    transition: box-shadow 0.3s ease;
  }
`;

export const StickyHeader = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #000;
    padding: 8px 16px;
    background: #fff;
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

  @media (max-width: 768px) {
    display: block;
    background-color: transparent;
    border: none;
    background-image: url(${(props) => (props.$isOpen ? "/images/close.svg" : "/images/open.svg")});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-image 0.15s ease;
    cursor: pointer;
    height: 48px;
    width: 48px;
  }
`;
