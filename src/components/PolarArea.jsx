import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { PolarAreaData } from "../fakeData.jsx";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const PolarAreaChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: { 
        display: true, 
        text: "Customer Satisfaction by Category" 
      },
    },
  };

  return <PolarArea data={PolarAreaData} options={options} />;
};
