import styled, { css } from "styled-components";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const IconStyles = css`
  /* width: ${(props) => (props.$fallback ? "36px" : "20px")};
height: ${(props) => (props.$fallback ? "36px" : "20px")}; */
  width: 20px;
  height: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  border: none;
  margin-right: 8px;
  cursor: pointer;
  outline: 1px solid red;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`;

export const Icon = styled.button`
  ${IconStyles}
`;

export const Twitter = styled(TwitterShareButton)`
  ${IconStyles}
  background-image: url("/images/share/twitter.svg");
`;

export const Facebook = styled(FacebookShareButton)`
  ${IconStyles}
  background-image: url("/images/share/facebook.svg");
`;

export const LinkedIn = styled(LinkedinShareButton)`
  ${IconStyles}
  background-image: url("/images/share/linkedin.svg");
`;

// export const Instagram = styled(Icon)`
//   background-image: url("/images/share/instagram.svg");
// `;

export const Copy = styled(Icon)`
  background-image: url("/images/share/copy.svg");
  position: relative;

  &:before {
  content: 'Link Copied to clipboard!';
  text-transform: uppercase;
  font-size: 12px;
  padding: 8px 12px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #000;
  font-family: "Source Sans Pro", sans-serif; 
  font-weight: 900;
  color: #fff;
  top: -52px;
  left: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transform: translate(-75%,0);
  position: absolute;
  white-space: nowrap;

  opacity: ${(props) => (props.$showTooltip ? 1 : 0)};
  visibility: ${(props) => (props.$showTooltip ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

export const ShareIcon = styled(Icon)`
  /* display: ${(props) => (props.$showShare ? "block" : "none")}; */
  background-image: url("/images/share/share.svg");
`;

export const FallBack = styled.div`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  display: flex;
  transform: ${(props) => (props.$isOpen ? "translateX(0)" : "translateX(105%)")};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  z-index: 3;
  height: 100%;
  width: 100%;
  padding: 16px 28px;
  transition: transform 0.5s ease;
`;

export const Content = styled.div`
  width: 100%;
  height: 70px;
  max-width: 400px;
  border-radius: 12px;
  background-color: #fff;
  padding: 8px 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
