'use client';

import { signOut } from 'next-auth/react';

const handleSignOut = () => {
  localStorage.clear();
  signOut();
};

export default function SignOut() {
  return (
    <button
      className="text-stone-400 hover:text-stone-200 transition-all"
      onClick={handleSignOut}
    >
      <p className="m-0 p-0">Sign out</p>
    </button>
  );
}
