import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const button = ({ children, clicked, btnType }) => (
  <button
    value={children}
    onClick={clicked}
    className={["Button", btnType].join(" ")}
  >
    {children}
  </button>
);
button.propTypes = {
  clicked: PropTypes.func,
  btnType: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
export default button;
