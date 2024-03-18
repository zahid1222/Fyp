import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  // Define the data for your pie chart
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2>Pie Chart Example</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
