import React from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { ScatterData } from "../fakeData.jsx";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const ScatterChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { 
        display: true, 
        text: "Height vs Weight Distribution" 
      },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Height (cm)'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Weight (kg)'
        }
      }
    }
  };

  return <Scatter data={ScatterData} options={options} />;
};
