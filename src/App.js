import React, { Component } from "react";
import HomePage from "./containers/HomePage/HomePage";
import EventPage from "./containers/EventPage/EventPage";
import AddEvent from "./containers/AddEvent/AddEvent";
import Navigation from "./components/Navigation/Navigation";
import LoginPage from "./containers/LoginPage/LoginPage";
import RegisterPage from "./containers/RegisterPage/RegisterPage";
import YourEvents from "./containers/YourEvents/YourEvents";
import * as routes from "./helpers/routes";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    const RouterRoutes = (
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path="/meetup/event/:id" component={EventPage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.registration} component={RegisterPage} />
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
      <>
        <Navigation />
        {RouterRoutes}
        {/* {this.props.userName && (
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
        )} */}
      </>
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
