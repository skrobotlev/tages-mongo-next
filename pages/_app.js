import Layout from "../components/Layout";
import "../styles/global.scss";
import "../styles/main.scss";
import "../styles/item-card.scss";
import React from "react";
import ContextProvider from "../store/";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
