import React from "react";
import EventBox from "../EventBox/EventBox";
const eventBoxList = props => {
  let list = [];
  if (props.cityReducer !== "" || props.titleReducer !== "") {
    list = props.list;
  }
  if (props.cityReducer !== "") {
    console.log("cityReducer");
    list = list.filter(
      f => f.place.toLowerCase().indexOf(props.cityReducer.toLowerCase()) !== -1
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
    <EventBox
      key={event.id}
      id={event.id}
      title={event.title}
      place={event.place}
      image={event.image}
    />
  ));
  return eventList;
};

export default eventBoxList;
