import { GlobalStyle } from "../styles/Global";
import { SearchProvider } from "../context/searchContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SearchProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </SearchProvider>
    </>
  );
}

export default MyApp;
