import { GlobalStyle } from "../styles/Global";
import { SlugProvider } from "../context/slugContext";

function MyApp({ Component, pageProps }) {
  return (
    <SlugProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </SlugProvider>
  );
}

export default MyApp;
