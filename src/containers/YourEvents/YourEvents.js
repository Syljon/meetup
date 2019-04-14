import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import EventBox from "../../components/EventBox/EventBox";
class YourEvents extends Component {
  state = {
    events: []
  };
  getEvents = () => {
    const url = "https://react-meetup-c3c9c.firebaseio.com/events.json";
    const queryParams =
      "?auth=" +
      this.props.token +
      `&orderBy="userId"&equalTo="` +
      this.props.userId +
      `"`;
    fetch(url + queryParams, {
      method: "Get"
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        let fetchEvents = [];
        for (let key in response) {
          response[key].id = key;
          fetchEvents.push(response[key]);
        }
        this.setState({ events: fetchEvents });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getEvents();
  }
  render() {
    const eventList = this.state.events.map(event => (
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
        />
      </Link>
    ));
    return (
      <div className="YourEventPage">
        <h1>YourEvents</h1>
        <h1>YourEvents</h1>
        <h1>YourEvents</h1>
        <h1>YourEvents</h1>
        <h1>YourEvents</h1>
        {eventList}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.token,
    userId: state.userId
  };
};
export default connect(mapStateToProps)(YourEvents);
