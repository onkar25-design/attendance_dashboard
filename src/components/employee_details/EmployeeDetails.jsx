import React from 'react';
import { User, Mail, Phone, MapPin, Briefcase, Calendar } from 'lucide-react';
import NavBar from '../navbar/NavBar'; // Import the NavBar

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
    <div className="container">
      <NavBar /> {/* Add the NavBar here */}
      <div className="card">
        <h2 className="card-title">Employee Details</h2>
        <div className="details">
          <div className="detail-item">
            <User className="icon" size={24} />
            <span className="label">Name:</span>
            <span className="value">{employee.name}</span>
          </div>
          <div className="detail-item">
            <Mail className="icon" size={24} />
            <span className="label">Email:</span>
            <span className="value">{employee.email}</span>
          </div>
          <div className="detail-item">
            <Phone className="icon" size={24} />
            <span className="label">Phone:</span>
            <span className="value">{employee.phone}</span>
          </div>
          <div className="detail-item">
            <MapPin className="icon" size={24} />
            <span className="label">Address:</span>
            <span className="value">{employee.address}</span>
          </div>
          <div className="detail-item">
            <Briefcase className="icon" size={24} />
            <span className="label">Department:</span>
            <span className="value">{employee.department}</span>
          </div>
          <div className="detail-item">
            <Briefcase className="icon" size={24} />
            <span className="label">Position:</span>
            <span className="value">{employee.position}</span>
          </div>
          <div className="detail-item">
            <Calendar className="icon" size={24} />
            <span className="label">Join Date:</span>
            <span className="value">{employee.joinDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
