import React, { Component } from "react";
import Input from "../../components/Input/Input";
import "./AddEvent.css";

class AddEvent extends Component {
  state = { title: "", address: "", city: "", date: "", time: "" };

  InputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // InputDataHandler = () => {
  //   this.setState({ date: this.dataInput.value });
  // };
  // InputTimeHandler = () => {
  //   this.setState({ time: this.timeInput.value });
  // };
  log = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div className="AddEventPage">
        <div className="Form">
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
          <button onClick={this.log}>ASDASD</button>
        </div>
      </div>
    );
  }
}

export default AddEvent;
