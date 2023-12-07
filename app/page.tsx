"use client";

// import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <h1 className="">Hello and welcome!</h1>
        <p>
          This tutorial will guide you through the technical exercise. The main
          goal of this app is to demonstrate sufficient command of the React
          ecosystem. The selected stack includes, but is not limited to, the
          technologies used by CHAGOS.
        </p>
        <p>
          The selected tech includes some technologies that may be redundant in
          a production environment (e.g., Boostrap and Tailwind). This is by
          design, as the goal of this app is to showcase capabilities.
        </p>
        <p>
          <Link href="/login" title="Start!">
            Click here to get started!
          </Link>
        </p>
      </div>
    </main>
  )
}
