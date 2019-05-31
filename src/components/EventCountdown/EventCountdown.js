import React, { Component } from "react";
import { getTime } from "../../helpers/EventCountDown";
import "./EventCountdown.css";

class EventCountdown extends Component {
  state = { eventStarted: false };
  componentDidMount() {
    this.countdown = setInterval(() => {
      const distance = this.props.eventStartDate - new Date().getTime();
      if (distance < 0) {
        this.setState({ eventStarted: true, time: false });
        clearInterval(this.x);
      } else {
        const time = getTime(distance);
        this.setState({ time: time });
      }
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.countdown);
  }
  render() {
    return (
      <p className={["EventCountdown", this.props.classys].join(" ")}>
        {this.state.eventStarted
          ? `The event has started`
          : this.state.time
          ? `${this.state.time.days}d ${this.state.time.hours}h ${
              this.state.time.minutes
            }m ${this.state.time.seconds}s`
          : `00d 00h 00m 00s`}
      </p>
    );
  }
}

export default EventCountdown;
