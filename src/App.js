import React, { Component } from "react";
import HomePage from "./containers/HomePage/HomePage";
import EventPage from "./containers/EventPage/EventPage";
import AddEvent from "./containers/AddEvent/AddEvent";
import Navigation from "./containers/Navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/event/:id" component={EventPage} />
          <Route exact path="/add" component={AddEvent} />
        </Switch>
      </div>
    );
  }
}

export default App;
