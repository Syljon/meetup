import React from "react";
import { NavLink } from "react-router-dom";
import "./MobileMenu.css";
const mobileMenu = props => {
  const navItems = props.routes.map(route => (
    <li key={route.to} className="mobileMenu__item">
      <NavLink className="mobileMenu__link" to={route.to} exact>
        {route.name}
      </NavLink>
    </li>
  ));
  return (
    <ul className="mobileMenu" onClick={props.clicked}>
      {navItems}
      {props.token ? (
        <li className="mobileMenu__item">
          <NavLink
            onClick={props.logout}
            className="mobileMenu__link"
            to="/logout"
            exact
          >
            Logout
          </NavLink>
        </li>
      ) : null}
    </ul>
  );
};

export default mobileMenu;
