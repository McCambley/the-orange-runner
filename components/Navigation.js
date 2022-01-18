import Link from "next/link";
import { List, Item, Wrapper, NavLink } from "../styles/styledNavigation";

export default function Navigation() {
  return (
    <Wrapper>
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
