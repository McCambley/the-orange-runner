import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4px 0 20px;
`;

export const Label = styled.label`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
  font-size: 16px;
  margin-bottom: 4px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
`;

export const NavLink = styled.a`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 4px;
`;
