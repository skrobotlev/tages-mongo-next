import Layout from "../components/Layout";
import "../styles/style.css";
import "../styles/main.scss";
import "../styles/variables.scss";
import "../styles/CreditCard.scss";
import "../styles/CreditCardForm.scss";
import "../styles/item-card.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
