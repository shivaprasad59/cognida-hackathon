import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const AnalyticsDashboard = () => {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/orderHistory');
        setOrderHistory(response.data);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };

    fetchData();
  }, []);

  // Extract spend categories from orderHistory
  const spendCategories = orderHistory.map(order => order.type);

  // Count occurrences of each spend category
  const categoryCounts = spendCategories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  // Prepare data for the chart
  const chartData = {
    labels: Object.keys(categoryCounts),
    datasets: [{
      label: 'Spend Categories',
      data: Object.values(categoryCounts),
      backgroundColor: 'rgba(75,192,192,0.6)',
    }],
  };

  return (
    <div className="analytics-container">
      <h2>Spend Categories Analytics</h2>
      <div className="chart-container">
        <Bar
          data={chartData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Number of Orders',
                },
              },
              x: {
                title: {
                  display: true,
                  text: 'Spend Categories',
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
