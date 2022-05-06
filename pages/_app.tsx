import Layout from "../components/Layout";
import "../styles/global.scss";
import "../styles/main.scss";
import "../styles/item-card.scss";
import React from "react";
import ContextProvider from "../store";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ContextProvider>
      <Layout>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
