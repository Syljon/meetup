import React, { Component } from "react";
import { storage } from "../../firebase/index";

import Input from "../../components/Input/Input";
import InputFile from "../../components/Input/InputFile";
import TextArea from "../../components/TextArea/TextArea";
import SubmitButton from "../../components/Buttons/SubmitButton/SubmitButton";
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
    image: null,
    description: "",
    loading: false
  };

  InputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  InputFileHandler = e => {
    this.setState({ image: e.target.files[0] });
  };
  handleUpload = e => {
    e.preventDefault();
    this.setState({ loading: true });
    if (this.state.image) {
      const image = this.state.image;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          //progress
          //console.log(snapshot);
        },
        error => {
          //error
          //console.log(error);
        },
        () => {
          //complete
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              this.setState({ imageURL: url });
            })
            .then(() => {
              this.postFormData();
            });
        }
      );
    } else {
      this.postFormData();
    }
  };
  postFormData = e => {
    const data = {
      title: this.state.title,
      place: { address: this.state.address, city: this.state.city },
      date: { day: this.state.date, time: this.state.time },
      userId: this.props.userId,
      userEmail: this.props.userEmail,
      eventId: null,
      imageURL: this.state.imageURL,
      description: this.state.description
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
        this.setState({ eventId: response.name });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="AddEventPage">
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
              labelText="Title"
            />
            <Input
              name="address"
              classname="Input_Form"
              changed={this.InputChangeHandler}
              value={this.state.address}
              placeholder="Enter Address"
              style={{ marginBottom: "1rem" }}
              type="text"
              labelText="Address"
            />
            <Input
              name="city"
              classname="Input_Form"
              changed={this.InputChangeHandler}
              value={this.state.city}
              placeholder="Enter City"
              style={{ marginBottom: "1rem" }}
              type="text"
              labelText="City"
            />
            <Input
              name="date"
              classname="Input_Form"
              changed={this.InputChangeHandler}
              placeholder="Enter Date"
              style={{ marginBottom: "1rem" }}
              type="date"
              labelText="Date"
            />
            <Input
              name="time"
              classname="Input_Form"
              value={this.state.time}
              changed={this.InputChangeHandler}
              placeholder="Enter Time"
              style={{ marginBottom: "2rem" }}
              type="time"
              labelText="Time"
            />
            <InputFile changed={this.InputFileHandler} />
            <TextArea
              name="description"
              value={this.state.description}
              changed={this.InputChangeHandler}
              placeholder="About your event ..."
              style={{ marginBottom: "2rem" }}
              labelText="Description"
            />
            <SubmitButton>Submit</SubmitButton>
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
