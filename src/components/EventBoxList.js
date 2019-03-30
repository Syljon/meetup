import React from "react";
import EventBox from "./EventBox";
const eventBoxList = props => {
  const reduceList = props.list.filter(
    f => f.place.indexOf(props.cityReducer) !== -1
  );
  const eventList = reduceList.map(event => (
    <EventBox
      key={event.id}
      id={event.id}
      title={event.title}
      place={event.place}
    />
  ));
  return <div>{eventList}</div>;
};

export default eventBoxList;
