import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Input from "../../components/Input/Input";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import "./Auth.css";
class Auth extends Component {
  state = {
    email: "",
    password: "",
    isSignup: true,
    loged: false
  };
  sendFormHandler = e => {
    e.preventDefault();
    this.props.onSubmitForm(
      this.state.email,
      this.state.password,
      this.state.isSignup
    );
  };
  authSwitch = () => {
    console.log(this.state.isSignup);
    this.setState({ isSignup: !this.state.isSignup });
  };
  InputChangeHandler = e => {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="AuthPage">
        {this.state.loged ? <Redirect to="/" /> : null}
        <form className="form" onSubmit={this.sendFormHandler}>
          <h1 className="form-heading">
            {this.state.isSignup ? "Login" : "Registration"}
          </h1>
          <Input
            name="email"
            type="email"
            value={this.state.email}
            placeholder="Enter Email"
            changed={this.InputChangeHandler}
            style={{ marginBottom: "2rem" }}
          />
          <Input
            name="password"
            type="password"
            value={this.state.password}
            placeholder="Enter Password"
            changed={this.InputChangeHandler}
            style={{ marginBottom: "2rem" }}
          />
          <button className="btnSubmit">SUBMIT</button>
        </form>
        <button className="btnSwitch" onClick={this.authSwitch}>
          {this.state.isSignup ? "SIGNUP" : "SIGNIN"}
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSubmitForm: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Auth);
