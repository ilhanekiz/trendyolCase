import React from 'react';

import Chart from '../Chart/Chart';
import './ChartList.scss'

const chartList = (props) => {
  const chartList = props.chartListData.map((chart, index) => {
    return (
        <Chart
            key={index}
            data={chart.data}
            options={chart.options}
        />
    );
  });

  return (
    <div className='chart-container'>
      {chartList}
    </div>
  );
};

export default chartList;
