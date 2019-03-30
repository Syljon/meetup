import React from "react";
import EventBox from "./EventBox";
const eventBoxList = props => {
  let cityReduceList = props.list.filter(
    f => f.place.toLowerCase().indexOf(props.cityReducer.toLowerCase()) !== -1
  );
  console.log(cityReduceList);
  let titlereduceList = cityReduceList.filter(
    p => p.title.toLowerCase().indexOf(props.titleReducer.toLowerCase()) !== -1
  );
  console.log(titlereduceList);
  const eventList = titlereduceList.map(event => (
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
