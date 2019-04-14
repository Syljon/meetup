import React from "react";
import "./Toolbar.css";
import { NavLink } from "react-router-dom";
const toolbar = props => (
  <ul className="toolbar">
    <NavLink className="toolbar__link" to="/" exact>
      <li className="toolbar__item">Home</li>
    </NavLink>
    {props.token ? (
      <NavLink className="toolbar__link" to="/add">
        <li className="toolbar__item">Add New</li>
      </NavLink>
    ) : null}
    {props.token ? (
      <NavLink className="toolbar__link" to="/yourevents">
        <li className="toolbar__item">Your Events</li>
      </NavLink>
    ) : null}
    {props.token ? (
      <NavLink onClick={props.logout} className="toolbar__link" to="/logout">
        <li className="toolbar__item">Logout</li>
      </NavLink>
    ) : (
      <NavLink className="toolbar__link" to="/login">
        <li className="toolbar__item">Login</li>
      </NavLink>
    )}
  </ul>
);

export default toolbar;
