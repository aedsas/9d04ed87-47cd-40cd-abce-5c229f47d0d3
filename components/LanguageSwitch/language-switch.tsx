'use client';

import './language-switch.scss';
import React, { useState, useEffect } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'next/image';
import { setLocale } from '@/redux/localeSlice';
import { useDispatch } from 'react-redux';
import { loadState } from '@/redux/localstorage';
import { useLanguageContext } from '@/context/LanguageContext';
import { ILanguage } from '@/components/LanguageSwitch/ILanguage';

export default function LanguageSwitch() {
  const persistedState = loadState();
  const dispatch = useDispatch();
  const { languagesData, setLanguagesData } = useLanguageContext();
  const handleLanguageItemClick = (event: any, language: any) => {
    event.stopPropagation();
    dispatch(setLocale(language['alpha-2']));
  };

  useEffect(() => {
    // Do something with languagesData
  }, [languagesData]);

  useEffect(() => {
    const currentLocale = persistedState?.locale.value ?? 'DE';
    if (currentLocale !== null) {
      const parsedValue = currentLocale;
      dispatch(setLocale(parsedValue));
    }
  }, [dispatch]);

  const languagesPerRegion = languagesData.reduce(
    (result: Record<string, ILanguage[]>, item: ILanguage) => {
    const { region } = item;
    const normalizedRegion = region.trim() || 'Global'; // If region is empty, set as 'Global'
    if (!result[normalizedRegion]) {
      result[normalizedRegion] = [];
    }
    result[normalizedRegion].push(item);
    return result;
  }, {});
  const sortedRegions = Object.keys(languagesPerRegion).sort();

  return (
    <>
      <Tabs className="mb-3 languages-wrapper">
        {sortedRegions.map((region: string) => (
          <Tab eventKey={region} title={region} key={region}>
            {languagesPerRegion[region].map((item: ILanguage) => (
              <li
                key={item.id}
                className="language-item"
                onClick={(e) => handleLanguageItemClick(e, item)}
              >
                <div className="language-content">
                  <Image
                    src={`/flags/${item['alpha-2'].toLowerCase()}.svg`}
                    priority
                    alt={item.name}
                    width={450}
                    height={300}
                    className="flag rounded-3"
                  />
                  <p className="">{item.name}</p>
                </div>
              </li>
            ))}
          </Tab>
        ))}
      </Tabs>
    </>
  );
}
