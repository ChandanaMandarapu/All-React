// src/components/DreamVisualization.jsx
import React, { useEffect, useRef } from 'react';
import { useDreamContext } from '../context/DreamContext';
import Chart from 'chart.js/auto';

const DreamVisualization = () => {
  const { dreams } = useDreamContext();
  const chartRef = useRef(null);

  useEffect(() => {
    // Cleanup previous chart before creating a new one
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new chart
    const ctx = document.getElementById('dreamChart').getContext('2d');
    const newChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dreams.map((_, index) => index + 1),
        datasets: [
          {
            label: 'Dreams Over Time',
            data: dreams.map((dream) => dream.length),
            borderColor: '#ffffff',
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
          },
          y: {
            min: 0,
          },
        },
      },
    });

    // Save the chart instance to the ref
    chartRef.current = newChart;

    // Cleanup the chart when the component is unmounted
    return () => {
      newChart.destroy();
    };
  }, [dreams]);

  return (
    <div>
      <h2>Dream Visualization</h2>
      <canvas id="dreamChart" width="400" height="200"></canvas>
    </div>
  );
};

export default DreamVisualization;
