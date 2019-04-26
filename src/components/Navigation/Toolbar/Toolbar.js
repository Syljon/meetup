import React from "react";
import { NavLink } from "react-router-dom";
import "./Toolbar.css";
const toolbar = props => {
  const navItems = props.routes.map(route => (
    <li key={route.to} className="toolbar__item">
      <NavLink className="toolbar__link" to={route.to} exact>
        {route.name}
      </NavLink>
    </li>
  ));
  return (
    <ul className="toolbar">
      {navItems}
      {props.token ? (
        <li className="toolbar__item">
          <NavLink
            onClick={props.logout}
            className="toolbar__link"
            to="logout"
            exact
          >
            Logout
          </NavLink>
        </li>
      ) : null}
    </ul>
  );
};

export default toolbar;
