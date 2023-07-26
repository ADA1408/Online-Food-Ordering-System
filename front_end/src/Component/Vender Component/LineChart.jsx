import React from 'react';
import Plot from 'react-plotly.js';

function LineChart() {
  const data = [
    { x: 1, y: 10 },
    { x: 2, y: 15 },
    { x: 3, y: 13 },
    { x: 4, y: 17 },
    { x: 5, y: 20 },
  ];

  const xData = data.map(item => item.x);
  const yData = data.map(item => item.y);

  return (
    <Plot
      data={[
        {
          x: xData,
          y: yData,
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
        },
      ]}
      layout={{ width: 700, height: 300, title: 'Line Chart' }}
    />
  );
}

export default LineChart;