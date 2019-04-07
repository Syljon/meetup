import React from "react";
import "./Toolbar.css";

const toolbar = props => (
  <ul className="toolbar">
    <li className="toolbar__item">
      <a className="toolbar__link" href="/">
        Home
      </a>
    </li>
    <li className="toolbar__item">
      <a className="toolbar__link" href="/">
        Add New
      </a>
    </li>
    <li className="toolbar__item">
      <a className="toolbar__link" href="/">
        Add New
      </a>
    </li>
  </ul>
);

export default toolbar;
