import React from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { MixedData } from "../fakeData.jsx";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const MixedChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { 
        display: true, 
        text: "Revenue vs Profit Analysis" 
      },
    },
  };

  return <Chart type="bar" data={MixedData} options={options} />;
};
