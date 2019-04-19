import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Input from "../../components/Input/Input";
import Button from "../../components/Buttons/Button";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import "./Auth.css";
class Auth extends Component {
  state = {
    email: "test@test.com",
    password: "zxczxc",
    isSignup: true
  };

  componentDidMount() {
    this.props.onMountReset();
  }

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
        {this.props.token ? <Redirect to="/" /> : null}
        {this.props.error ? <h2>{this.props.error}</h2> : null}
        <form className="loginForm" onSubmit={this.sendFormHandler}>
          <h1 className="form-heading">
            {this.state.isSignup ? "Login" : "Registration"}
          </h1>
          <Input
            name="email"
            type="email"
            classname="Input_Default"
            value={this.state.email}
            placeholder="Enter Email"
            changed={this.InputChangeHandler}
            style={{ marginBottom: "2rem" }}
          />
          <Input
            name="password"
            type="password"
            classname="Input_Default"
            value={this.state.password}
            placeholder="Enter Password"
            changed={this.InputChangeHandler}
            style={{ marginBottom: "2rem" }}
          />
          <Button btnType="Success">SUBMIT</Button>
        </form>
        <button className="btnSwitch" onClick={this.authSwitch}>
          {this.state.isSignup ? "SIGNUP" : "SIGNIN"}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitForm: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
    onMountReset: () => dispatch(actions.authReset())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
