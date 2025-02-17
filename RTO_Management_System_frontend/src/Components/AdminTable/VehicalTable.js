import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css';

const VehicalTable = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/GetAllVehicalData')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setVehicles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Vehicle Registrations</h2>
      {loading ? (
        <p className="text-center text-muted">Loading...</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Registration ID</th>
                <th>Vehicle ID</th>
                <th>User ID</th>
                <th>Username</th>
                <th>Status</th>
                <th>Registration Date</th>
                <th>Expiry Date</th>
                <th>Registration Number</th>
                <th>Registration Status</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle) => (
                <tr key={vehicle.registrationId}>
                  <td>{vehicle.registrationId}</td>
                  <td>{vehicle.vehicle_id}</td>
                  <td>{vehicle.user_Entity.user_id}</td>
                  <td>{vehicle.user_Entity.username}</td>
                  <td>{vehicle.user_Entity.status}</td>
                  <td>{vehicle.registrationDate}</td>
                  <td>{vehicle.expiryDate}</td>
                  <td>{vehicle.registrationNumber}</td>
                  <td>{vehicle.registrationStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default VehicalTable;
