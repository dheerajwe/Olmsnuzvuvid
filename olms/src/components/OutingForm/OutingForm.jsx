import React, { useState } from 'react';
import './OutingForm.css'; // Import the CSS file for styling

const OutingForm = () => {
  const [formData, setFormData] = useState({
    outingDate: '',
    outingReason: '',
  });

  const [submittedData, setSubmittedData] = useState([]); // State to store submitted form data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the current form data to submittedData state
    setSubmittedData((prevData) => [...prevData, formData]);

    // Log the submitted form data
    console.log('Outing Form Data:', formData);

    // Reset the form fields
    setFormData({
      outingDate: '',
      outingReason: '',
    });
  };

  return (
    <div className="outing-form-wrapper">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12">
                <label htmlFor="outing-date" className="form-label">
                  Outing Date
                </label>
                <input
                  type="date"
                  id="outing-date"
                  name="outingDate"
                  value={formData.outingDate}
                  onChange={handleChange}
                  className="form-control mb-3"
                />
              </div>
              <div className="col-12">
                <label htmlFor="outing-reason" className="form-label">
                  Reason
                </label>
                <textarea
                  id="outing-reason"
                  name="outingReason"
                  rows="3"
                  value={formData.outingReason}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Type the reason for the outing here"
                ></textarea>
              </div>
            </div>
            <div className="w-100">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary w-50"
                style={{ margin: '5px 25%' }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OutingForm;
