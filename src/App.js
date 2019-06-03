import React, { Component } from "react";
import HomePage from "./containers/HomePage/HomePage";
import EventPage from "./containers/EventPage/EventPage";
import AddEvent from "./containers/AddEvent/AddEvent";
import Navigation from "./components/Navigation/Navigation";
import LoginPage from "./containers/LoginPage/LoginPage";
import RegisterPage from "./containers/RegisterPage/RegisterPage";
import YourEvents from "./containers/YourEvents/YourEvents";
import SettingsPage from "./containers/SettingsPage/SettingsPage";
import * as routes from "./helpers/routes";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

const PrivateRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      token ? <Component {...props} /> : <Redirect to={routes.login} />
    }
  />
);

class App extends Component {
  render() {
    const RouterRoutes = (
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.eventPage} component={EventPage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.registration} component={RegisterPage} />
        <PrivateRoute
          token={this.props.token}
          exact
          path={routes.addEvent}
          component={AddEvent}
        />
        <PrivateRoute
          token={this.props.token}
          exact
          path={routes.yourEvents}
          component={YourEvents}
        />
        <PrivateRoute
          token={this.props.token}
          exact
          path={routes.settings}
          component={SettingsPage}
        />
        <Redirect to={routes.home} />
      </Switch>
    );

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
