import React from "react";

export default function SeachBox(props) {
  return (
    <div>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        placeholder="Search Directory"
        type="text"
        className="mb-5 rounded-pill p-1 text-center"
      />
    </div>
  );
}
