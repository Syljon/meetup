import React, { Component } from "react";
import HomePage from "./containers/HomePage/HomePage";
import Navigation from "./containers/Navigation/Navigation";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <HomePage />
      </div>
    );
  }
}

export default App;
