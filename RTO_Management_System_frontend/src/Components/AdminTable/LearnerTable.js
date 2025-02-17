import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css';

const LearnerTable = () => {
  const [learners, setLearners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/GetAllLearnerData')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setLearners(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Learner License Registrations</h2>
      {loading ? (
        <p className="text-center text-muted">Loading...</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Learner ID</th>
                <th>User ID</th>
                <th>Username</th>
                <th>Status</th>
                <th>Issue Date</th>
                <th>Expiry Date</th>
                <th>Learner Status</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              {learners.map((learner) => (
                <tr key={learner.learner_id}>
                  <td>{learner.learner_id}</td>
                  <td>{learner.user_Entity.user_id}</td>
                  <td>{learner.user_Entity.username}</td>
                  <td>{learner.user_Entity.status}</td>
                  <td>{learner.issue_date}</td>
                  <td>{learner.expiry_date}</td>
                  <td>{learner.learnerStatus}</td>
                  <td>{learner.remark || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LearnerTable;
