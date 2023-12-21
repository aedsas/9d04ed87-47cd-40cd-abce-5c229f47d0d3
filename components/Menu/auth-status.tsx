import { useSession } from "next-auth/react"

export default async function AuthStatus() {
  const { data: session } = useSession();

  if(session) {
    return <>
      {
        // @ts-ignore
        session.user.email
      }
    </>
  }
  return <>
    Not signed in <br/>
  </>
}
