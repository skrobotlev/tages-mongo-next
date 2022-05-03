import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Card App</title>
    </Head>
    <div className="navigation">
      <Link href="/items-list">
        <h1>Items list</h1>
        {/* <a>Items list</a> */}
      </Link>
      <h2>Navigation</h2>
      <Link href="/add-items">
        <h1>Add items</h1>
      </Link>
    </div>
    {children}
  </>
);

export default Layout;