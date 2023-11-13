import React from 'react';
import ReactApexChart from 'react-apexcharts';

const MyChartComponent = () => {
  const options = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: [
        "2018-09-19T00:00:00.000Z", 
        "2018-09-19T01:30:00.000Z", 
        "2018-09-19T02:30:00.000Z", 
        "2018-09-19T03:30:00.000Z", 
        "2018-09-19T04:30:00.000Z", 
        "2018-09-19T05:30:00.000Z", 
        "2018-09-19T06:30:00.000Z"
      ]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  };

  const series = [
    {
      name: 'Series 1',
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line" // or any other chart type
      height={300}
	  width={500} // specify the height
    />
  );
};

export default MyChartComponent;
