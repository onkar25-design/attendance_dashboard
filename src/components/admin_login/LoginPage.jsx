import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import companyLogo from './company-logo.png';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userType, setUserType] = useState('employee'); // Default to employee
  const [isAdminLogin, setIsAdminLogin] = useState(false); // State for admin login
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

    // Static credentials
    const adminEmail = 'admin@nxtgen.com';
    const adminPassword = 'nxtgen';
    const employeeEmail = 'employee@gmail.com';
    const employeePassword = 'employee@123';

    // Validate credentials based on user type  
    if (userType === 'employee') {
      if (email === employeeEmail && password === employeePassword) {
        onLogin(true); // Call onLogin to update authentication state
        navigate('/EmployeeDetails'); // Redirect to EmployeeDetails after successful login
      } else {
        setError('Invalid credentials for Employee login.'); // Invalid employee credentials
      }
    } else if (userType === 'admin') {
      if (email === adminEmail && password === adminPassword) {
        onLogin(true); // Call onLogin to update authentication state
        navigate('/admin_dashboard'); // Redirect to Admin Dashboard
      } else {
        setError('Invalid credentials for Admin login.'); // Invalid admin credentials
      }
    }
  };

  return (
    <div className="login-page-body">
      <div className="login-container">
        <img src={companyLogo} alt="Company Logo" className="company-logo-LoginForm" />
        <form onSubmit={handleSubmit} className="login-form">
          {isAdminLogin ? (
            <>
              <button 
                type="button" 
                className="back-button" 
                onClick={() => setIsAdminLogin(false)} // Switch back to employee login
              >
                Back {/* Only text, no arrow here */}
              </button>
              <label htmlFor="email" className="login-label">Admin Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="login-input"
              />
              <label htmlFor="password" className="login-label">Admin Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="login-input"
              />
            </>
          ) : (
            <>
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
            </>
          )}
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-button">Login</button>
          <a 
            href="#"
            onClick={() => {
              setUserType('admin');
              setIsAdminLogin(true); // Switch to admin login
            }}
            className="login-as-admin-link"
          >
            Login as Admin
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
