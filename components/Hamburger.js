import React from "react";
import { Button, Top, Middle, Bottom } from "../styles/styledHamburger";

export default function Hamburger({ handleClick, isOpen }) {
  return (
    <Button type="button" onClick={handleClick} $isOpen={isOpen}>
      <Top $isOpen={isOpen} />
      <Middle $isOpen={isOpen} />
      <Bottom $isOpen={isOpen} />
    </Button>
  );
}
