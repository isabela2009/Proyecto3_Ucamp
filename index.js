const chartData = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [{
      label: 'API Data',
      data: [10, 20, 30],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };
  const chart = new Chart(document.getElementById('chart'), {
    type: 'bar',
    data: chartData,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });