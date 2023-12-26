import Image from 'next/image';
import Form from '@/components/LoginForm/form';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register | chg Web APP',
  description: "You don't have an account yet? You can register here."
};

export default function Login() {
  return (
    <div className="flex items-center justify-center w-full mb-[100px]">
      <div className="z-10 w-11/12 md:w-10/12 xl:w-8/12 m-auto mt-5 rounded border border-gray-200 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
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
          <h1>Sign Up</h1>
          <p className="w-[80%] text-gray-500">
            Create an account with your email and password
          </p>
        </div>
        <Form type="register" />
      </div>
    </div>
  );
}
