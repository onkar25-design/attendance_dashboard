import React, { useState } from 'react';
import './employee_list.css';

function EmployeeList() {
    // Sample employee data
    const employees = [
        {
            id: 1,
            name: 'John Doe',
            role: 'Software Engineer',
            contact: 'john.doe@example.com',
            photo: 'https://i.pinimg.com/236x/bf/1e/96/bf1e96ab228573b5f14cca020f781bad.jpg', // Placeholder image for employee
        },
        {
            id: 2,
            name: 'Jane Smith',
            role: 'Project Manager',
            contact: 'jane.smith@example.com',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8hyLQipUmF-WkC6urthWlA_O5oDIK66-GthkDr_SGluXq4J1SKEo5FA0&s', // Placeholder image for employee
        },
        {
            id: 3,
            name: 'Alice Johnson',
            role: 'UX Designer',
            contact: 'alice.johnson@example.com',
            photo: 'https://i.pinimg.com/736x/da/71/86/da7186c69318ebba614256bfe05fa68d.jpg', // Placeholder image for employee
        },
        {
            id: 4,
            name: 'Bob Brown',
            role: 'Data Analyst',
            contact: 'bob.brown@example.com',
            photo: 'https://i.pinimg.com/736x/53/b6/92/53b6924ead89cd43c0743bf166082516.jpg', // Placeholder image for employee
        }
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // Filter employees based on search term
    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update suggestions based on search term
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        setSuggestions(filteredEmployees); // Update suggestions
    };

    // Handle suggestion click
    const handleSuggestionClick = (name) => {
        setSearchTerm(name); // Set the search term to the clicked suggestion
        setSuggestions([]); // Clear suggestions
    };

    return (
        <div className="employee-list-container">
            <div className="header">
                <h2 className="employee-list-title">Employee List</h2>
            </div>
            <div className="search-container">
                <div className="search-input-container">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                </div>
                {suggestions.length > 0 && (
                    <ul className="suggestions-list">
                        {suggestions.map((employee) => (
                            <li key={employee.id} onClick={() => handleSuggestionClick(employee.name)}>
                                {employee.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {filteredEmployees.map((employee) => (
                <div className="employee-item" key={employee.id}>
                    <img src={employee.photo} alt={employee.name} className="employee-photo" />
                    <div className="employee-details">
                        <div className="employee-name">{employee.name}</div>
                        <div className="employee-role">{employee.role}</div>
                        <div className="employee-contact">{employee.contact}</div> {/* New contact detail */}
                    </div>
                    <div className="employee-actions">
                        <button className="button">View Details</button> {/* Action button */}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default EmployeeList;
