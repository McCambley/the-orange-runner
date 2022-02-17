import React from "react";
import { Button } from "../styles/styledHamburger";

export default function Hamburger({ handleClick, isOpen }) {
  return (
    <Button type="button" onClick={handleClick} $isOpen={isOpen}>
      cool
    </Button>
  );
}
