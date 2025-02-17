import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FeeScheduleForm = () => {
  const fees = [
    { service: 'Driving License', amount: '2000 Rs' },
    { service: 'Learner License', amount: '1000 Rs' },
    { service: 'Insurance', amount: '5000 Rs' },
    { service: 'Vehicle Registration', amount: '300 Rs' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Fee Schedule</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Service</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee, index) => (
              <tr key={index}>
                <td>{fee.service}</td>
                <td>{fee.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeScheduleForm;
