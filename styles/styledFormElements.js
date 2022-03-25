import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    padding: 4px 0 12px;
  }
`;

export const Label = styled.label`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
  font-size: 16px;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    text-align: right;
    font-size: 24px;
    margin-bottom: 4px;
    /* display: none; */
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 60px;
  border-radius: 5px;
  border: 2px solid #000;
  overflow: hidden;
`;

export const Input = styled.input`
  border: none;
  padding: 8px;
  max-width: 100%;
  width: 100%;

  &::placeholder {
    color: #999;
  }

  &:focus-visible {
    outline: #000 auto 1px;
  }
`;

export const Button = styled.button`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ff9900;
  border: none;
  width: 60px;
  max-width: 100%;
  padding: 4px;
  cursor: pointer;
`;

export const StatusMessage = styled.span`
  position: absolute;
  right: 0;
  top: 64px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
  font-size: 16px;
  transition: opacity 0.3s ease;
  opacity: ${({ $show }) => ($show === true ? "1" : "0")};
  color: ${({ status }) => {
    // return status == "good" ? "#ff9900" : "bad" ? "#A24936" : "#000";
    return status == "good" ? "#ff9900" : "bad" ? "#000" : "#000";
  }};

  @media (max-width: 768px) {
    font-size: 24px;
    top: 76px;
    left: 0;
    /* display: none; */
  }
`;

export const SearchButton = styled(Button)`
  background-image: url("/images/search.svg");
`;

export const SubscribeButton = styled(Button)`
  background-image: url("/images/check.svg");
`;

export const Select = styled.select`
  display: block;
  font-family: "PT Serif", serif;

  font-size: 16px;
  font-weight: 700;
  color: #999;
  /* line-height: 1.3; */
  padding: 8px;
  /* width: 100%; */
  max-width: 100%; /* useful when width is set to anything other than 100% */
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  border: 2px solid #000;

  appearance: none;
  /* background-color: #fff; */

  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #ffffff 100%);

  background-repeat: no-repeat, repeat;
  /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
  background-position: right 0.7em top 50%, 0 0;
  /* icon size, then gradient */
  background-size: 0.65em auto, 100%;

  &::-ms-expand {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border-color: #000;
    outline: 1px solid #000;
  }
  &:focus-visible {
    border-color: #000;
    outline: 1px solid #000;
  }
`;

export const Option = styled.option`
  font-weight: normal;
`;
