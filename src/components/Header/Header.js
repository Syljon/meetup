import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import Input from "../../components/Input/Input";
import CityButtonList from "../cityButtonList/cityButtonList";

const Header = ({
  titleSearch,
  cityBtnList,
  citySearch,
  InputChangeHandler,
  cityButtonClickHandler
}) => {
  return (
    <header className="header">
      <h1 className="header__heading">Find Event</h1>
      <div className="header__inputs">
        <div className="header__input">
          <Input
            name="titleSearch"
            inputType="Input_Default"
            changed={InputChangeHandler}
            value={titleSearch}
            placeholder="Enter Title ..."
          />
        </div>

        <div className="header__input">
          <Input
            name="citySearch"
            inputType="Input_Default"
            changed={InputChangeHandler}
            value={citySearch}
            placeholder="Enter City ..."
          />
        </div>
      </div>
      <CityButtonList
        cityButtonClickHandler={cityButtonClickHandler}
        cityBtnList={cityBtnList}
      />
    </header>
  );
};
Header.protoTypes = {
  titleSearch: PropTypes.string,
  cityBtnList: PropTypes.array,
  citySearch: PropTypes.string,
  InputChangeHandler: PropTypes.func,
  cityButtonClickHandler: PropTypes.func
};
export default Header;
