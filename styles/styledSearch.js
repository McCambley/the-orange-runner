import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
 `;

export const Loading = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* background-color: #ff9900; */
`;

// This spinner is so cool
export const StatusSpinner = styled.div`
  display: block;
  border: double 4px transparent;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff), conic-gradient(#ff9900, #fff);
  background-origin: border-box;
  background-clip: content-box, border-box;
  width: 200px;
  height: 200px;
  opacity: 1;
  animation: ${spin} 1s infinite linear;
  margin-bottom: 24px;
`;
