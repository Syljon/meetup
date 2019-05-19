import React from "react";
import EventBox from "../EventBox/EventBox";
import { Link } from "react-router-dom";

const eventBoxList = props => {
  let list = [];
  if (props.cityReducer !== "" || props.titleReducer !== "") {
    list = props.list;
  }
  if (props.cityReducer !== "") {
    console.log("cityReducer");
    list = list.filter(
      f =>
        f.place.city.toLowerCase().indexOf(props.cityReducer.toLowerCase()) !==
        -1
    );
  }
  console.log(list);
  if (props.titleReducer !== "") {
    console.log("titleReducer");
    list = list.filter(
      p =>
        p.title.toLowerCase().indexOf(props.titleReducer.toLowerCase()) !== -1
    );
  }
  console.log(list);
  const eventList = list.map(event => (
    <Link
      to={`/event/${event.id}`}
      key={event.id}
      style={{ textDecoration: "none" }}
    >
      <EventBox
        id={event.id}
        title={event.title}
        place={event.place.city}
        image={event.imageURL}
        description={event.description}
      />
    </Link>
  ));
  return eventList;
};

export default eventBoxList;
