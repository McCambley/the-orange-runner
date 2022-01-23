import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;

  @media (max-width: 768px) {
    box-sizing: border-box;
    border-top: 8px solid #ff9900;
    max-height: ${(props) => (props.$isOpen ? "480px" : "0px")};
    opacity: ${(props) => (props.$isOpen ? "1" : "0")};
    overflow: hidden;
    padding: ${(props) => (props.$isOpen ? "28px 32px" : "0")};
    transition: max-height 0.3s ease, opacity 0.15s ease, padding 0.3s ease;
    background: #fff;
    /* display: flex; */
    /* flex-direction: column-reverse; */
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  margin-bottom: 4px;

  @media (max-width: 768px) {
    text-align: right;
  }
`;

export const NavLink = styled.a`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;
