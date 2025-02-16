import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css';

const DrivingTable = () => {
  const [licenses, setLicenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/GetAllLicensesData')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setLicenses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Driving Licenses</h2>
      {loading ? (
        <p className="text-center text-secondary">Loading...</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>License ID</th>
                <th>User ID</th>
                <th>Username</th>

                <th>Status</th>
                <th>License Type</th>
                <th>Issue Date</th>
                <th>Expiry Date</th>
                <th>License Number</th>
                <th>Vehicle Type</th>
                <th>Driving Status</th>
              </tr>
            </thead>
            <tbody>
              {licenses.map((license) => (
                <tr key={license.license_id}>
                  <td>{license.license_id}</td>
                  <td>{license.user_Entity.user_id}</td>
                  <td>{license.user_Entity.username}</td>
                  <td>{license.user_Entity.status}</td>
                  <td>{license.license_Type}</td>
                  <td>{license.issue_date || 'N/A'}</td>
                  <td>{license.expiry_date || 'N/A'}</td>
                  <td>{license.license_number || 'N/A'}</td>
                  <td>{license.vehicle_Type}</td>
                  <td>{license.drivingStatus || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DrivingTable;
