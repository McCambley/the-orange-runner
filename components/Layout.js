import Head from "next/head";
import Header from "./Header";
import { Main, Wrapper } from "../styles/styledLayout";
export const siteTitle = "The Orange Runner";
export const siteDescription = "A comic about running";

export default function Layout({ children, home }) {
  return (
    <Wrapper>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:ital@0;1&family=Source+Sans+Pro:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  );
}
