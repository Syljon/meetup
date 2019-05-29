import React from "react";
import "./Background.css";
const background = props => {
  return <div className="Background">{props.children}</div>;
};

export default background;
