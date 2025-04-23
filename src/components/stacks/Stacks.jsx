import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import './stacks.scss';

// Register radar chart elements
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const options = {
  scales: {
    r: {
      angleLines: {
        color: 'rgba(200, 200, 200, 0.3)' // radial lines (from center to edge)
      },
      grid: {
        color: 'rgba(200, 200, 200, 0.3)' // circular grid lines
      },
      pointLabels: {
        color: 'white', // label text like "React", "Node", etc.
        font: {
          size: 16,
          type: "sans-serif"
        }
      },
      ticks: {
        display: false // hide numbers on grid rings
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: 'white'
      }
    }
  }
};

// Radar chart data
const data = {
  labels: ['Ruby/Rails', 'React', 'Database', 'Node.js', 'TypeScript', 'SCSS'],
  datasets: [
    {
      label: 'Proficiency (%)',
      data: [80, 90, 70, 65, 75, 85],
      backgroundColor: 'rgba(212, 221, 227, 0.2)',   // light fill
      borderColor: 'rgba(54, 162, 235, 1)',         // radar line
      pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
    },
  ],
};


const Stacks = () => {
  return (
    <div className="stacks-container">
      <h2>Tech Stacks</h2>
      <div className="chart-wrapper">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default Stacks;
