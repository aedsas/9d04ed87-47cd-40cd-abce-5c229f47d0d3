'use client';

import './line-chart.scss';
import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  Title,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Legend
);

interface ICharData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    tension: number;
    backgroundColor: string;
  }[];
}

export const options = {
  responsive: true,
  scale: {
    y: {
      max: 100
    }
  },
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'A new data point is added every 2 seconds to simulate near real-time data streaming.'
    }
  }
};

export default function LineChart() {
  const [chartData, setChartData] = useState({
    labels: ['', new Date().toLocaleTimeString()],
    datasets: [
      {
        label: 'Business KPI',
        data: [0, 20],
        fill: false,
        borderColor: '#840e95',
        tension: 0.2,
        backgroundColor: '#65bdb4'
      }
    ]
  });

  useEffect(() => {
    // Simulate dynamic data
    const interval = setInterval(() => {
      const newLabel = new Date().toLocaleTimeString();
      const newData = Math.floor(Math.random() * 100);

      setChartData((prevChartData: ICharData): ICharData => {
        const maxPoints: number = 100;

        const newLabels =
          prevChartData.labels.length >= maxPoints
            ? [...prevChartData.labels.slice(1), newLabel]
            : [...prevChartData.labels, newLabel];

        const newDataPoints =
          prevChartData.labels.length >= maxPoints
            ? // @ts-expect-error not relevant for current scope
              [...prevChartData.datasets[0].data.slice(1), newData]
            : // @ts-expect-error not relevant for current scope
              [...(prevChartData.datasets[0].data ?? 100), newData];

        return {
          labels: newLabels,
          datasets: [
            {
              ...(prevChartData.datasets[0] ?? {}),
              data: newDataPoints,
              label: prevChartData.datasets[0]?.label ?? '',
              fill: prevChartData.datasets[0]?.fill ?? false,
              borderColor: prevChartData.datasets[0]?.borderColor ?? '#840e95',
              tension: prevChartData.datasets[0]?.tension ?? 0.2,
              backgroundColor:
                prevChartData.datasets[0]?.backgroundColor ?? '#65bdb4'
            }
          ]
        };
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: 'center' }}>Dynamic Line Chart</h2>
      <Line data={chartData} options={options} />
    </div>
  );
}
