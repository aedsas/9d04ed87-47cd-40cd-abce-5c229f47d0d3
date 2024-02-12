import { useSession } from 'next-auth/react';

export default function AuthStatus() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <>Loading...</>;
  }

  if (!session) {
    return <>Not signed in</>;
  }

  return <>{session?.user?.email}</>;
}
