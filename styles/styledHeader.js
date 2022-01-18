import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ;
  border-top: 8px solid #ff9900;
  padding: 16px 30px 0;
  max-height: 100vh;
  overflow: scroll;

  @media (max-width: 768px) {
    flex-direction: column;
    transform: rotate(-0.5deg);
    transition: transform 0.3s ease;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
  font-size: 16px;
  margin-bottom: 4px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid #000;
  overflow: hidden;
`;

export const Input = styled.input`
  border: none;
  padding: 8px;

  &:focus-visible {
    outline: #000 auto 1px;
  }
`;

export const Button = styled.button`
  background-image: url("/images/search.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #000;
  border: none;
  width: 200px;
  padding: 4px;
  cursor: pointer;
`;
