import Link from "next/link";
import Image from "next/image";
import { Wrapper } from "../styles/styledHeader";

export default function Header() {
  return (
    <Wrapper>
      <Link href="/">
        <a>
          <Image priority src="/images/logo-header.jpeg" height={1536} width={1536} alt="The Orange runner" />
        </a>
      </Link>
    </Wrapper>
  );
}
