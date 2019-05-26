import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

const input = ({ labelText, name, type, changed, value, placeholder }) => (
  <>
    {/* {labelText ? (
      <label className="Label" htmlFor={name}>
        {labelText}
      </label>
    ) : null} */}
    <input
      id={name}
      type={type}
      className="Input"
      name={name}
      onChange={changed}
      value={value}
      placeholder={placeholder}
    />
  </>
);
input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};
export default input;
