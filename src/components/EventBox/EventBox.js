import React from "react";
import PropTypes from "prop-types";
import "./EventBox.css";
import { formatDate } from "../../helpers/formatDate";
const eventBox = ({ image, title, place, day, time, description, address }) => {
  const exp = new Date(day + " " + time) - new Date();
  return (
    <div className="EventBox">
      <div className="EventBox__content">
        {title && <h1 className="EventBox__content-title">{title}</h1>}
        {address && (
          <p className="EventBox__content-place">{`${address}, ${place}`}</p>
        )}
        {exp > 0 ? (
          <p className="EventBox__content-date">{formatDate(day)}</p>
        ) : (
          <p className="EventBox__content-date">The event has started</p>
        )}
        {description && (
          <p className="EventBox__content-description">
            {description.slice(0, 200) + " ..."}
          </p>
        )}
      </div>
      <img
        className="EventBox__image"
        alt="EventBox"
        src={
          image
            ? image
            : "https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
      />
    </div>
  );
};
eventBox.protoType = {
  image: PropTypes.string,
  title: PropTypes.string,
  place: PropTypes.string,
  description: PropTypes.string
};
export default eventBox;
