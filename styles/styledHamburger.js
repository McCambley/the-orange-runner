import styled from "styled-components";

export const Button = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background-color: transparent;
    border: none;
    position: relative;
    /* background-image: url(${(props) => (props.$isOpen ? "/images/close.svg" : "/images/open.svg")}); */
    /* background-size: cover; */
    /* background-repeat: no-repeat; */
    /* background-position: center; */
    transition: background-image 0.15s ease;
    cursor: pointer;
    height: 0;
    width: 100%;
    padding-top: 100%;
    user-select: none;
    outline: 1px solid red;
  }
`;

const Span = styled.span`
  position: absolute;
  width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 0;
  border: 4px solid #000;
  border-radius: 20px;
  transition: transform 0.3s ease;
`;

export const Top = styled(Span)`
  transform: ${({ $isOpen }) => ($isOpen ? "translate(-50%, -50%)" : "translate(-50%, -300%)")};
  /* transform: translate(-50%, -300%); */
`;

export const Middle = styled(Span)`
  transform: translate(-50%, -50%);
`;

export const Bottom = styled(Span)`
  transform: ${({ $isOpen }) => ($isOpen ? "translate(-50%, -50%)" : "translate(-50%, 200%)")};
  /* transform: translate(-50%, 200%); */
`;
