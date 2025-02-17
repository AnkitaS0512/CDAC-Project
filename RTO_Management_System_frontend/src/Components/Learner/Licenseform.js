import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const LicenseForm = () => {
  const [issueDate, setIssueDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = sessionStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      Swal.fire('Error', 'User not logged in or session expired.', 'error');
    }
  }, []);

  const clearForm = () => {
    setIssueDate('');
    setExpiryDate('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      Swal.fire('Error', 'User ID is missing.', 'error');
      return;
    }

    const learnerLicenseData = {
      issue_date: issueDate,
      expiry_date: expiryDate,
    };

    try {
      const response = await fetch(`http://localhost:8080/SaveLearnerData?user_id=${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(learnerLicenseData),
      });

      if (response.ok) {
        const data = await response.json();
        Swal.fire('Success', 'Data saved successfully!', 'success');
        clearForm();
        console.log('Response:', data);
      } else {
        console.error('Failed to save data');
        Swal.fire('Error', 'Failed to save data. Please check the input and try again.', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire('Error', 'An error occurred while saving data.', 'error');
    }
  };

  return (
    <div className="col-12 grid-margin">
      <div className="cardstyle">
        <div className="cardstyle-body">
          <h4 className="cardstyle-title">Learner License Form</h4>
          <form className="form-sample" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Issue Date</label>
                  <div className="col-sm-9">
                    <input
                      type="date"
                      className="form-control"
                      value={issueDate}
                      onChange={(e) => setIssueDate(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Expiry Date</label>
                  <div className="col-sm-9">
                    <input
                      type="date"
                      className="form-control"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <button type="submit" className="btn btn-primary mr-2">
                Submit
              </button>
              <button type="reset" className="btn btn-light" onClick={clearForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LicenseForm;
