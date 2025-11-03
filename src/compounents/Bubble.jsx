import React from "react";
import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import { BubbleData } from "../fakeData.jsx";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const BubbleChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { 
        display: true, 
        text: "Product Analysis (Price vs Sales vs Market Share)" 
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Price ($)'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Sales Volume'
        }
      }
    }
  };

  return <Bubble data={BubbleData} options={options} />;
};
