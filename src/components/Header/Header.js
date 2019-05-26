import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import Input from "../Input/Input";

const Header = ({ titleSearch, citySearch, InputChangeHandler }) => {
  return (
    <header className="header">
      <h1 className="header__heading">Find Event</h1>
      <div className="header__inputs">
        <div className="header__input">
          <Input
            type="text"
            changed={InputChangeHandler}
            name="titleSearch"
            value={titleSearch}
            classys="Input Input-white"
            placeholder="Enter Title ..."
          />
        </div>
        <div className="header__input">
          <Input
            type="text"
            name="citySearch"
            changed={InputChangeHandler}
            value={citySearch}
            classys="Input Input-white"
            placeholder="Enter City ..."
          />
        </div>
      </div>
    </header>
  );
};
Header.protoTypes = {
  titleSearch: PropTypes.string,
  citySearch: PropTypes.string,
  InputChangeHandler: PropTypes.func
};
export default Header;
