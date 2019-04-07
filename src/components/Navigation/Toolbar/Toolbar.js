import React from "react";
import "./Toolbar.css";
import { Link } from "react-router-dom";
const toolbar = props => (
  <ul className="toolbar">
    <li className="toolbar__item">
      <Link className="toolbar__link" to="/">
        Home
      </Link>
    </li>
    <li className="toolbar__item">
      <Link className="toolbar__link" to="/add">
        Add New
      </Link>
    </li>
    <li className="toolbar__item">
      <Link className="toolbar__link" to="/login">
        Login
      </Link>
    </li>
  </ul>
);

export default toolbar;
