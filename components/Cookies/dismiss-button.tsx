'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function DismissButton() {
  const router = useRouter();

  return (
    <button
      className="chg-button small-button"
      onClick={() => {
        Cookies.set('cookies-banner-hidden', 'true');
        router.refresh();
      }}
    >
      Click here to accept
    </button>
  );
}
