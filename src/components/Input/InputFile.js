import React from "react";
import "./InputFile.css";

const inputFile = props => (
  <div>
    <input
      id="file"
      type="file"
      className="InputFile"
      onChange={props.changed}
      style={props.style}
      ref={props.test}
    />
    <label className="InputFileLabel" htmlFor="file">
      Choose a file
    </label>
  </div>
);

export default inputFile;
