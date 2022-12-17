import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        {session.user?.email} としてサインイン済み
        <br />
        <button onClick={() => signOut()}>サインアウト</button>
      </>
    )
  } else {
    return (
      <>
        サインインしてください
        <br />
        <button onClick={() => signIn()}>サインイン</button>
      </>
    )
  }
}
