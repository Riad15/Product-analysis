import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';
import './mylineChart.css'

const MylineChart = () => {
    const [data, setData] = useChart();
    console.log(data);
    return (
        <div className='line-chart'>
            <h1>per month sell</h1>
            <LineChart width={420} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <Line dataKey={'sell'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis dataKey={'sell'} ></YAxis>

            </LineChart>
        </div>
    );
};

export default MylineChart;