import React from "react";
import { Link } from "react-router-dom";
import "./SideMenu.css";
const sideMenu = props => (
  <ul className="sideMenu" onClick={props.clicked}>
    <Link className="sideMenu__link" to="/">
      <li className="sideMenu__item">Home</li>
    </Link>
    <Link className="sideMenu__link" to="/add">
      <li className="sideMenu__item">Add New</li>
    </Link>
    <Link className="sideMenu__link" to="/login">
      <li className="sideMenu__item">Login</li>
    </Link>
    <li className="sideMenu__item">
      <p className="sideMenu__link" to="/login">
        Back
      </p>
    </li>
  </ul>
);
export default sideMenu;
