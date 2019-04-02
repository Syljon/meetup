import React from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";
const navigation = () => (
  <nav className="navbar">
    <img className="logo" src={logo} />
    <ul className="nav">
      <li className="nav__item">
        <a className="nav__link" href="/">
          Home
        </a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="/">
          Add New
        </a>
      </li>
    </ul>
  </nav>
);

export default navigation;
