import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import * as routes from "../../helpers/routes";
import { formInputChange } from "../../helpers/formInputChange";
import Input from "../../components/Input/Input";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/Buttons/Button";

import "./LoginPage.css";

class LoginPage extends Component {
  state = {
    loading: false,
    formIsValid: false,
    inputs: [
      {
        name: "email",
        value: "",
        placeholder: "Enter email",
        type: "email",
        labelText: "Email",
        validation: { required: true },
        valid: false,
        touched: false
      },
      {
        name: "password",
        value: "",
        placeholder: "Enter password",
        type: "password",
        labelText: "Password",
        validation: { required: true },
        valid: false,
        touched: false
      }
    ]
  };

  inputChangeHandler = (e, index) => {
    const formElements = formInputChange(e.target.value, index, [
      ...this.state.inputs
    ]);
    const InputsValid = formElements.map(i => i.valid);
    this.setState({
      inputs: formElements,
      formIsValid: !InputsValid.includes(false)
    });
  };
  sendLoginForm = e => {
    console.log("sendLoginForm");
    e.preventDefault();
    this.props.onSubmitForm(
      this.state.inputs[0].value,
      this.state.inputs[1].value
    );
  };
  render() {
    return (
      <>
        {this.props.token && <Redirect to={routes.home} />}
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className="LoginPage">
            <form className="loginForm" onSubmit={this.sendLoginForm}>
              <h1 className="loginForm-heading">Login</h1>
              {this.props.error && (
                <div className="ErrorMessage">{this.props.error}</div>
              )}
              {this.state.inputs.map((i, index) => {
                return (
                  <div key={i.name} className="loginForm__input">
                    <Input
                      classys="Input Input-blue"
                      name={i.name}
                      value={i.value}
                      valid={i.valid}
                      touched={i.touched}
                      changed={e => this.inputChangeHandler(e, index)}
                      placeholder={i.placeholder}
                      labelText={i.labelText}
                      type={i.type}
                    />
                  </div>
                );
              })}
              <Button
                btnType={this.state.formIsValid ? "Info" : "Danger"}
                disabled={!this.state.formIsValid}
              >
                SUBMIT
              </Button>
            </form>
            <Link to={routes.registration}>
              <Button btnType="Info-outline">SIGNUP</Button>
            </Link>
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
    onSubmitForm: (email, password) => dispatch(actions.login(email, password))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
