import React from "react";
import "./style.css"

export default function TableData(props) {
  return props.employees.map((employee) => (
    <tr key={employee.id}>
      <td>
        <img src={employee.picture.thumbnail} alt={employee.name.first} />
      </td>
      <td>
        {employee.name.first} {employee.name.last}
      </td>
      <td>{employee.phone}</td>
      <td>{employee.email}</td>
      <td>
        {new Intl.DateTimeFormat().format(
          new Date(employee.dob.date)
        )}
      </td>
    </tr>
  ));
}
