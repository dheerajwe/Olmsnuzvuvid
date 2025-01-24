import React, { useState } from 'react';
import './ComplaintForm.css'; // Import the CSS file for styling

function ComplaintForm() {
  const [formData, setFormData] = useState({
    complaintType: 'electrical',
    otherComplaint: '',
    leaveComplaint: '',
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

    // Add current form data to submittedData
    setSubmittedData((prevData) => [...prevData, formData]);

    // Log the submitted form data
    console.log('Complaint Form Data:', formData);

    // Reset the form fields
    setFormData({
      complaintType: 'electrical',
      otherComplaint: '',
      leaveComplaint: '',
    });
  };

  return (
    <div className="main-form mx-auto"> {/* Added main-form class here */}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <label htmlFor="complaint-type" className="form-label">
              Complaint Type
            </label>
            <select
              name="complaintType"
              id="complaint-type"
              value={formData.complaintType}
              onChange={handleChange}
              className="form-select mb-3"
            >
              <option value="electrical">Electrical</option>
              <option value="house-keeping">House Keeping</option>
              <option value="plumbing">Plumbing</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="other-complaint" className="form-label">
              Other
            </label>
            <input
              type="text"
              id="other-complaint"
              name="otherComplaint"
              value={formData.otherComplaint}
              onChange={handleChange}
              className="form-control mb-3"
              placeholder="What type of problem is it?"
            />
          </div>
          <div className="col-12">
            <label htmlFor="complaint" className="form-label">Complaint</label>
            <textarea
              name="leaveComplaint"
              id="complaint"
              rows="3"
              value={formData.leaveComplaint}
              onChange={handleChange}
              className="form-control mb-3"
              placeholder="Type the problem here"
            ></textarea>
          </div>
        </div>
        <div className="w-100">
          <input
            type="submit"
            value="Register Complaint"
            className="btn btn-primary w-100" // Full width for button
            style={{ margin: '5px 0' }}
          />
        </div>
      </form>
    </div>
  );
}

export default ComplaintForm;
