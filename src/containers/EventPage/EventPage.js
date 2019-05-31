import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getEvent, deleteEvent } from "../../API/API";
import Button from "../../components/Buttons/Button";
import EventCountdown from "../../components/EventCountdown/EventCountdown";

import "./EventPage.css";
class EventPage extends Component {
  state = { done: false };

  componentDidMount() {
    getEvent(this.props.match.params.id).then(res => this.setState(res));
  }

  removeEvent = () => {
    deleteEvent(this.props.match.params.id)
      .then(response => {
        this.setState({ done: true });
      })
      .catch(err => {
        this.setState({ done: false });
      });
  };

  render() {
    return (
      <div className="EventPage">
        {this.state.done && <Redirect to="/meetup" />}
        <div className="EventPage__content">
          {this.state.title && (
            <h1 className="EventPage__content-title">{this.state.title}</h1>
          )}
          {this.state.place && (
            <h2 className="EventPage__content-place">
              Where:
              {this.state.place.address && " " + this.state.place.address + ","}
              {this.state.place.city && " " + this.state.place.city}
            </h2>
          )}
          {this.state.date && (
            <h2 className="EventPage__content-place">
              When:
              {this.state.date &&
                ` ${this.state.date.day
                  .split("-")
                  .reverse()
                  .join(".")}, ${this.state.date.time}`}
            </h2>
          )}
          {this.state.imageURL && (
            <img
              alt="Event_image"
              className="EventPage__image"
              src={this.state.imageURL}
            />
          )}
          {this.state.date && (
            <EventCountdown
              eventStartDate={
                new Date(this.state.date.day + " " + this.state.date.time)
              }
              classys="EventCountdown-blue "
            />
          )}
          {this.props.userId === this.state.userId && (
            <Button btnType="Danger" clicked={this.removeEvent}>
              Delete
            </Button>
          )}
          {this.state.description && (
            <p className="EventPage__content-description  ">
              {this.state.description}
            </p>
          )}
          {this.state.creator && (
            <p className="EventPage__content-creator">
              created by {this.state.creator}
            </p>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userId: state.userId
  };
};
export default connect(mapStateToProps)(EventPage);
