import React, { useState } from "react";

const EmployeeForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [employees, setEmployees] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target; //Destructuring
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "position") {
      setPosition(value);
    } else if (name === "salary") {
      setSalary(value);
    }
  };

  const handleSubmit = () => {
    const newEmployee = { firstName, lastName, position, salary };
    setEmployees([...employees, newEmployee]);
    setFirstName("");
    setLastName("");
    setPosition("");
    setSalary("");
  };

  return (
    <div>
      <label>
        First Name:
        <input type="text" name="firstName" value={firstName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name="lastName" value={lastName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Position:
        <input type="text" name="position" value={position} onChange={handleChange} />
      </label>
      <br />
      <label>
        Salary:
        <input type="text" name="salary" value={salary} onChange={handleChange} />
      </label>
      <br />
      <br />
      <button onClick={handleSubmit} style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer" }}>
        Add Employee
      </button>
      <br />
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #dddddd", textAlign: "center", padding: "8px" }}>First Name</th>
            <th style={{ border: "1px solid #dddddd", textAlign: "center", padding: "8px" }}>Last Name</th>
            <th style={{ border: "1px solid #dddddd", textAlign: "center", padding: "8px" }}>Position</th>
            <th style={{ border: "1px solid #dddddd", textAlign: "center", padding: "8px" }}>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f2f2f2" : "white" }}>
              <td style={{ border: "1px solid #dddddd", textAlign: "center", padding: "8px" }}>{employee.firstName}</td>
              <td style={{ border: "1px solid #dddddd", textAlign: "center", padding: "8px" }}>{employee.lastName}</td>
              <td style={{ border: "1px solid #dddddd", textAlign: "center", padding: "8px" }}>{employee.position}</td>
              <td style={{ border: "1px solid #dddddd", textAlign: "center", padding: "8px" }}>{employee.salary} บาท</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeForm;
