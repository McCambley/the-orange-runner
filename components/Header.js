import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Wrapper, Form, Label, InputWrapper, Input, Button } from "../styles/styledHeader";
import Navigation from "./Navigation";

export default function Header() {
  const [searchPlaceholder, setSearchPlaceholder] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchPlaceholder("Prefontaine");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Searching ${searchValue}`);
  }

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <Wrapper>
      <Link href="/">
        <a>
          <Image priority src="/images/logo-header.jpeg" height={1536} width={1536} alt="The Orange runner" />
        </a>
      </Link>
      <Form onSubmit={handleSubmit} action="">
        <Label htmlFor="search">Search</Label>
        <InputWrapper>
          <Input
            required
            minLength={2}
            maxLength={36}
            name="search"
            id="search"
            type="text"
            placeholder={searchPlaceholder}
            onChange={handleChange}
            value={searchValue}
            validate
          />
          <Button type="submit" />
        </InputWrapper>
      </Form>
      <Navigation />
    </Wrapper>
  );
}
