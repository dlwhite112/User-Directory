import React, { Component } from "react";
import TableData from "../TableData";
import API from "../../utils/API";

export default class Table extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.employeeResults();
  }

  employeeResults = () => {
    API.getEmployees()
      .then((res) => this.setState({ employees: res.data.results }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            <TableData employees={this.state.employees} />
          </tbody>
        </table>
      </div>
    );
  }
}
