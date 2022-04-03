import React from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const MyBarChart = () => {
    const [data, setData] = useChart();
    return (
        <div>
            <h1>investment Vs revenue </h1>
            <BarChart width={730} height={250} data={data}>
                <Bar dataKey={'investment'} fill="#8884d8"></Bar>
                <Bar dataKey={' revenue'} fill="#82ca9d"></Bar>
                <XAxis dataKey={'revenue'}></XAxis>
                <YAxis dataKey={'investment'}></YAxis>

            </BarChart>

        </div>
    );
};

export default MyBarChart;