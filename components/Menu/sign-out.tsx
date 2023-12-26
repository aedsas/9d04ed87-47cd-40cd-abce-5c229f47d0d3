'use client';

import { signOut } from 'next-auth/react';
import toast from 'react-hot-toast';

export default function SignOut() {
  const handleSignOut = async () => {
    try {
      localStorage.clear();
      toast.success('Login out...');
      await signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="text-stone-400 hover:text-stone-200 transition-all sign-out-button"
      onClick={handleSignOut}
    >
      <p className="m-0 p-0">Sign out</p>
    </button>
  );
}
