import Link from "next/link";
import SearchInput from "./SearchInput";
import SelectInput from "./SelectInput";
import { List, Item, Wrapper, NavLink, Forms } from "../styles/styledNavigation";

export default function Navigation({ isOpen, setIsOpen }) {
  return (
    <Wrapper $isOpen={isOpen}>
      <Forms>
        <SearchInput setIsOpen={setIsOpen} />
        <SelectInput setIsOpen={setIsOpen} />
      </Forms>
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
          <Link href="/collections/" passHref>
            <NavLink>Collections</NavLink>
          </Link>
        </Item>
        <Item>
          <Link href="/collections/favorites" passHref>
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
        {/* <Item>
          <NavLink href="https://www.instagram.com/theorangerunner/?hl=en" target="_blank" rel="noopener noreferrer">
            Subscribe
          </NavLink>
        </Item> */}
      </List>
    </Wrapper>
  );
}
