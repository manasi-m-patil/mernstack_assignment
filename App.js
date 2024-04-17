import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';


function App() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then(response => response.json())
      .then(data => {
        setChartData({
          labels: data.map(data => data.timestamp),
          datasets: [{
            label: 'Sample',
            data: data.map(data => data.sample),
            backgroundColor: data.map(data => data.sample === 0 ? 'yellow' : (data.sample === 1 ? 'green' : 'red'))
          }]
        });
      });
  }, []);

  return (
    <>
    <div className="App">
      <Bar data={chartData} />
    </div>
    </>  );
}

export default App;