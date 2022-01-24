import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 65vh;
  height: 100%;
  align-items: center;
  justify-content: center;

  @media (orientation: landscape) and (max-width: 768px) {
    max-width: none;
  }
`;

export const Title = styled.h2`
  font-size: 124px;
  font-weight: 900;
  margin-bottom: 8px;
  text-align: center;
  color: #ff9900;
`;

export const Message = styled.h3`
  text-align: center;
  font-size: 36px;
  margin-bottom: 24px;
  color: #999999;
`;

export const Safety = styled.a`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
  color: #ff9900;
`;
