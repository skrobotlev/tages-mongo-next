import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Card App</title>
    </Head>
    {children}
  </>
);

export default Layout;
