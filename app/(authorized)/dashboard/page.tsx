"use client";

import MainMenu from '@/components/main-menu'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default function Dashboard() {
  return (
      <>
        <MainMenu></MainMenu>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
            <h1 className="">Language selector and internationalization</h1>
            <Tabs
                className="mb-3"
              >
                <Tab eventKey="Europa" title="Europa">
                    Europa
                </Tab>
                <Tab eventKey="Americas" title="Americas">
                    Americas
                </Tab>
                <Tab eventKey="Oceania" title="Oceania">
                    Oceania
                </Tab>
                <Tab eventKey="Asia" title="Asia">
                    Asia
                </Tab>
                <Tab eventKey="Africa" title="Africa">
                    Africa
                </Tab>
                <Tab eventKey="Global" title="Global">
                    Global
                </Tab>
              </Tabs>
              <p>
                  The current code is: CODE
              </p>
          </div>
        </main>
      </>
  )
}