import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css';

const ProfileTable = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/GetAllUser')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProfiles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="profile-container container mt-4">
      <h2 className="text-center mb-4">User Profiles</h2>
      {loading ? (
        <p className="text-center text-secondary">Loading...</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                {[
                  'User ID',
                  'Username',
                  'First Name',
                  'Last Name',
                  'Email',
                  'Phone Number',
                  'Address',
                  'Status',
                  'DOB',
                  'Blood Group',
                  'License Status',
                ].map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {profiles.map((profile) => (
                <tr key={profile.user_id}>
                  <td>{profile.user_id}</td>
                  <td>{profile.username}</td>
                  <td>{profile.firstName}</td>
                  <td>{profile.lastName}</td>
                  <td>{profile.email}</td>
                  <td>{profile.phoneNumber}</td>
                  <td>{profile.address}</td>
                  <td>{profile.status}</td>
                  <td>{profile.dob}</td>
                  <td>{profile.bloodGroup}</td>
                  <td>{profile.licenseStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProfileTable;
