import Image from 'next/image';
import Form from '@/components/LoginForm/form';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex items-center justify-center w-full mb-[100px]">
      <div className="z-10 w-8/12 m-auto mt-5 rounded border border-gray-200 shadow-xl">
        <div className="flex flex-col items-center justify-center back-color chg-white p-5 text-center">
          <Link href="/">
            <Image
              src="/logo.png"
              priority
              alt="Logo"
              className="m-auto my-5"
              width={80}
              height={80}
            />
          </Link>
          <h3>Please sign in to continue</h3>
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
