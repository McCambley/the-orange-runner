import styled from "styled-components";

export const Button = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background-color: transparent;
    border: none;
    position: relative;
    transition: background-image 0.15s ease;
    cursor: pointer;
    height: 0;
    width: 100%;
    padding-top: 100%;
    user-select: none;
    /* overflow: hidden; */
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
  background-color: #000;
  transition: transform 0.3s ease, width 0.3s ease, opacity 0.3s ease;

  @media (max-width: 580px) {
    //
    border: 3px solid #000;
  }

  @media (orientation: landscape) and (max-width: 580px) {
    //
    border: 2px solid #000;
  }

  @media (max-width: 400px) {
    //
    border: 2px solid #000;
  }
`;

// commented transition sweeps the middle span out to the right

export const Top = styled(Span)`
  transform: ${({ $isOpen }) => ($isOpen ? "translate(-50%, -50%) rotate(-45deg)" : "translate(-50%, -300%)")};
`;

export const Middle = styled(Span)`
  transform: ${({ $isOpen }) => ($isOpen ? "translate(-50%, -50%) rotate(0deg)" : "translate(-50%, -50%)")};
  /* opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)}; */
  /* width: ${({ $isOpen }) => ($isOpen ? 0 : 75)}%; */
  transform: ${({ $isOpen }) => ($isOpen ? "translate(-50%, -50%) rotate(45deg)" : "translate(-50%, -50%)")};
`;

export const Bottom = styled(Span)`
  transform: ${({ $isOpen }) => ($isOpen ? "translate(-50%, -50%) rotate(-45deg)" : "translate(0%, 200%)")};
  width: ${({ $isOpen }) => ($isOpen ? 75 : 75 / 2)}%;
  transform: ${({ $isOpen }) => ($isOpen ? "translate(-50%, -50%) rotate(45deg)" : "translate(0%, 200%)")};
  width: ${({ $isOpen }) => ($isOpen ? 0 : 75 / 2)}%;
  transform-origin: bottom right;
  opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
`;
