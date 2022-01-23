import { useState, useEffect } from "react";
import { useSearch } from "../context/searchContext";
import { Form, Label, InputWrapper, Input, Button } from "../styles/styledFormElements";

export default function SearchInput() {
  const [searchPlaceholder, setSearchPlaceholder] = useState("");
  //   const [searchValue, setSearchValue] = useState("");
  const { keyword, setKeyword, loading, error, searchResults, search } = useSearch();

  useEffect(() => {
    setSearchPlaceholder("Prefontaine");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setIsOpen(false);
    search(keyword.toLowerCase());
  }

  function handleChange(e) {
    setKeyword(e.target.value);
  }

  return (
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
          value={keyword}
          pattern="[a-zA-Z0-9 ]+"
          validate
        />
        <Button type="submit" />
      </InputWrapper>
    </Form>
  );
}
