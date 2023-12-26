'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ILanguage } from '@/components/LanguageSwitch/ILanguage';

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);
const languagesUrl = 'https://retoolapi.dev/TkEl3I/countriesdata';
const defaultLanguagesData = [
  { id: 1, name: 'Global', region: 'Global', 'alpha-2': 'GLB' },
  { id: 2, name: 'Germany', region: 'Europe', 'alpha-2': 'DE' }
];

interface LanguageContextProps {
  languagesData: ILanguage[];
  setLanguagesData: React.Dispatch<React.SetStateAction<ILanguage[]>>;
}

type Props = {
  children?: React.ReactNode;
};

export const LanguageProvider = ({ children }: Props) => {
  const [languagesData, setLanguagesData] = useState<ILanguage[]>([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch(languagesUrl);
        const fetchedLanguages = await response.json();
        setLanguagesData([...defaultLanguagesData, ...fetchedLanguages]);
        localStorage.setItem(
          'languagesData',
          JSON.stringify([...defaultLanguagesData, ...fetchedLanguages])
        );
      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    };

    const cachedData = localStorage.getItem('languagesData');
    if (cachedData) {
      setLanguagesData(JSON.parse(cachedData));
    } else {
      fetchLanguages();
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ languagesData, setLanguagesData }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      'useLanguageContext must be used within a LanguageProvider'
    );
  }
  return context;
};
