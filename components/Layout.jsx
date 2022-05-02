import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Card App</title>
    </Head>
    <div>
      <Link href="/items-list">
        <a>Items list</a>
      </Link>
      <Link href="/add-items">
        <a>Add items</a>
      </Link>
    </div>
    {children}
  </>
);

export default Layout;
