import React, { useState, useEffect } from 'react';

import './Dashboard.scss';
import ChartList from '../../components/ChartList/ChartList';
import { ChartListConfig } from '../../components/ChartList/ChartListConfig';

import { setPerfanalytics } from '../../utils/utils';
import axios from '../../utils/axios';

import { getPerfanalytics } from '../../library/Perfanalytics/Perfanalytics';

const Dashboard = (props) => {
  const [pageLoad, setPageLoad] = useState(false);
  const [chartListData, setChartListData] = useState(ChartListConfig);

  const submitMetricsData = (metricsData) => {
    axios.post('/metrics.json', metricsData)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  useEffect(() => {
    async function fetchData() {
      axios.get('/metrics.json').then(response => {
        const metricsData = response.data;
        const chartsData = setPerfanalytics(chartListData, metricsData);
        setChartListData(chartsData);
        submitMetricsData(getPerfanalytics());
        setPageLoad(true)
      }).catch(error => {
        console.log(error);
      })
    }
    fetchData();
  }, [chartListData, setChartListData]);

  return (
    <>
      { pageLoad ? (
        <>
          <h1 className='title'>PerfAnalytics Dashboard</h1>
          <ChartList chartListData = {chartListData} />
          <div className='dummy-document'>
            <img src='https://picsum.photos/200/300' alt='' />
            <img src='../../assets/images/image-1.jpg' alt='' />
          </div>
        </>
      ) : <div className='preloader-content'><p>Loading....</p></div> }
    </>
  )
};

export default Dashboard;