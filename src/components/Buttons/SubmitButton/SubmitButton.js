import React from "react";
import "./SubmitButton.css";

const submitButton = props => (
  <button className="btnSubmit">{props.children}</button>
);

export default submitButton;
