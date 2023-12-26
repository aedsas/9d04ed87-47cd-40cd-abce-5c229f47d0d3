import Image from 'next/image';
import Form from '@/components/LoginForm/form';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | chg Web APP',
  description: 'Welcome! To continue you must log in.'
};

export default function Login() {
  return (
    <div className="flex items-center justify-center w-full mb-[100px]">
      <div className="z-10 w-11/12 md:w-10/12 xl:w-8/12 m-auto mt-5 rounded border border-gray-200 shadow-xl">
        <div className="flex flex-col items-center justify-center back-color chg-white p-5 text-center">
          <Link href="/">
            <Image
              src="/logo.png"
              priority
              alt="Logo"
              className="main-logo small"
              width={250}
              height={250}
            />
          </Link>
          <h1>Please sign in to continue</h1>
          <p className="w-[80%] text-gray-500">
            To simulate a business application with a customer portal the rest
            of the exercise can only be accessed by authenticated users.
          </p>
          <p>Please use your email and password to sign in:</p>
        </div>
        <Form type="login" />
      </div>
    </div>
  );
}
