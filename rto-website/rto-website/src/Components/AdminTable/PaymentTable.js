import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css';

const PaymentTable = () => {
  const [paymentData, setPaymentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/GetAllPayment')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPaymentData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Payment Records</h2>
      {loading ? (
        <p className="text-center text-muted">Loading...</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Payment ID</th>
                <th>User ID</th>
                <th>Username</th>
                <th>Payment Amount</th>
                <th>Payment Date</th>
                <th>Payment Method</th>
                <th>Transaction ID</th>
                <th>Service Name</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentData.map((payment) => (
                <tr key={payment.payment_id}>
                  <td>{payment.payment_id}</td>
                  <td>{payment.user_Entity.user_id}</td>
                  <td>{payment.user_Entity.username}</td>
                  <td>{payment.payment_amount}</td>
                  <td>{payment.payment_date}</td>
                  <td>{payment.paymentMethod}</td>
                  <td>{payment.transaction_id}</td>
                  <td>{payment.service_name}</td>
                  <td>{payment.payment_Status || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentTable;
