'use client';

import './form.scss';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import LoadingDots from '@/components/LoginForm/loading-dots';
import LinkedInLogin from '@/components/LoginForm/linkedin-login';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Form({ type }: { type: 'login' | 'register' }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        if (type === 'login') {
          signIn('credentials', {
            redirect: false,
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value
            // @ts-ignore
          }).then(({ error }) => {
            if (error) {
              setLoading(false);
              toast.error(error);
            } else {
              router.refresh();
              router.push('/dashboard');
            }
          });
        } else {
          fetch('/api/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: e.currentTarget.email.value,
              password: e.currentTarget.password.value
            })
          }).then(async (res) => {
            setLoading(false);
            if (res.status === 200) {
              toast.success('Account created! Redirecting to login...');
              setTimeout(() => {
                router.push('/login');
              }, 2000);
            } else {
              const { error } = await res.json();
              toast.error(error);
            }
          });
        }
      }}
      className="chg-form flex flex-col bg-gray-50 px-4 py-8 sm:px-16"
    >
      <div className="pb-[2rem]">
        <label
          htmlFor="email"
          className="block text-[1.4rem] text-gray-600 uppercase"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="andres@chg.com"
          autoComplete="email"
          required
          className="text-[1.4rem] mt-1 block w-full appearance-none rounded-md border
          border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black"
        />
      </div>
      <div className="pb-[2.5rem]">
        <label
          htmlFor="password"
          className="block text-[1.4rem] text-gray-600 uppercase"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="text-[1.4rem] mt-1 block w-full appearance-none rounded-md border
          border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black"
        />
      </div>
      <div className={'text-center'}>
        <button
          disabled={loading}
          className={`${
            loading ? 'cursor-not-allowed border-gray-200 bg-gray-100' : ''
          } chg-button`}
        >
          {loading ? (
            <LoadingDots color="#808080" />
          ) : (
            <span className="block text-[1.4rem] text-gray-600 uppercase">
              {type === 'login' ? 'Sign In' : 'Sign Up'}
            </span>
          )}
        </button>
        <LinkedInLogin></LinkedInLogin>
        {type === 'login' ? (
          <p className="text-center text-gray-600">
            You don&apos;t have a chg account yet?{' '}
            <Link
              href="/register"
              className="txt-color chg-green text-[1.5rem] text-bold text-uppercase text-decoration-underline"
            >
              Sign up here.
            </Link>{' '}
          </p>
        ) : (
          <p className="text-center text-gray-600">
            You already have an account?{' '}
            <Link
              href="/login"
              className="txt-color chg-green text-[1.5rem] text-bold text-uppercase text-decoration-underline"
            >
              Sign in here
            </Link>{' '}
            instead.
          </p>
        )}
      </div>
    </form>
  );
}
