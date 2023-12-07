import './global.scss'
import type { Metadata } from 'next'
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: 'Home | CHAGOS Web APP',
  description: 'Technical Exercise aiming to demonstrate ' +
      'sufficient command of Next.js, React and Redux.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="app-body">
        <Toaster />
        {children}
      </body>
    </html>
  )
}
