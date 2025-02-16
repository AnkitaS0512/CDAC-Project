import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css';

const InsuranceTale = () => {
  const [insuranceData, setInsuranceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/GetAllInsuranceData')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setInsuranceData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Insurance Records</h2>
      {loading ? (
        <p className="text-center text-muted">Loading...</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Insurance ID</th>
                <th>Vehicle ID</th>
                <th>User ID</th>
                <th>Username</th>
                <th>Insurance Company</th>
                <th>Policy Number</th>
                <th>Expiry Date</th>
                <th>Premium Amount</th>
              </tr>
            </thead>
            <tbody>
              {insuranceData.map((insurance) => (
                <tr key={insurance.insurance_id}>
                  <td>{insurance.insurance_id}</td>
                  <td>{insurance.vehicle_id}</td>
                  <td>{insurance.user_Entity.user_id}</td>
                  <td>{insurance.user_Entity.username}</td>
                  <td>{insurance.insurance_company}</td>
                  <td>{insurance.policy_number}</td>
                  <td>{insurance.expiry_date}</td>
                  <td>{insurance.premium_amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default InsuranceTale;
