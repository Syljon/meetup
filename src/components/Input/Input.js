import React from "react";
import "./Input.css";

const input = props => (
  <div>
    <input
      id={props.name}
      type={props.type}
      className={["Input", props.classname].join(" ")}
      name={props.name}
      onChange={props.changed}
      value={props.value}
      placeholder={props.placeholder}
      style={props.style}
      ref={props.test}
    />
  </div>
);

export default input;
