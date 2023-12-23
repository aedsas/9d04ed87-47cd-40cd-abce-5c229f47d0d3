import MainMenu from '@/components/Menu/main-menu';
import LanguageSwitch from '@/components/LanguageSwitch/language-switch';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Localization | chg Web APP',
  description: 'Language selection page.'
};

export default function Localization() {
  return (
    <div className="flex items-center justify-center w-full mb-[100px]">
      <div className="z-10 w-8/12 m-auto mt-5 rounded border border-gray-200 shadow-xl">
        <div className="flex flex-col items-center justify-center back-color chg-white p-5 text-center">
          <MainMenu active='localization'></MainMenu>
          <h1>Localization</h1>
          <p>The language selector uses a React Context and Local Storage as cache.</p>
          <LanguageSwitch></LanguageSwitch>
        </div>
      </div>
    </div>
  );
}
