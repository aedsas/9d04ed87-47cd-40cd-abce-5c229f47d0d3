'use client';

import React from 'react';
import './language-switch.scss';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'next/image';
import { setLocale } from '@/redux/localeSlice';
import { useDispatch } from 'react-redux';
import { useLanguageContext } from '@/context/LanguageContext';
import type { ILanguage } from '@/components/LanguageSwitch/ILanguage';

// TODO Use either Context or Redux for all localization related functionality.
// For the exercise the implementation uses both, but it real projects it is
// advised to use one approach at a time.

export default function LanguageSwitch() {
  // The country data fetched from API is saved in local storage and accessed via Context
  const { languagesData } = useLanguageContext();
  const dispatch = useDispatch();

  // The locale indicator in the Menu uses Redux, so must be set using its reducer action
  const handleLanguageItemClick = (
    event: React.MouseEvent,
    language: ILanguage
  ): void => {
    event.stopPropagation();
    dispatch(setLocale(language['alpha-2']));
  };

  // Reshape country data fetched by API and managed by Context into regions
  const languagesPerRegion = languagesData.reduce(
    (result: Record<string, ILanguage[]>, item: ILanguage) => {
      const { region } = item;
      const normalizedRegion = region.trim() || 'Global';
      if (!result[normalizedRegion]) {
        result[normalizedRegion] = [];
      }

      result[normalizedRegion]?.push(item);
      return result;
    },
    {}
  );

  // Sorting those resulting regions alphabetically
  const sortedRegions = Object.keys(languagesPerRegion).sort();

  return (
    <>
      <Tabs className="mb-3 languages-wrapper">
        {sortedRegions.map((region: string) => (
          <Tab eventKey={region} title={region} key={region}>
            {languagesPerRegion[region]?.map((item: ILanguage) => (
              <li
                key={item.id}
                className="language-item"
                onClick={(e: React.MouseEvent) =>
                  handleLanguageItemClick(e, item)
                }
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
