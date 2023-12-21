import MainMenu from '@/components/Menu/main-menu';
import LanguageSwitch from '@/components/LanguageSwitch/language-switch';

export default function Localization() {
  return (
    <div className="flex items-center justify-center w-full mb-[100px]">
      <div className="z-10 w-8/12 m-auto mt-5 rounded border border-gray-200 shadow-xl">
        <div className="flex flex-col items-center justify-center back-color chg-white p-5 text-center">
          <MainMenu></MainMenu>
          <LanguageSwitch></LanguageSwitch>
        </div>
      </div>
    </div>
  );
}
