import React from "react";
import "./CityButton.css";

const cityButton = props => (
  <button value={props.place} onClick={props.clicked} className="CityButton">
    {props.place}
  </button>
);

export default cityButton;
