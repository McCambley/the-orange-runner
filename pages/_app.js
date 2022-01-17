import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout home={true}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
