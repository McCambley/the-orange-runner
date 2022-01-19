import styled from "styled-components";

export const Button = styled.a`
  display: inline-block;
  min-width: 100%;
  padding: 8px 12px;
  background: #000;
  color: #fff;
  border-radius: 8px;
  text-transform: uppercase;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
  text-align: center;
  transition: background-color 0.15s ease;
  font-size: 14px;
  justify-self: center;

  &:hover {
    background: #ff9900;
    color: #fff;
  }
`;

export const Navigation = styled.nav`
  padding: 12px 24px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  max-width: 65vh;
`;
