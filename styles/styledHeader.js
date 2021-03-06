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
    overflow: hidden;
    flex-direction: column;
    border-top: none;
    padding: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
    background: none;
    box-shadow: ${(props) => (props.$isOpen ? "0 0 12px rgba(0, 0, 0, .3)" : "none")};
    transition: box-shadow 0.3s ease;
  }
`;

export const StickyHeader = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 76px 1fr 76px;
    gap: 40px;
    align-items: center;
    border-bottom: 2px solid #000;
    padding: 8px 16px;
    background: #fff;
  }

  @media (orientation: landscape) and (max-width: 768px) {
    max-width: none;
    grid-template-columns: 60px 1fr 60px;
  }

  @media (max-width: 580px) {
    gap: 20px;
    grid-template-columns: 60px 1fr 60px;
  }

  @media (orientation: landscape) and (max-width: 580px) {
    grid-template-columns: 48px 1fr 48px;
  }

  @media (max-width: 400px) {
    gap: 8px;
    grid-template-columns: 48px 1fr 48px;
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
    max-width: 100%;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  max-height: ${(props) => (props.$isOpen ? "100vh" : "0")};
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  width: 100vw;
  z-index: 1;
  transition: opacity 0.5s ease;
`;
