import React from "react";

export default function SeachBox(props) {
  return (
    <div>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        placeholder="Search Directory"
        type="text"
        className="form-control"
      />
    </div>
  );
}
