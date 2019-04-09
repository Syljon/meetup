import React from "react";
import { NavLink } from "react-router-dom";
import "./SideMenu.css";
const sideMenu = props => (
  <ul className="sideMenu" onClick={props.clicked}>
    <NavLink className="sideMenu__link" to="/">
      <li className="sideMenu__item">Home</li>
    </NavLink>
    {props.token ? (
      <NavLink className="sideMenu__link" to="/add">
        <li className="sideMenu__item">Add New</li>
      </NavLink>
    ) : null}
    {props.token ? (
      <NavLink onClick={props.logout} className="sideMenu__link" to="/">
        <li className="sideMenu__item">Logout</li>
      </NavLink>
    ) : (
      <NavLink className="sideMenu__link" to="/login">
        <li className="sideMenu__item">Login</li>
      </NavLink>
    )}
    <p className="sideMenu__link" to="/login">
      <li className="sideMenu__item">Back</li>
    </p>
  </ul>
);
export default sideMenu;
