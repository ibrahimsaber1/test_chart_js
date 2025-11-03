
// D:\FOR_TESTING\others\chart_js_test\my-react-app\src\compounents\Line.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import {lineData} from "../fakeData.jsx"; // D:\FOR_TESTING\others\chart_js_test\my-react-app\src\fakeData.jsx

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

export const LineGraph = () => {

    const options = {}

    // const options = {
    //     responsive: true,
    //     plugins: {
    //     legend: { position: "top" },
    //     title: { display: true, text: "Monthly Sales" },
    //     },
    // };


    return <Line options={options} data={lineData} />
}