import React, { Component } from "react";
import { storage } from "../../firebase/index";

import Input from "../../components/Input/Input";
import InputFile from "../../components/Input/InputFile";
import { connect } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import { Redirect } from "react-router-dom";
import "./AddEvent.css";

class AddEvent extends Component {
  state = {
    title: "",
    address: "",
    city: "",
    date: "",
    time: "",
    imageURL: null,
    image: {},
    loading: false
  };

  InputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  InputFileHandler = e => {
    this.setState({ image: e.target.files[0] });
  };
  handleUpload = e => {
    console.log("handleUpload");
    e.preventDefault();
    this.setState({ loading: true });
    const image = this.state.image;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        //progress
        console.log(snapshot);
      },
      error => {
        //error
        console.log(error);
      },
      () => {
        //complete
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ imageURL: url });
            console.log("img1", this.state.imageURL);
          })
          .then(() => {
            console.log("img2", this.state.imageURL);
            this.postFormData();
          });
      }
    );
  };
  postFormData = e => {
    console.log("postFormData");
    const data = {
      title: this.state.title,
      place: { address: this.state.address, city: this.state.city },
      date: { day: this.state.date, time: this.state.time },
      userId: this.props.userId,
      userEmail: this.props.userEmail,
      eventId: null,
      imageURL: this.state.imageURL
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
        {this.state.loading ? (
          <Spinner />
        ) : (
          <form className="Form" onSubmit={this.handleUpload}>
            <h1 className="Form-heading">AddEvent</h1>
            <Input
              name="title"
              classname="Input_Form"
              changed={this.InputChangeHandler}
              value={this.state.title}
              placeholder="Enter Title"
              style={{ marginBottom: "1rem" }}
            />
            <Input
              name="address"
              classname="Input_Form"
              changed={this.InputChangeHandler}
              value={this.state.address}
              placeholder="Enter Address"
              style={{ marginBottom: "1rem" }}
            />
            <Input
              name="city"
              classname="Input_Form"
              changed={this.InputChangeHandler}
              value={this.state.city}
              placeholder="Enter City"
              style={{ marginBottom: "1rem" }}
              type="text"
            />
            <Input
              name="date"
              classname="Input_Form"
              changed={this.InputChangeHandler}
              placeholder="Enter Date"
              style={{ marginBottom: "1rem" }}
              type="date"
            />
            <Input
              name="time"
              classname="Input_Form"
              value={this.state.time}
              changed={this.InputChangeHandler}
              placeholder="Enter Time"
              style={{ marginBottom: "1rem" }}
              type="time"
            />
            <InputFile changed={this.InputFileHandler} />
            <button>ASDASD</button>
          </form>
        )}
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
