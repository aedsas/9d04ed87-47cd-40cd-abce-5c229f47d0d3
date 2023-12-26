import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full mb-[100px]">
      <div className="z-10 w-11/12 md:w-10/12 xl:w-8/12 m-auto mt-5 rounded border border-gray-200 shadow-xl">
        <div className="border-b back-color chg-white border-gray-200 px-5 py-6">
          <Image
            src="/logo.png"
            priority
            alt="Logo"
            className="main-logo"
            width={250}
            height={250}
          />
          <h1 className="text-center txt-color chg-green">Hello and welcome</h1>
          <p className="txt">
            This tutorial will guide you through the technical exercise. The
            main goal of this app is to demonstrate sufficient command of the
            React ecosystem. The selected stack includes, but is not limited to,
            the technologies used by chg.
          </p>
          <p>
            The selected tech includes some technologies that may be redundant
            in a production environment (e.g., Boostrap/Tailwind or
            Redux/Context). This is by design, as the main goal of this app is
            to showcase capabilities.
          </p>
        </div>
        <div className="flex w-full justify-center py-5">
          <Link href="/login" title="Start!" className="chg-button">
            <span className="font-bold">Click here to get started!</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
