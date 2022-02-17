import Link from "next/link";
import { useState } from "react";
import { Wrapper, LargeLogo, SmallLogo, StickyHeader, Overlay } from "../styles/styledHeader";
import Navigation from "./Navigation";
import Hamburger from "./Hamburger";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen(e) {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Wrapper $isOpen={isOpen}>
        <Link href="/" passHref>
          <LargeLogo>
            <Image src="/images/logo-header.jpeg" height={1536} width={1536} alt="The Orange runner" />
          </LargeLogo>
        </Link>
        <StickyHeader>
          <Link href="/" passHref>
            <SmallLogo>
              <Image src="/images/logo.png" height={76} width={76} alt="The Orange runner" />
            </SmallLogo>
          </Link>
          <Link href="/" passHref>
            <a>
              <Image src="/images/the-orange-runner.png" height={67} width={478} alt="The Orange runner" />
            </a>
          </Link>
          <Hamburger handleClick={toggleOpen} isOpen={isOpen} />
        </StickyHeader>
        <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      </Wrapper>
      <Overlay $isOpen={isOpen} onClick={toggleOpen} />
    </>
  );
}
