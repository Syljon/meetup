import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import { signUpUser, setUserInfo } from "../../API/API";

import Input from "../../components/Input/Input";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/Buttons/Button";

import "./Auth.css";

class Auth extends Component {
  state = {
    email: "test@test.com",
    password: "zxczxc",
    firstName: "Lukasz",
    lastName: "TEST",
    isSignup: true,
    loading: false
  };

  componentDidMount() {
    this.props.onMountReset();
  }

  sendFormHandler = e => {
    e.preventDefault();
    // console.log(this.state.isSignup);
    this.setState(prevState => ({
      loading: !prevState.loading
    }));
    this.state.isSignup
      ? this.props.onSubmitForm(this.state.email, this.state.password)
      : signUpUser(this.state.email, this.state.password)
          .then(res => {
            console.log("Regiseter");
            setUserInfo(
              res.data.idToken,
              this.state.firstName + " " + this.state.lastName
            )
              .then(res =>
                this.setState(prevState => ({
                  loading: !prevState.loading
                }))
              )
              .catch(err => {
                console.log(err);
                return this.setState(prevState => ({
                  loading: !prevState.loading
                }));
              });
          })
          .catch(err => {
            console.log(err);
            return this.setState(prevState => ({
              loading: !prevState.loading
            }));
          });
  };

  authSwitch = () => {
    this.setState(prevState => ({
      isSignup: !prevState.isSignup
    }));
  };

  InputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        {this.props.token && <Redirect to="/" />}
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className="AuthPage">
            {this.props.error && <h2>{this.props.error}</h2>}
            <form className="loginForm" onSubmit={this.sendFormHandler}>
              <h1 className="form-heading">
                {this.state.isSignup ? "Login" : "Registration"}
              </h1>
              <div className="auth-form__input">
                <Input
                  classys="Input Input-blue"
                  changed={this.InputChangeHandler}
                  name="email"
                  type="email"
                  value={this.state.email}
                  placeholder="Enter Email"
                />
              </div>
              <div className="auth-form__input">
                <Input
                  classys="Input Input-blue"
                  name="password"
                  type="password"
                  value={this.state.password}
                  placeholder="Enter Password"
                  changed={this.InputChangeHandler}
                />
              </div>
              {!this.state.isSignup && (
                <>
                  <div className="auth-form__input">
                    <Input
                      classys="Input Input-blue"
                      name="firstName"
                      type="text"
                      value={this.state.firstName}
                      placeholder="Enter First name"
                      changed={this.InputChangeHandler}
                    />
                  </div>
                  <div className="auth-form__input">
                    <Input
                      classys="Input Input-blue"
                      name="lastName"
                      type="text"
                      value={this.state.lastName}
                      placeholder="Enter Last Name"
                      changed={this.InputChangeHandler}
                    />
                  </div>
                </>
              )}

              <Button btnType="Success">SUBMIT</Button>
            </form>
            }
            <Button btnType="Info" clicked={this.authSwitch}>
              {this.state.isSignup ? "SIGNUP" : "SIGNIN"}
            </Button>
          </div>
        )}
      </>
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
    onSubmitForm: (email, password) => dispatch(actions.auth(email, password)),
    onMountReset: () => dispatch(actions.authReset())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
