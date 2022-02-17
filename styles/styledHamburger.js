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
  transition: transform 0.3s ease, width 0.3s ease;
`;

export const Top = styled(Span)`
  transform: ${({ $isOpen }) => ($isOpen ? "translate(-85%, -175%) rotate(45deg)" : "translate(-50%, -300%)")};
  width: ${({ $isOpen }) => ($isOpen ? 75 / 2 : 75)}%;
`;

export const Middle = styled(Span)`
  transform: ${({ $isOpen }) => ($isOpen ? "translate(-50%, -50%) rotate(-45deg)" : "translate(-50%, -50%)")};
`;

export const Bottom = styled(Span)`
  transform: ${({ $isOpen }) => ($isOpen ? "translate(-15%, 225%) rotate(45deg)" : "translate(0%, 200%)")};
  transform-origin: top right;
  width: ${75 / 2}%;
`;
