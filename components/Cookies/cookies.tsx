import { cookies } from 'next/headers';
import DismissButton from './dismiss-button';
import Link from 'next/link';

export default function Cookies() {
  const cookieStore = cookies();
  const isHidden = cookieStore.get('cookies-banner-hidden');

  return isHidden ? null : (
    <div className="sticky rounded-2xl w-8/12 sm:w-[80%] z-10 mx-auto pt-5">
      <div className="rounded-[0.5rem] w-full h-full bg-gray-50 border border-gray-200 pt-[22px] pb-0">
        <p className="text-black text-[1.3rem] text-center">
          Before continuing please read our
          <Link
            href={'./legal'}
            className="txt-color chg-green text-[1.3rem] transition-all mx-1 fw-bold"
            target="_blank"
            rel="noreferrer"
          >
            Cookies and Privacy Policy
          </Link>
          <DismissButton />
        </p>
      </div>
    </div>
  );
}
