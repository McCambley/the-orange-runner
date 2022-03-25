import { useState, useEffect } from "react";
import { Form, Label, InputWrapper, Input, SubscribeButton, StatusMessage } from "../styles/styledFormElements";

export default function SubscribeInput({ setIsOpen }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ quality: "", message: "", show: false });
  const [placeholder, setPlaceholder] = useState("Your email...");
  const successStates = { quality: "good", message: "Subscribed!", show: true };
  const failureStates = { quality: "bad", message: "Already subscribed!", show: true };

  function hideError() {
    setPlaceholder("Your email...");
    setTimeout(() => {
      setStatus((previous) => {
        return { ...previous, show: false };
      });
    }, 3000);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEmail("");
    setPlaceholder(`${email}...`);

    return fetch(`/api/subscribe`, {
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`${res.status} error!`);
        }
        return res.json();
      })
      .then((res) => {
        setStatus(successStates);
        hideError();
      })
      .catch((error) => {
        setStatus(failureStates);
        hideError();
        console.error(error);
      });
  }

  function handleChange(e) {
    setEmail(e.target.value);
  }
  return (
    <Form onSubmit={handleSubmit} action="">
      <Label htmlFor="subscribe">Subscribe</Label>
      <InputWrapper>
        <Input
          required
          minLength={2}
          maxLength={80}
          name="subscribe"
          id="subscribe"
          type="email"
          placeholder={placeholder}
          onChange={handleChange}
          value={email}
          validate
        />
        <SubscribeButton type="submit" />
      </InputWrapper>
      <StatusMessage $show={status.show} status={status.quality}>
        {status.message}
      </StatusMessage>
    </Form>
  );
}
