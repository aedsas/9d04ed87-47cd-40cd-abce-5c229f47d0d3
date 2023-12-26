import { useSession } from 'next-auth/react';

export default async function AuthStatus() {
  const { data: session } = useSession();

  if (session?.user && session !== undefined) {
    return <>{session?.user.email}</>;
  }
  return (
    <>
      Not signed in <br />
    </>
  );
}
