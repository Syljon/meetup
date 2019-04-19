import React, { Component } from "react";
import HomePage from "./containers/HomePage/HomePage";
import EventPage from "./containers/EventPage/EventPage";
import AddEvent from "./containers/AddEvent/AddEvent";
import Navigation from "./containers/Navigation/Navigation";
import Auth from "./containers/Auth/Auth";
import YourEvents from "./containers/YourEvents/YourEvents";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/event/:id" component={EventPage} />
        <Route exact path="/login" component={Auth} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.token) {
      routes = (
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/event/:id" component={EventPage} />
          <Route exact path="/add" component={AddEvent} />
          <Route exact path="/login" component={Auth} />
          <Route exact path="/yourevents" component={YourEvents} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div className="wrapper">
        <Navigation />
        {routes}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.token
  };
};
export default connect(mapStateToProps)(App);
