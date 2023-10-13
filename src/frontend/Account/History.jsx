import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './History.css'; // Add your CSS file for styling

const History = () => {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/orderhistory');
        const flattenedOrderHistory = response.data.flat(); // Flatten the array of arrays
        
        // Extract all the data fields from the 'data' property of each object in the order history
        const extractedData = flattenedOrderHistory.map((order) => order.data[0]);
        
        // Reverse the order history and set it to the state
        const reversedOrderHistory = extractedData.reverse();
        setOrderHistory(reversedOrderHistory);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="order-history-container">
      <h2>Order History</h2>
      {orderHistory.map((order) => {
        return (
          <div key={order.id} className="order-item">
            <img src={order.image_url} alt={order.type} className="order-image" />
            <div className="order-details">
              <h3>Order ID: {order.id}</h3>
              <p>Item: {order.title}</p>
              <p>Size: {order.size}</p>
              <p>Rating: {order.rating}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Total Price: ${order.totalprice}</p>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default History;
