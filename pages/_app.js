import Layout from "../components/Layout";
import "../styles/global.scss";
import "../styles/main.scss";
import "../styles/item-card.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
