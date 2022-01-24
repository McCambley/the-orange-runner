/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Wrapper, Title, Message, Safety } from "../styles/styledNotFound";
import Layout from "../components/Layout";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);

  return (
    <Layout>
      <Wrapper>
        <Title>404</Title>
        <Message>{"Oops! We're lost."}</Message>
        <Link href="/" passHref>
          <Safety>&larr; Head back home </Safety>
        </Link>
      </Wrapper>
    </Layout>
  );
}
