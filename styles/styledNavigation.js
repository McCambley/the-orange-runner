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

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4px 0 20px;

  @media (max-width: 768px) {
    padding: 4px 0 12px;
  }
`;

export const Label = styled.label`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
  font-size: 16px;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    text-align: right;
    font-size: 28px;
    margin-bottom: 12px;
    display: none;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 60px;
  border-radius: 5px;
  border: 2px solid #000;
  overflow: hidden;
`;

export const Input = styled.input`
  border: none;
  padding: 8px;

  &:focus-visible {
    outline: #000 auto 1px;
  }
`;

export const Button = styled.button`
  background-image: url("/images/search.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ff9900;
  border: none;
  width: 60px;
  padding: 4px;
  cursor: pointer;
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
