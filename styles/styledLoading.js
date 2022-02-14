import styled, { keyframes, css } from "styled-components";

const placeholderShimmer = keyframes`
    0% {
      background-position: -468px 0;
    }
    
    100% {
      background-position: 468px 0; 
    }
  `;

export const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
 `;

export const Wrapper = styled.div`
  /* display: flex; */
  width: 100%;
  /* height: 100%; */
  max-width: 65vh;

  @media (orientation: landscape) and (max-width: 768px) {
    max-width: none;
  }
  /* justify-content: center; */
  /* align-items: center; */
  /* background-color: #ff9900; */
`;

// This spinner is so cool
export const StatusSpinner = styled.div`
  margin: 40px auto 0;
  display: block;
  border: double 4px transparent;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff), conic-gradient(#ff9900, #fff);
  background-origin: border-box;
  background-clip: content-box, border-box;
  width: 60px;
  height: 60px;
  opacity: 1;
  animation: ${spin} 1s infinite linear;
  margin-bottom: 24px;
`;

export const Shimmer = css`
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: block;
  position: relative;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeholderShimmer;
  animation-timing-function: linear;
  color: transparent;
  border-radius: 4px;
`;

export const LoadingHeader = styled.h2`
  ${Shimmer};
  width: 75%;
`;
export const LoadingTime = styled.time`
  ${Shimmer};
  width: 40%;
  margin-bottom: 4px;
`;

export const LoadingParagraph = styled.p`
  ${Shimmer}
  margin-bottom: 8px;
  /* line-height: 1em; */
  background-size: 800px 100%;
`;

export const LoadingDiv = styled.div`
  ${Shimmer}
  width: 100%;
  height: 0;
  padding-top: 100%;
  background-size: 800px 100%;
  margin-bottom: 12px;
`;
