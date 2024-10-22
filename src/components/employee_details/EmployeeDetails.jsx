import React from 'react';
import { User, Mail, Phone, MapPin, Briefcase, Calendar } from 'lucide-react';
import './EmployeeDetails.css';
import NavBar from '../navbar/NavBar'; // Import the NavBar component

const EmployeeDetails = ({ onLogout }) => { // Accept onLogout as a prop
  // Mock employee data
  const employee = {
    name: 'Alice Johnson',
    title: 'Senior Software Engineer',
    email: 'alice.johnson@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Anytown, USA',
    department: 'Engineering',
    position: 'Software Developer',
    joinDate: 'January 15, 2020',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjqI-FO4W77x6teUKNAXwDAjjNL_ZEEgZ9w&s', // Ensure this URL is correct
  };

  return (
    <div>
      <NavBar onLogout={onLogout} /> {/* Add the NavBar component */}
      <div className="employee-details-container"> {/* No inline styles needed */}
        <img src={employee.profilePicture} alt="Profile" className="profile-picture" />
        <h2 className="employee-title">{employee.name}</h2>
        <h3 className="employee-subtitle">{employee.title}</h3>
        <div className="employee-info">
          <div className="info-item">
            <User className="icon" size={24} />
            <span className="info-label">Position:</span>
            <span className="info-value">{employee.position}</span>
          </div>
          <div className="info-item">
            <Briefcase className="icon" size={24} />
            <span className="info-label">Department:</span>
            <span className="info-value">{employee.department}</span>
          </div>
          <div className="info-item">
            <Mail className="icon" size={24} />
            <span className="info-label">Email:</span>
            <span className="info-value">{employee.email}</span>
          </div>
          <div className="info-item">
            <Phone className="icon" size={24} />
            <span className="info-label">Phone:</span>
            <span className="info-value">{employee.phone}</span>
          </div>
        </div>
        <div className="footer">
          <span>Started on {employee.joinDate}</span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
