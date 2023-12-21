import { cookies } from 'next/headers';
import DismissButton from './dismiss-button';

export default function Cookies() {
  const cookieStore = cookies();
  const isHidden = cookieStore.get('cookies-banner-hidden');

  return isHidden ? null : (
    <div className="sticky rounded-2xl w-8/12 sm:w-[80%] z-10 mx-auto pt-5">
      <div className="rounded-[0.5rem] w-full h-full bg-gray-50 border border-gray-200 pt-[22px] pb-0">
        <p className="text-black text-[1.3rem] text-center">
          Before continuing please read our
          <a
            className="txt-color chg-green text-[1.3rem] transition-all mx-1 fw-bold"
            href="https://assets-global.website-files.com/6555df3aaec7caa690f44abe/6569ee0c0b84f3bd1934153e_20231201_chg_Datenschutzerkla%CC%88rung_Website.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Cookies and Privacy Policy
          </a>
          <DismissButton />
        </p>
      </div>
    </div>
  );
}
