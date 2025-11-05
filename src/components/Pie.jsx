import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";

import {PieData} from "../fakeData.jsx"


ChartJS.register(
  Tooltip,
  Legend,
  ArcElement
)


export const PieChart = () => {

    const options ={} ; 

    return <Pie data={PieData} options={options}  /> ;
};