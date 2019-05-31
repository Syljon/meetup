import React from "react";
import EventBox from "../EventBox/EventBox";
import { Link } from "react-router-dom";

const eventBoxList = props => {
  const eventList = props.list.map(event => (
    <Link
      to={`/meetup/event/${event.id}`}
      key={event.id}
      style={{ textDecoration: "none", width: "100%", height: "100%" }}
    >
      <EventBox
        id={event.id}
        title={event.title}
        place={event.place.city}
        day={event.date.day}
        time={event.date.time}
        image={event.imageURL}
        description={event.description}
      />
    </Link>
  ));
  return eventList;
};

export default eventBoxList;
