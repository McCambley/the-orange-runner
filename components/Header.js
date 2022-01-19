import Link from "next/link";
import { useState } from "react";
import { Wrapper, Hamburger, LargeLogo, SmallLogo, StickyHeader, Overlay } from "../styles/styledHeader";
import Navigation from "./Navigation";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Wrapper $isOpen={isOpen}>
        <Link href="/" passHref>
          <LargeLogo>
            <Image priority src="/images/logo-header.jpeg" height={1536} width={1536} alt="The Orange runner" />
          </LargeLogo>
        </Link>
        <StickyHeader>
          <Link href="/" passHref>
            <SmallLogo>
              <Image priority src="/images/logo.png" height={512} width={512} alt="The Orange runner" />
            </SmallLogo>
          </Link>
          <Link href="/" passHref>
            <a>
              <Image priority src="/images/the-orange-runner.png" height={67} width={478} alt="The Orange runner" />
            </a>
          </Link>
          <Hamburger type="button" onClick={toggleOpen} $isOpen={isOpen} />
        </StickyHeader>
        <Navigation isOpen={isOpen} />
      </Wrapper>
      <Overlay $isOpen={isOpen} onClick={toggleOpen} />
    </>
  );
}
