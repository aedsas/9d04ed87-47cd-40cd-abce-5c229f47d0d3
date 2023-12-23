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
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

// @ts-ignore
export default function LineChart() {
  const [chartData, setChartData] = useState({
    labels: [
            new Date().toLocaleTimeString(),
          ],
    datasets: [
      {
        label: 'Dynamic Line Chart',
        data: [100],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        backgroundColor: "purple",
      }
    ]
  });

  useEffect(() => {
    // Simulate dynamic data
    const interval = setInterval(() => {
      const newLabel = new Date().toLocaleTimeString();
      const newData = Math.floor(Math.random() * 100);

      setChartData((prevChartData) => {
        // Keep a maximum of 20 data points
        const newLabels =
          prevChartData.labels.length >= 100
            ? [...prevChartData.labels.slice(1), newLabel]
            : [...prevChartData.labels, newLabel];

        const newDataPoints =
          prevChartData.datasets[0].data.length >= 100
            ? [...prevChartData.datasets[0].data.slice(1), newData]
            : [...prevChartData.datasets[0].data, newData];

        return {
          labels: newLabels,
          datasets: [
            {
              ...prevChartData.datasets[0],
              data: newDataPoints,
            },
          ],
        };
      });
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: 'center' }}>Dynamic Line Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Stats'
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
