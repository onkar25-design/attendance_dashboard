import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import companyLogo from './company-logo.png';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userType, setUserType] = useState(''); // Updated to start empty
  const [showModal, setShowModal] = useState(true); // State to control modal visibility
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('login-page');
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Check if the user type is selected
    if (!userType) {
      setError('Please select a user type.');
      return; // Prevent submission if user type is not selected
    }

    // Static credentials
    const adminEmail = 'admin@nxtgen.com';
    const adminPassword = 'nxtgen';
    const employeeEmail = 'employee@gmail.com';
    const employeePassword = 'employee@123';

    // Validate credentials based on user type
    if (userType === 'employee') {
      if (email === employeeEmail && password === employeePassword) {
        onLogin(true);
        navigate('/employee-home'); // Redirect to EmployeeHome
      } else {
        setError('Invalid credentials for Employee login.'); // Invalid employee credentials
      }
    } else if (userType === 'admin') {
      if (email === adminEmail && password === adminPassword) {
        onLogin(true);
        navigate('/admin_dashboard'); // Redirect to Admin Dashboard
      } else {
        setError('Invalid credentials for Admin login.'); // Invalid admin credentials
      }
    }
  };

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setShowModal(false); // Close the modal after selection
  };

  return (
    <div className="login-page-body">
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Select User Type</h2>
            <button onClick={() => handleUserTypeSelect('employee')}>Employee</button>
            <button onClick={() => handleUserTypeSelect('admin')}>Admin</button>
          </div>
        </div>
      )}
      {!showModal && (
        <div className="login-container">
          <img src={companyLogo} alt="Company Logo" className="company-logo-LoginForm" />
          <form onSubmit={handleSubmit} className="login-form">
            <label htmlFor="userType" className="login-label">Login as: {userType}</label>
            <label htmlFor="email" className="login-label">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-input"
            />
            <label htmlFor="password" className="login-label">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input"
            />
            {error && <p className="login-error">{error}</p>}
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
