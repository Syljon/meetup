import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Input from "../../components/Input/Input";
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
    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyC0sZ_wlaL-fNxe24VaSLD8UZFB8yP_wYw";
    if (this.state.isSignup) {
      url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC0sZ_wlaL-fNxe24VaSLD8UZFB8yP_wYw";
    }
    const data = {
      email: this.state.email,
      password: this.state.password,
      returnSecureToken: true
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log("Response:", response);
        if (!this.state.isSignup) {
          this.setState({ isSignup: true });
        } else {
          this.setState({ loged: true });
        }
      })
      .catch(error => {
        console.log("Error:", error);
        this.setState({ registered: false });
      });
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

export default Auth;
