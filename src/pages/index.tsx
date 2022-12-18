import { signIn, signOut, useSession } from 'next-auth/react'

import { TodoList } from '~/components/TodoList'

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        {session.user?.email} としてサインイン済み
        <br />
        <button onClick={() => signOut()}>サインアウト</button>
        <TodoList />
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
