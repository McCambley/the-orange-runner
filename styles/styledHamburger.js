import styled from "styled-components";

export const Button = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background-color: transparent;
    border: none;
    background-image: url(${(props) => (props.$isOpen ? "/images/close.svg" : "/images/open.svg")});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    /* transition: background-image 0.15s ease; */
    cursor: pointer;
    height: 0;
    width: 100%;
    padding-top: 100%;
    user-select: none;
  }
`;
