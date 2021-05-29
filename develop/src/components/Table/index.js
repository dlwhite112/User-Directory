import React, { Component } from "react";
import "./style.css";
import TableData from "../TableData";
import API from "../../utils/API";
import SeachBox from "../../components/SearchBox/index";

export default class Table extends Component {
  state = {
    employees: [],
    search: "",
  };

  componentDidMount() {
    this.employeeResults();
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  };

  employeeResults = () => {
    API.getEmployees()
      .then((res) => this.setState({ employees: res.data.results }))
      .catch((err) => console.log(err));
  };
  filteredRes = () =>
    this.state.employees.filter((person) => {
      return person.name.first.toLowerCase().includes(this.state.search);
    });

  nameSort = () => {
    if (this.state) {
      this.setState(
        this.state.employees.sort((a, b) =>
          a.name.first.localeCompare(b.name.first)
        )
      );
    }
  };
  phoneSort = () => {
    if (this.state) {
      this.setState(
        this.state.employees.sort((a, b) => a.phone.localeCompare(b.phone))
      );
    }
  };
  emailSort = () => {
    if (this.state) {
      this.setState(
        this.state.employees.sort((a, b) => a.email.localeCompare(b.email))
      );
    }
  };
  dobSort = () => {
    if (this.state) {
      this.setState(
        this.state.employees.sort((a, b) =>
          a.dob.date.localeCompare(b.dob.date)
        )
      );
    }
  };

  render() {
    return (
      <div>
        <SeachBox
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <table className="mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>
                <button
                  className="rounded-3 border border-1"
                  onClick={this.nameSort}
                >
                  Name 🔼
                </button>
              </th>
              <th>
                <button
                  className="rounded-3 border border-1"
                  onClick={this.phoneSort}
                >
                  Phone 🔼
                </button>
              </th>
              <th>
                <button
                  className="rounded-3 border border-1"
                  onClick={this.emailSort}
                >
                  Email 🔼
                </button>
              </th>
              <th>
                <button
                  className="rounded-3 border border-1"
                  onClick={this.dobSort}
                >
                  DOB 🔼
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <TableData employees={this.filteredRes()} />
          </tbody>
        </table>
      </div>
    );
  }
}
