import Link from "next/link";
import { useState, useEffect } from "react";
import { List, Item, Wrapper, NavLink, Form, Label, InputWrapper, Input, Button } from "../styles/styledNavigation";

export default function Navigation({ isOpen }) {
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
            value={searchValue}
            validate
          />
          <Button type="submit" />
        </InputWrapper>
      </Form>
      <List>
        <Item>
          <Link href="/">
            <NavLink>Home</NavLink>
          </Link>
        </Item>
        <Item>
          <Link href="/about">
            <NavLink>About</NavLink>
          </Link>
        </Item>
        <Item>
          <Link href="/favorites">
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
