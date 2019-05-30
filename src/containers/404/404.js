import React, { Component } from "react";

class Error404 extends Component {
  render() {
    console.log(this.props.location.pathname);
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: "2rem", color: "white", maxWidth: "500px" }}>
          ERROR 404 no match for {this.props.location.pathname}
        </h1>
      </div>
    );
  }
}

export default Error404;
