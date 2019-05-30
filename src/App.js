import React, { Component } from "react";
import HomePage from "./containers/HomePage/HomePage";
import EventPage from "./containers/EventPage/EventPage";
import AddEvent from "./containers/AddEvent/AddEvent";
import Navigation from "./components/Navigation/Navigation";
import Auth from "./containers/Auth/Auth";
import YourEvents from "./containers/YourEvents/YourEvents";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import Backgroud from "./hoc/Background";
class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route exact path="/meetup" component={HomePage} />
        <Route exact path="/meetup/event/:id" component={EventPage} />
        <Route exact path="/meetup/login" component={Auth} />{" "}
        {this.props.token && (
          <>
            <Route exact path="/meetup/add" component={AddEvent} />
            <Route exact path="/meetup/yourevents" component={YourEvents} />
          </>
        )}
        <Redirect to="/meetup" />
      </Switch>
    );
    // let routes = (
    //   <Switch>
    //     <Route exact path="/" component={HomePage} />
    //     <Route exact path="/event/:id" component={EventPage} />
    //     <Route exact path="/add" component={AddEvent} />
    //     <Route exact path="/login" component={Auth} />
    //     <Route exact path="/yourevents" component={YourEvents} />
    //     <Redirect to="/" />
    //   </Switch>
    // );
    return (
      <div className="wrapper">
        <Navigation />
        <Backgroud>{routes}</Backgroud>
        {this.props.userName && (
          <p
            style={{
              fontSize: "0.8rem",
              position: "absolute",
              right: "5px",
              top: "10vh",
              color: "#fff"
            }}
          >
            You are logged in as <strong>{this.props.userName}</strong>
          </p>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.token,
    userName: state.userName
  };
};
export default connect(mapStateToProps)(App);
