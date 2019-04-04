import React, { Component } from "react";
import HomePage from "./containers/HomePage/HomePage";
import EventPage from "./containers/EventPage/EventPage";
import Navigation from "./containers/Navigation/Navigation";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <HomePage />
        {/* <EventPage /> */}
      </div>
    );
  }
}

export default App;
