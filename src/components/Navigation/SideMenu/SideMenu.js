import React from "react";
import "./SideMenu.css";
const sideMenu = props => (
  <ul className="sideMenu">
    <li className="sideMenu__item">
      <a className="sideMenu__link" href="/">
        Home
      </a>
    </li>
    <li className="sideMenu__item">
      <a className="sideMenu__link" href="/">
        Add New
      </a>
    </li>
  </ul>
);
export default sideMenu;
