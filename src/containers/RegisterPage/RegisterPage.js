import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import * as routes from "../../helpers/routes";
import { formInputChange } from "../../helpers/formInputChange";
import { signUpUser, setUserInfo } from "../../API/API";
import Input from "../../components/Input/Input";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/Buttons/Button";

import "./RegisterPage.css";

class RegisterPage extends Component {
  state = {
    loading: false,
    formIsValid: false,
    errorMessage: "",
    userSignup: false,
    inputs: [
      {
        name: "login",
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
      },
      {
        name: "firstName",
        value: "",
        placeholder: "Enter first name",
        type: "text",
        labelText: "First name",
        validation: { required: true },
        valid: false,
        touched: false
      },
      {
        name: "lastName",
        value: "",
        placeholder: "Enter last name",
        type: "text",
        labelText: "Last name",
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

  sendRegisterForm = e => {
    e.preventDefault();
    this.setState({ loading: true, errorMessage: "" });
    signUpUser(this.state.inputs[0].value, this.state.inputs[1].value)
      .then(res => {
        console.log("THEN signUpUser");
        setUserInfo(
          res.data.idToken,
          this.state.firstName + " " + this.state.lastName
        )
          .then(res => this.setState({ userSignup: true, loading: false }))
          .catch(err => {
            console.log(err);
            return this.setState({
              loading: false
            });
          });
      })
      .catch(err => {
        console.log(err);
        return this.setState({
          loading: false,
          errorMessage: err.response.data.error.message
        });
      });
  };
  render() {
    return (
      <>
        {this.state.userSignup && <Redirect to={routes.home} />}
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className="RegisterPage">
            {this.props.error && <h2>{this.props.error}</h2>}
            <form className="registerForm" onSubmit={this.sendRegisterForm}>
              <h1 className="registerForm-heading">Registration</h1>
              {this.state.errorMessage && (
                <div className="ErrorMessage">{this.state.errorMessage}</div>
              )}
              {this.state.inputs.map((i, index) => {
                return (
                  <div key={i.name} className="registerForm__input">
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
            <Link to={routes.login}>
              <Button btnType="Info-outline">SIGNIN</Button>
            </Link>
          </div>
        )}
      </>
    );
  }
}

export default RegisterPage;
