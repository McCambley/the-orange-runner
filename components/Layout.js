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
        <meta name="keywords" content="Running, Training, Comics, Art, Coffee"></meta>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta
          property="og:image"
          content="https://the-orange-runner.vercel.app/_next/image?url=%2Fimages%2Flogo-header.jpeg&w=1920&q=75"
        />
        <meta property="og:url" content="https://the-orange-runner.vercel.app/" />
        <meta property="og:site_name" content={siteTitle} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta
          name="twitter:image"
          content="https://the-orange-runner.vercel.app/_next/image?url=%2Fimages%2Flogo-header.jpeg&w=1920&q=75"
        />
        <meta name="twitter:site" content="@JakeMcCambley" />
        <meta name="twitter:creator" content="@JakeMcCambley" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Main id="main">{children}</Main>
    </Wrapper>
  );
}
