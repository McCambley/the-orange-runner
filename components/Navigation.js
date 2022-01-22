import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearch } from "../context/searchContext";
import { List, Item, Wrapper, NavLink, Form, Label, InputWrapper, Input, Button } from "../styles/styledNavigation";

export default function Navigation({ isOpen }) {
  const [searchPlaceholder, setSearchPlaceholder] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const { keyword, setKeyword, loading, error, searchResults, search } = useSearch();

  useEffect(() => {
    setSearchPlaceholder("Prefontaine");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    search(keyword);
  }

  function handleChange(e) {
    setKeyword(e.target.value);
  }
  return (
    <Wrapper $isOpen={isOpen}>
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
      <List>
        <Item>
          <Link href="/" passHref>
            <NavLink>Home</NavLink>
          </Link>
        </Item>
        <Item>
          <Link href="/about" passHref>
            <NavLink>About</NavLink>
          </Link>
        </Item>
        <Item>
          <Link href="/favorites" passHref>
            <NavLink>Favorites</NavLink>
          </Link>
        </Item>
        <Item>
          <NavLink href="https://theorangerunner.com/shop/" target="_blank" rel="noopener noreferrer">
            Shop
          </NavLink>
        </Item>
        <Item>
          <NavLink href="https://www.patreon.com/" target="_blank" rel="noopener noreferrer">
            Patreon
          </NavLink>
        </Item>
      </List>
    </Wrapper>
  );
}
