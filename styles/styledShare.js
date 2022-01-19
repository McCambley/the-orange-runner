import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Icon = styled.button`
  width: 20px;
  height: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  border: none;
  margin-right: 8px;
  cursor: pointer;
`;

export const Twitter = styled(Icon)`
  background-image: url("/images/share/twitter.svg");
`;

export const Facebook = styled(Icon)`
  background-image: url("/images/share/facebook.svg");
`;

export const Instagram = styled(Icon)`
  background-image: url("/images/share/instagram.svg");
`;

export const LinkedIn = styled(Icon)`
  background-image: url("/images/share/linkedin.svg");
`;

export const Copy = styled(Icon)`
  background-image: url("/images/share/copy.svg");
`;
