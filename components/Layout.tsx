import Head from "next/head";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"

export function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

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
