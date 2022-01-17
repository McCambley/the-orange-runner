import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GlobalStyle } from "../styles/Global";

const name = "The Orange Runner";
export const siteTitle = "The Orange Runner";
export const siteDescription = "A comic about running";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <GlobalStyle />
      <header>
        {home ? (
          <>
            <Image priority src="/images/logo.png" height={144} width={144} alt={name} />
            <h1>The Orange Runner</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image priority src="/images/logo.png" height={108} width={108} alt={name} />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>The Orange Runner</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer>The Orange Runner &copy; 2022</footer>
    </>
  );
}
