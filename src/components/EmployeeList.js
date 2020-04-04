import React from "react";
import EmployeeRow from "./Employeerow";

function EmployeeList(props) {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col" onClick={() => props.handleSort("first")}>
              Name
            </th>
            {/* <th scope="col" >Name</th> */}
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee, i) => (
            <EmployeeRow key={i} {...employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
