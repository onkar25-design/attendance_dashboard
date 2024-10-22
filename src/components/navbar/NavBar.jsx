import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Create a CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Employee Portal</h1>
      <div className="navbar-links">
        <Link to="/employee_details" className="navbar-link">Profile</Link>
        <Link to="/apply_leave" className="navbar-link">Apply Leave</Link>
        <Link to="/leave_history" className="navbar-link">Leave History</Link>
      </div>
    </nav>
  );
};

export default NavBar;

