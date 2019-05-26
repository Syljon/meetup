import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import "./Toolbar.css";

const toolbar = ({ token, routes, logout }) => {
  return (
    <ul className="toolbar">
      {routes &&
        routes.map(route => (
          <li key={route.to} className="toolbar__item">
            <NavLink className="toolbar__link" to={route.to} exact>
              {route.name}
            </NavLink>
          </li>
        ))}
      {token && (
        <li className="toolbar__item">
          <NavLink onClick={logout} className="toolbar__link" to="logout" exact>
            Logout
          </NavLink>
        </li>
      )}
    </ul>
  );
};
toolbar.propTypes = {
  token: PropTypes.string,
  routes: PropTypes.array.isRequired,
  logout: PropTypes.func.isRequired
};
export default toolbar;
