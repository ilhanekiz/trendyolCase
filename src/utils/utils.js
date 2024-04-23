const addZero = (x,n) => {
  while (x.toString().length < n) {
    x = '0' + x;
  }
  return x;
}

const getTime = (date) => {
  const dateParse = Date.parse(date);
  const newDate = new Date(dateParse);
  const minute = addZero(newDate.getMinutes(), 2);
  const hours = addZero(newDate.getHours(), 2);
  return `${hours}:${minute}`;
}

export const setPerfanalytics = (chartListData, metricsData) => {
  if (metricsData) {
    for (let key in metricsData ) {
      chartListData.map(chartItem => {
        const data = chartItem.data.datasets[0];
        const label = data.label;
        if (metricsData[key][label]) {
          data.data.push(metricsData[key][label]);
          chartItem.data.labels.push(getTime(metricsData[key]['timeToCreate']));
        }
      });
    }
  }
  return chartListData;
}