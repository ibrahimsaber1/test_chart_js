import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import { RadarData } from "../fakeData.jsx";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const RadarChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { 
        display: true, 
        text: "Skills Assessment" 
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100
      }
    }
  };

  return <Radar data={RadarData} options={options} />;
};
