import React, { useState } from 'react';
import Title from '../components/title';

const OrderDetails = () => {
  const [orderNo, setOrderNo] = useState('');
  const [orderData, setOrderData] = useState(null);

  const handleOrderNoChange = (e) => {
    setOrderNo(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/getorder/${orderNo}`);
      const data = await response.json();

      if (response.ok) {
        setOrderData(data);
      } else {
        console.error('Error fetching order details:', data.error);
        setOrderData(null);
      }
    } catch (error) {
      console.error('Error fetching order details:', error.message);
      setOrderData(null);
    }
  };

  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="Order Status"></Title>
          <form className="mt-5" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input type="text" name="orderNo" className="form-control" placeholder="Order Number" value={orderNo} onChange={handleOrderNoChange} />
            </div>
            <div className="form-group mt-3">
              <input type="submit" value="Get Order Details" className="form-control bg-primary text-white" />
            </div>
          </form>

          {orderData && (
            <div className="mt-4">
              <h3>Order Details</h3>
              <p>Order Number: {orderData.order_number}</p>
              <p>Customer Name: {orderData.customer_name}</p>
              <p>Email: {orderData.email}</p>
              <p>Total Amount: {orderData.total_amount}</p>
              <p>STATUS: {orderData.status}</p>
              {/* Add more fields as needed */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
