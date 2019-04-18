import React from "react";
import "./TextArea.css";

const input = props => (
  <div style={{ textAlign: "left" }}>
    {props.labelText ? (
      <label className="Label" htmlFor={props.name}>
        {props.labelText}
      </label>
    ) : null}
    <textarea
      id={props.name}
      type={props.type}
      className={["TextArea", props.classname].join("")}
      name={props.name}
      onChange={props.changed}
      value={props.value}
      placeholder={props.placeholder}
      style={props.style}
    />
  </div>
);

export default input;
