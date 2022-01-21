import styled, { css } from "styled-components";

const buttonStyles = css`
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
  cursor: pointer;
  border: none;

  &:hover {
    background: #ff9900;
    color: #fff;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
export const LinkButton = styled.a`
  ${buttonStyles}
`;

export const RandomButton = styled.button`
  ${buttonStyles}
`;

export const Navigation = styled.nav`
  padding: 12px 24px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  max-width: 65vh;

  @media (max-width: 480px) {
    padding: 12px 0px 0;
  }
`;
