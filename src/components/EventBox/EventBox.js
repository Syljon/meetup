import React from "react";
import PropTypes from "prop-types";
import "./EventBox.css";

const eventBox = ({ image, title, place, day, time, description }) => {
  const exp = new Date(day + " " + time) - new Date();
  return (
    <div className="EventBox">
      <div
        className="EventBox__image"
        style={{
          backgroundImage: image
            ? `url(${image})`
            : "linear-gradient(to bottom, blue, #2f00ff)"
        }}
      />
      <div className="EventBox__content">
        {title && <h1 className="EventBox__content-title">{title}</h1>}
        {place && <h2 className="EventBox__content-place">{place}</h2>}
        <h2>
          {exp > 0
            ? `${day
                .split("-")
                .reverse()
                .join(".")}`
            : "The event has started"}
        </h2>
        {description && (
          <p className="EventBox__content-description">
            {description.slice(0, 200) + " ..."}
          </p>
        )}
      </div>
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
