import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import companyLogo from './company-logo.png';
import { supabase } from '../../supabaseClient'; // Import the Supabase client

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (userType === 'employee') {
      // Static credentials for employee
      const employeeEmail = 'employee@gmail.com';
      const employeePassword = 'employee@123';

      if (email.trim() === employeeEmail && password.trim() === employeePassword) {
        console.log('Employee login successful');
        onLogin(true);
        navigate('/EmployeeDetails'); // Ensure this path is correct
      } else {
        console.log('Invalid credentials for Employee login.');
        setError('Invalid credentials for Employee login.');
      }
    } else if (userType === 'admin') {
      try {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          console.error('Supabase error:', error.message);
          setError('Invalid credentials for Admin login.');
        } else {
          console.log('Admin login successful');
          onLogin(true);
          navigate('/admin_dashboard');
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setError('Unexpected error occurred.');
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
                onClick={() => {
                  setIsAdminLogin(false);
                  setUserType('employee'); // Reset userType to employee
                  setEmail(''); // Reset email field
                  setPassword(''); // Reset password field
                  setError(''); // Clear any error messages
                }}
              >
                Back
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
              setIsAdminLogin(true);
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
