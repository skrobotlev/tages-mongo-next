import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Products grid</title>
    </Head>
    <div className="navigation">
      <Link href="/items-list">
        <h1>Items list</h1>
      </Link>
      <Link href="/add-items">
        <h1>Add items</h1>
      </Link>
    </div>
    {children}
  </>
);

export default Layout;
