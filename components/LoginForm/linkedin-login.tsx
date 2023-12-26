'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';

export default function LinkedinLogin() {
  const handleSignIn = async () => {
    try {
      await signIn('linkedin');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button className={'social-login'} onClick={handleSignIn}>
        <Image
          src={'/ln.png'}
          width="300"
          height="56"
          alt={'LinkedIn authentication'}
        />
      </button>
    </>
  );
}
