import ReduxCounter from '@/components/ReduxCounter/counter';
import MainMenu from '@/components/Menu/main-menu';
import LineChart from '@/components/Charts/line-chart';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | chg Web APP',
  description: 'Simple dashboard with dynamic line chart.'
};

export default function Dashboard() {
  return (
    <div className="flex items-center justify-center w-full mb-[100px]">
      <div className="z-10 w-8/12 m-auto mt-5 rounded border border-gray-200 shadow-xl">
        <div className="flex flex-col items-center justify-center back-color chg-white p-5 text-center">
          <MainMenu  active='dashboard'></MainMenu>
          <h1>Dashboard</h1>
          <p>
            This counter keeps the state between sessions using REDUX.
          </p>
          <ReduxCounter></ReduxCounter>
          <LineChart />
        </div>
      </div>
    </div>
  );
}
