import ReduxCounter from '@/components/ReduxCounter/counter';
import MainMenu from '@/components/Menu/main-menu';
import LineChart from '@/components/Charts/line-chart';
import { Data } from '@/utils/data';

export default function Dashboard() {
  return (
    <div className="flex items-center justify-center w-full mb-[100px]">
      <div className="z-10 w-8/12 m-auto mt-5 rounded border border-gray-200 shadow-xl">
        <div className="flex flex-col items-center justify-center back-color chg-white p-5 text-center">
          <MainMenu></MainMenu>
          <ReduxCounter></ReduxCounter>
          <LineChart chartData={Data} />
        </div>
      </div>
    </div>
  );
}
