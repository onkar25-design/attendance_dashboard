import React from 'react';
import { User, Mail, Phone, MapPin, Briefcase, Calendar } from 'lucide-react';

const EmployeeDetails = () => {
  // Mock employee data
  const employee = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Anytown, USA',
    department: 'Engineering',
    position: 'Software Developer',
    joinDate: '2022-01-15',
  };

  return (
    <div className="employee-details-container">
      <div className="employee-card">
        <h2 className="employee-title">Employee Details</h2>
        <div className="employee-info">
          <div className="info-item">
            <User className="icon" size={24} />
            <div className="info-content">
              <span className="info-label">Name:</span>
              <span className="info-value">{employee.name}</span>
            </div>
          </div>
          <div className="info-item">
            <Mail className="icon" size={24} />
            <div className="info-content">
              <span className="info-label">Email:</span>
              <span className="info-value">{employee.email}</span>
            </div>
          </div>
          <div className="info-item">
            <Phone className="icon" size={24} />
            <div className="info-content">
              <span className="info-label">Phone:</span>
              <span className="info-value">{employee.phone}</span>
            </div>
          </div>
          <div className="info-item">
            <MapPin className="icon" size={24} />
            <div className="info-content">
              <span className="info-label">Address:</span>
              <span className="info-value">{employee.address}</span>
            </div>
          </div>
          <div className="info-item">
            <Briefcase className="icon" size={24} />
            <div className="info-content">
              <span className="info-label">Department:</span>
              <span className="info-value">{employee.department}</span>
            </div>
          </div>
          <div className="info-item">
            <Briefcase className="icon" size={24} />
            <div className="info-content">
              <span className="info-label">Position:</span>
              <span className="info-value">{employee.position}</span>
            </div>
          </div>
          <div className="info-item">
            <Calendar className="icon" size={24} />
            <div className="info-content">
              <span className="info-label">Join Date:</span>
              <span className="info-value">{employee.joinDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
