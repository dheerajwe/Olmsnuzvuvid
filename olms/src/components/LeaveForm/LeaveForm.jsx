import React, { useState } from 'react';
import './LeaveForm.css'; // Import the CSS file for styling

function LeaveForm() {
  const [formData, setFormData] = useState({
    leaveFrom: '',
    leaveTo: '',
    leaveType: 'none',
    leaveReason: '',
  });

  const [submittedData, setSubmittedData] = useState([]); // State to store submitted data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the form data in submittedData
    setSubmittedData((prevData) => [...prevData, formData]);

    // Log the updated submitted data to the console
    console.log('Submission Log:', [...submittedData, formData]);

    // Reset the form fields
    setFormData({
      leaveFrom: '',
      leaveTo: '',
      leaveType: 'none',
      leaveReason: '',
    });
  };

  return (
    <div className="main-form mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <label htmlFor="leave-from" className="form-label">Leave From</label>
            <input
              type="date"
              id="leave-from"
              name="leaveFrom"
              value={formData.leaveFrom}
              onChange={handleChange}
              className="form-control mb-3"
            />
          </div>
          <div className="col-12">
            <label htmlFor="leave-to" className="form-label">Leave To</label>
            <input
              type="date"
              id="leave-to"
              name="leaveTo"
              value={formData.leaveTo}
              onChange={handleChange}
              className="form-control mb-3"
            />
          </div>
          <div className="col-12">
            <label htmlFor="leave-type" className="form-label">Leave Type</label>
            <select
              name="leaveType"
              id="leave-type"
              value={formData.leaveType}
              onChange={handleChange}
              className="form-select mb-3"
            >
              <option value="none">None</option>
              <option value="outpass">Outpass</option>
              <option value="sickLeave">Sick Leave</option>
              <option value="normalLeave">Normal Leave</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="reason" className="form-label">Reason</label>
            <textarea
              name="leaveReason"
              id="reason"
              rows="3"
              value={formData.leaveReason}
              onChange={handleChange}
              className="form-control mb-3"
            ></textarea>
          </div>
        </div>
        <div className="w-100">
          <input
            type="submit"
            value="Apply Leave"
            className="btn btn-primary w-50"
            style={{ margin: '5px 25%' }}
          />
          
        </div>
      </form>
      

    </div>
  );
}

export default LeaveForm;
