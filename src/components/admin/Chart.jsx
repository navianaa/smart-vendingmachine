import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Labels for each month
    datasets: [
      {
        type: 'bar', // This is a bar chart for temperature
        label: 'Suhu',
        data: [30, 50, 60, 70, 90, 100, 120], // Temperature data
        backgroundColor: 'rgba(54, 162, 235, 0.5)', // Bar color
        borderColor: 'rgba(54, 162, 235, 1)', // Bar border color
        borderWidth: 1,
      },
      {
        type: 'line', // This is a line chart for humidity
        label: 'Humidity',
        data: [20, 40, 50, 60, 80, 90, 110], // Humidity data
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Line area fill color
        fill: false,
        tension: 0.4, // Line smoothing
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      title: {
        display: true,
        text: 'Suhu dan Humidity', // Chart title
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Y-axis starts from 0
      },
    },
  };

  return <Bar data={data} options={options} />; // Rendering the Bar chart
};

export default Chart;
