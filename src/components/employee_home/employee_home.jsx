import React from 'react';
import './employee_home.css';
import companyLogo from './company-logo.png'; // Replace with your logo path
import Sidebar from '../sidebar/Sidebar'; // Import Sidebar

const EmployeeHome = ({ onLogout }) => {
  return (
    <div className="employee-home">
      <Sidebar onLogout={onLogout} /> {/* Include Sidebar */}
      <div className="main-content">
        <header className="header">
          <img src={companyLogo} alt="Company Logo" className="header-logo" />
          <h1>Welcome to the Employee Portal</h1>
        </header>
        <div className="content">
          <h2>Your Dashboard</h2>
          <p>Here you can manage your tasks, view your leave balance, and more.</p>
          {/* Add more content here as needed */}
        </div>
      </div>
    </div>
  );
};

export default EmployeeHome;
