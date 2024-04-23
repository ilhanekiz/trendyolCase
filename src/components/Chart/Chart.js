import React from 'react';
import { Line } from '@reactchartjs/react-chart.js';

import './Chart.scss';

const chart = (props) => (
  <div className='chart'>
    <Line
      data={props.data}
      options={props.options}
    />
  </div>
);

export default chart;