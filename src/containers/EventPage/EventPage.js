import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getEvent, deleteEvent } from "../../API/API";
import Button from "../../components/Buttons/Button";

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
              {this.state.date.day &&
                " " +
                  this.state.date.day
                    .split("-")
                    .reverse()
                    .join(".") +
                  ","}
              {this.state.date.time && " " + this.state.date.time}
            </h2>
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
        </div>
        {this.state.imageURL && (
          <div
            className="EventPage__image"
            style={{
              backgroundImage: `url(${this.state.imageURL})`
            }}
          />
        )}
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
