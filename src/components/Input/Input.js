import React from "react";
import "./Input.css";

const input = props => (
  <input
    type={props.type}
    className="Input"
    name={props.name}
    onChange={props.changed}
    value={props.value}
    placeholder={props.placeholder}
    style={props.style}
  />
);

export default input;
