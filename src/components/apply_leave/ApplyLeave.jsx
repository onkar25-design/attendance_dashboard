import React, { useState } from 'react';
import NavBar from '../navbar/NavBar'; // Import the NavBar component
import './ApplyLeave.css'; // Import the CSS file for styling

const ApplyLeave = ({ onLogout }) => { // Accept onLogout as a prop
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Leave Applied:', { leaveType, startDate, endDate, reason });
  };

  return (
    <div className="apply-leave-page"> {/* Add a wrapper class */}
      <NavBar onLogout={onLogout} /> {/* Add the NavBar component */}
      <div className="apply-leave-container">
        <h2>Apply for Leave</h2>
        <form onSubmit={handleSubmit} className="apply-leave-form">
          <div className="form-group">
            <label htmlFor="leaveType">Leave Type:</label>
            <select
              id="leaveType"
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              required
            >
              <option value="">Select Leave Type</option>
              <option value="sick">Sick Leave</option>
              <option value="casual">Casual Leave</option>
              <option value="annual">Annual Leave</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="reason">Reason:</label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ApplyLeave;
