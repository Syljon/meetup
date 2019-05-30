import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

const input = ({
  labelText,
  name,
  type,
  changed,
  value,
  placeholder,
  classys,
  valid,
  touched
}) => (
  <>
    {labelText ? (
      <label className="Label" htmlFor={name}>
        {labelText}
      </label>
    ) : null}
    <input
      id={name}
      type={type}
      className={classys}
      name={name}
      onChange={changed}
      value={value}
      placeholder={placeholder}
    />
    {touched && !valid && <h3 style={{ color: "red" }}>Complete this field</h3>}
  </>
);
input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};
export default input;
