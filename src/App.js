import React, { Component } from "react";
import HomePage from "./containers/HomePage/HomePage";
import EventPage from "./containers/EventPage/EventPage";
import AddEvent from "./containers/AddEvent/AddEvent";
import Navigation from "./containers/Navigation/Navigation";
import Auth from "./containers/Auth/Auth";
import YourEvents from "./containers/YourEvents/YourEvents";
import { Route, Switch, Redirect } from "react-router-dom";
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
          <Route exact path="/login" component={Auth} />
          <Route exact path="/yourevents" component={YourEvents} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
