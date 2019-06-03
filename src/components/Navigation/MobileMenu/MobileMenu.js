import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import "./MobileMenu.css";

const mobileMenu = ({ routes, clicked }) => {
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
    </ul>
  );
};

mobileMenu.propTypes = {
  routes: PropTypes.array.isRequired,
  clicked: PropTypes.func.isRequired
};

export default mobileMenu;
