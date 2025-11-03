import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";

import { DoughnutData } from "../fakeData.jsx";

ChartJS.register(Tooltip, Legend, ArcElement);

export const DoughnutChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: { 
        position: "bottom",
        labels: {
          padding: 20
        }
      },
      title: { 
        display: true, 
        text: "Monthly Budget Distribution",
        font: {
          size: 16
        }
      },
    },
  };

  return <Doughnut data={DoughnutData} options={options} />;
};
