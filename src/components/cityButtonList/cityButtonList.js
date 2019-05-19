import React from "react";
import Button from "../Buttons/Button";
import "./cityButtonList.css";

const cityButtonList = ({ cityButtonClickHandler, cityBtnList }) => {
  return (
    <ul className="city__list">
      {cityBtnList.map(cityName => (
        <li key={cityName}>
          <Button clicked={cityButtonClickHandler} btnType="Info">
            {cityName}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default cityButtonList;
