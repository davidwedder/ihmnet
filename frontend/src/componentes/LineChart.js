import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as chartjs,
    LinearScale,
    CategoryScale,
    LineElement,
    PointElement,
    Legend,
    Title,

}from "chart.js";


chartjs.register(
    LinearScale,
    CategoryScale,
    LineElement,
    PointElement,
    Legend,
    Title,
);

export const Data = [ { id : 1 , ano : 2016 , userGain : 80000 , userLost : 823 }, { id : 2 , ano : 2017 , userGain : 45677 , userLost : 345 }, { id : 3 , ano : 2018 , userGain : 78888 , userLost : 555 }, { id : 4 , ano : 2019 , userGain : 90000 , userLost : 4555 }, { id : 5 , ano : 2020 , userGain : 4300 , userLost : 234 } ];


const Chart = styled.div`
    width: 600px;
    height: 300px;
    color: red;
   
`;

function LineChart() {

    const chartData = {
        labels:["Mobile", "TV", "Fridge", "Bike"],
        datasets:[
            {
                data:[6700,2300,500,3000],
                label:"Sales in Year 2024",
            },
        ],
    };
  return (
    <Chart>
        <Line data={chartData}></Line>
    </Chart>
  );
}
export default LineChart;