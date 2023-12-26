'use client';

import { signOut } from 'next-auth/react';

export default function SignOut() {
  const handleSignOut = async () => {
    try {
      localStorage.clear();
      await signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="text-stone-400 hover:text-stone-200 transition-all"
      onClick={handleSignOut}
    >
      <p className="m-0 p-0">Sign out</p>
    </button>
  );
}
