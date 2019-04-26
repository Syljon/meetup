import React from "react";
import { NavLink } from "react-router-dom";
import "./MobileMenu.css";
const mobileMenu = props => (
  <ul className="mobileMenu" onClick={props.clicked}>
    <NavLink className="mobileMenu__link" to="/" exact>
      <li className="mobileMenu__item">Home</li>
    </NavLink>
    {props.token ? (
      <NavLink className="mobileMenu__link" to="/add">
        <li className="mobileMenu__item">Add New</li>
      </NavLink>
    ) : null}
    {props.token ? (
      <NavLink className="mobileMenu__link" to="/yourevents">
        <li className="mobileMenu__item">My Events</li>
      </NavLink>
    ) : null}
    {props.token ? (
      <NavLink onClick={props.logout} className="mobileMenu__link" to="/logout">
        <li className="mobileMenu__item">Logout</li>
      </NavLink>
    ) : (
      <NavLink className="mobileMenu__link" to="/login">
        <li className="mobileMenu__item">Login</li>
      </NavLink>
    )}
  </ul>
);
export default mobileMenu;
