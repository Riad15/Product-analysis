import React from 'react';
import MyBarChart from '../MybarChart/MyBarChart';
import MylineChart from '../myLineChart/MylineChart';
import './Deshboard.css'

const Deshboard = () => {

    return (
        <div className='chart'>
            <MylineChart></MylineChart>
            <MyBarChart></MyBarChart>
        </div>
    );
};

export default Deshboard;