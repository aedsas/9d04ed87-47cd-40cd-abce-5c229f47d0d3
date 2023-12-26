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

export default function LanguageSwitch() {
  const dispatch = useDispatch();
  const { languagesData } = useLanguageContext();

  const handleLanguageItemClick = (
    event: React.MouseEvent,
    language: ILanguage
  ): void => {
    event.stopPropagation();
    dispatch(setLocale(language['alpha-2']));
  };

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
