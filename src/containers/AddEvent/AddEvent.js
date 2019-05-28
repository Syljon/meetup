import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { storage } from "../../firebase/index";
import { Redirect } from "react-router-dom";

import Input from "../../components/Input/Input";
import InputFile from "../../components/Input/InputFile";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Buttons/Button";
import Spinner from "../../components/Spinner/Spinner";

import "./AddEvent.css";
class AddEvent extends Component {
  state = {
    image: null,
    description: "",
    loading: false,
    inputs: [
      {
        name: "title",
        value: "",
        placeholder: "Enter Title",
        type: "text",
        labelText: "Title"
      },
      {
        name: "address",
        value: "",
        placeholder: "Enter Address",
        type: "text",
        labelText: "Address"
      },
      {
        name: "city",
        value: "",
        placeholder: "Enter City",
        type: "text",
        labelText: "City"
      },
      {
        name: "date",
        value: "",
        placeholder: "Enter Date",
        type: "date",
        labelText: "Start Date"
      },
      {
        name: "time",
        value: "",
        placeholder: "Enter Time",
        type: "time",
        labelText: "End Date"
      }
    ]
  };

  InputChangeHandler = (e, index) => {
    console.log(this.state.inputs[index].value);
    let changeer = [...this.state.inputs];
    changeer[index].value = e.target.value;
    this.setState({ inputs: changeer });
  };
  InputChangeHandler2 = e => {
    this.setState({ description: e.target.value });
  };

  InputFileHandler = e => {
    this.setState({ image: e.target.files[0] });
  };

  postFormWithImage = (image, fun) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    return uploadTask.on(
      "state_changed",
      snapshot => {
        //progress
      },
      error => {
        //error
      },
      () => {
        //complete
        return storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            fun(url);
          });
      }
    );
  };
  postForm = (imageURL = "") => {
    console.log(imageURL);
    console.log("POST FORM");
    const data = {
      title: this.state.inputs[0].value,
      place: {
        address: this.state.inputs[1].value,
        city: this.state.inputs[2].value
      },
      date: {
        day: this.state.inputs[3].value,
        time: this.state.inputs[4].value
      },
      description: this.state.description,
      userEmail: this.props.userEmail,
      userId: this.props.userId,
      imageURL: imageURL && imageURL
    };
    console.log(data);
    const url =
      "https://react-meetup-c3c9c.firebaseio.com/events.json?auth=" +
      this.props.token;
    return axios.post(url, data).then(res => console.log("Complete", res));
  };
  submitForm = e => {
    e.preventDefault();
    console.log(this.state.inputs, this.state.description, this.state.image);
    if (this.state.image) {
      console.log("POST WITH IMAGE");
      this.postFormWithImage(this.state.image, this.postForm);
    } else {
      console.log("POST WITHOUT IMAGE");
      this.postForm();
    }
  };

  render() {
    return (
      <div className="AddEventPage">
        <form className="Form" onSubmit={this.submitForm}>
          <h1 className="Form-heading">AddEvent</h1>
          {this.state.inputs.map((i, index) => {
            return (
              <div key={i.name} className="auth-form__input">
                <Input
                  classys="Input Input-blue"
                  name={i.name}
                  value={i.value}
                  changed={e => this.InputChangeHandler(e, index)}
                  placeholder={i.placeholder}
                  labelText={i.labelText}
                  type={i.type}
                />
              </div>
            );
          })}
          <InputFile changed={this.InputFileHandler} />
          <TextArea
            name="description"
            value={this.state.description}
            changed={this.InputChangeHandler2}
            placeholder="About your event ..."
            style={{ marginBottom: "2rem" }}
            labelText="Description"
          />
          <Button btnType="Success">Submit</Button>
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
