import React from "react";
import Input from "../../Input/Input";
const registration = props => (
  <div className="formPage">
    <form className="form" onSubmit={props.sendForm}>
      <h1 className="form-heading">Registration</h1>
      <Input
        name="email"
        type="email"
        value={props.email}
        placeholder="Enter Email"
        changed={props.changed}
        style={{ marginBottom: "2rem" }}
      />
      <Input
        name="password"
        type="password"
        value={props.password}
        placeholder="Enter Password"
        changed={props.changed}
        style={{ marginBottom: "2rem" }}
      />
      <button>SUBMIT</button>
    </form>
  </div>
);

export default registration;
