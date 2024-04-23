export const ChartListConfig =
[
  {
    options: { 
      title:{
        display:true,
        text:'Dom Load',
        fontSize:20
      },
      legend:{
        display:false,
        position:'bottom'
      }
    },
    data: {
      labels: [], // Times
      datasets: [
        {
          label: 'domLoad',
          fill: true,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [] // Miliseconds
        }
      ]
    }
  },
  {
    options: { 
      title:{
        display:true,
        text:'Window Load',
        fontSize:20
      },
      legend:{
        display:false,
        position:'bottom'
      }
    },
    data: {
      labels: [],
      datasets: [
        {
          label: 'windowLoad',
          fill: true,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: []
        }
      ]
    }
  },
  {
    options: { 
      title:{
        display:true,
        text:'TTFB',
        fontSize:20
      },
      legend:{
        display:false,
        position:'bottom'
      }
    },
    data: {
      labels: [],
      datasets: [
        {
          label: 'ttfb',
          fill: true,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: []
        }
      ]
    }
  },
  {
    options: { 
      title:{
        display:true,
        text:'FCP',
        fontSize:20
      },
      legend:{
        display:false,
        position:'bottom'
      }
    },
    data: {
      labels: [],
      datasets: [
        {
          label: 'fcp',
          fill: true,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: []
        }
      ]
    }
  }
];