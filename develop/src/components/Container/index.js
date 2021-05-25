import React, { Component } from "react";
import SeachBox from "../SearchBox";
import Table from "../Table";


export default class Container extends Component {
  state = {
    search: "",
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div>
        <SeachBox />
        <Table/>
      </div>
    );
  }
}
