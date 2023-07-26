import React from 'react';
import Plot from 'react-plotly.js';

function PieChart() {
  const data = [
    { values: [50, 25, 25], labels: ['Apples', 'Oranges', 'Bananas'], type: 'pie' },
  ];

  const layout = { width: 400, height: 300, title: 'Pie Chart' };

  return (
    <Plot
      data={data}
      layout={layout}
    />
  );
}

export default PieChart;