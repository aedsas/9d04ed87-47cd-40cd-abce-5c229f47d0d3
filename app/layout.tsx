import './styles/global.scss';
import React from 'react';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import Cookies from '@/components/Cookies/cookies';
import { NextAuthProvider } from '@/context/NextAuthProvider';
import { ReduxProvider } from '@/context/ReduxProvider';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Home | chg Web APP',
  description:
    'Technical Exercise aiming to demonstrate ' +
    'sufficient command of Next.js, React and Redux.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={'de'} suppressHydrationWarning={true}>
      <body className="app-body">
        <Toaster containerClassName="chg-toast" />
        <Cookies></Cookies>
        <NextAuthProvider>
          <LanguageProvider>
            <ReduxProvider>
              {children}
            </ReduxProvider>
          </LanguageProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
