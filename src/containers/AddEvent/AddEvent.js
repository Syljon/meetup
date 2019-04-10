import React, { Component } from "react";
import Input from "../../components/Input/Input";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./AddEvent.css";

class AddEvent extends Component {
  state = { title: "", address: "", city: "", date: "", time: "" };

  InputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  postFormData = e => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      place: { address: this.state.address, city: this.state.city },
      date: { day: this.state.date, time: this.state.time },
      userId: this.props.userId,
      userEmail: this.props.userEmail,
      eventId: null
    };
    const url =
      "https://react-meetup-c3c9c.firebaseio.com/events.json?auth=" +
      this.props.token;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => {
        console.log(response.name);
        this.setState({ eventId: response.name });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="AddEventPage">
        {this.props.userEmail}
        {this.state.eventId ? <Redirect to="/" /> : null}
        <form className="Form" onSubmit={this.postFormData}>
          <h1>AddEvent</h1>
          <Input
            name="title"
            changed={this.InputChangeHandler}
            value={this.state.title}
            placeholder="Enter Title"
            style={{ marginBottom: "1rem" }}
          />
          <Input
            name="address"
            changed={this.InputChangeHandler}
            value={this.state.address}
            placeholder="Enter Address"
            style={{ marginBottom: "1rem" }}
          />
          <Input
            name="city"
            changed={this.InputChangeHandler}
            value={this.state.city}
            placeholder="Enter City"
            style={{ marginBottom: "1rem" }}
            type="text"
          />
          <Input
            name="date"
            changed={this.InputChangeHandler}
            placeholder="Enter Date"
            style={{ marginBottom: "1rem" }}
            type="date"
          />
          <Input
            name="time"
            value={this.state.time}
            changed={this.InputChangeHandler}
            placeholder="Enter Time"
            style={{ marginBottom: "1rem" }}
            type="time"
          />
          <button>ASDASD</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userEmail: state.userEmail,
    userId: state.userId,
    token: state.token
  };
};
export default connect(mapStateToProps)(AddEvent);
