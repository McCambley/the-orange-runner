import styled from "styled-components";

export const Hr = styled.hr`
  border-top: 2px solid #999999;
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

  &:last-of-type {
    margin-right: none;
  }
`;

const Twitter = styled(Icon)`
  background-image: url("/images/share/twitter.svg");
`;

const Facebook = styled(Icon)`
  background-image: url("/images/share/facebook.svg");
`;

const Instagram = styled(Icon)`
  background-image: url("/images/share/instagram.svg");
`;

const LinkedIn = styled(Icon)`
  background-image: url("/images/share/linkedin.svg");
`;

const Copy = styled(Icon)`
  background-image: url("/images/share/copy.svg");
`;
