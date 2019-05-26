import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import "./MobileMenu.css";

const mobileMenu = ({ token, routes, clicked, logout }) => {
  return (
    <ul className="mobileMenu" onClick={clicked}>
      {routes &&
        routes.map(route => (
          <li key={route.to} className="mobileMenu__item">
            <NavLink className="mobileMenu__link" to={route.to} exact>
              {route.name}
            </NavLink>
          </li>
        ))}
      {token && (
        <li className="mobileMenu__item">
          <NavLink
            onClick={logout}
            className="mobileMenu__link"
            to="/logout"
            exact
          >
            Logout
          </NavLink>
        </li>
      )}
    </ul>
  );
};

mobileMenu.propTypes = {
  token: PropTypes.string,
  routes: PropTypes.array.isRequired,
  clicked: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default mobileMenu;
