'use client';

import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function LinkedinLogin() {
  const handleSignIn = () => {
    signIn('linkedin');
  };

  return (
    <>
      <button onClick={handleSignIn}>
        <img
          style={{ height: '100%', width: '100%' }}
          src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSk3pI2NNjzOZHDLDT5sdKXO1Aqc6sLdo-zZA&usqp=CAU'
          }
          alt={'LinkedIn authentication'}
        />
      </button>
    </>
  );
}
