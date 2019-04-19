import React from "react";
import "./SubmitButton.css";

const submitButton = props => (
  <button onClick={props.clicked} className="btnSubmit">
    {props.children}
  </button>
);

export default submitButton;
