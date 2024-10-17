import React from 'react';
import './employee_list.css';

function EmployeeList({ employees }) {
    return (
        <div className="employee-list-container">
            <h2 className="employee-list-title">Employee List</h2>
            {employees.map((employee) => (
                <div className="employee-item" key={employee.id}>
                    <img src={employee.photo} alt={employee.name} className="employee-photo" />
                    <div>
                        <div className="employee-name">{employee.name}</div>
                        <div className="employee-role">{employee.role}</div>
                        <div className="employee-contact">{employee.contact}</div> {/* New contact detail */}
                    </div>
                    <div>
                        <button className="button">Edit</button> {/* Action button */}
                        <button className="button">Delete</button> {/* Action button */}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default EmployeeList;

