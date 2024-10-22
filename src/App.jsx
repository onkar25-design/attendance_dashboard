import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/admin_login/LoginPage';
import Sidebar from './components/sidebar/Sidebar'; // Import Sidebar
import Dashboard from './components/admin_dashboard/Dashboard';
import LeaveApprovalSystem from './components/leave_atteandance/LeaveApprovalSystem';
import LeaveCalendar from './components/leave_calendar/leave_calendar';
import LeaveBalanceReport from './components/leave_balance/leave_balance';
import AnnouncementPage from './components/announcements/announcement';
import ManageEmployees from './components/employees/manageemployees';
import EmployeeList from './components/employee_list/employee_list';
import ManageAttendance from './components/attendance/manageattendance';
import EmployeeDetails from './components/employee_details/EmployeeDetails'; // Ensure this matches the file name
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Ensure this is false initially
  const [leaveData, setLeaveData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Simulate loading data or authentication check
    const fetchData = async () => {
      // Simulate a delay for loading
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoading(false); // Set loading to false after fetching
    };

    fetchData();
  }, []);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
    if (status) {
      localStorage.setItem('user', 'authenticated');
    } else {
      localStorage.removeItem('user');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  const handleLeaveDataChange = (newLeaveData) => {
    setLeaveData(newLeaveData);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState); // Toggle the sidebar state
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <Router>
      <div className="app">
        {isAuthenticated && !window.location.pathname.includes('/EmployeeDetails') && ( // Hide sidebar on EmployeeDetails page
          <Sidebar 
            onLogout={handleLogout} 
            isMobile={isMobile}
            isOpen={sidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        )}
        <div className={`main-content ${isAuthenticated && !isMobile ? 'with-sidebar' : ''}`}>
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to="/EmployeeDetails" replace /> // Redirect to employee_details after login
                ) : (
                  <LoginPage onLogin={handleLogin} /> // Pass handleLogin to LoginPage
                )
              }
            />
            <Route
              path="/EmployeeDetails" // Ensure this matches the file name
              element={
                isAuthenticated ? (
                  <EmployeeDetails onLogout={handleLogout} /> // Pass handleLogout to EmployeeDetails
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/manage/leaves/approve"
              element={
                isAuthenticated ? (
                  <LeaveApprovalSystem />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/leave-calendar"
              element={
                isAuthenticated ? (
                  <LeaveCalendar leaveData={leaveData} onLeaveDataChange={handleLeaveDataChange} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/leave-balance"
              element={
                isAuthenticated ? (
                  <LeaveBalanceReport leaveData={leaveData} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/announcements"
              element={
                isAuthenticated ? (
                  <AnnouncementPage />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/manage/employees/manage"
              element={
                isAuthenticated ? (
                  <ManageEmployees />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/manage/employees/list"
              element={
                isAuthenticated ? (
                  <EmployeeList employees={[]} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/manage/attendance/manage"
              element={
                isAuthenticated ? (
                  <ManageAttendance />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
