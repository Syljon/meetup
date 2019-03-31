import React from "react";
import "./Navigation.css";

const navigation = () => (
  <nav className="navbar">
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
