import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Toolbar from "./Toolbar/Toolbar";
import MobileMenu from "./MobileMenu/MobileMenu";
import * as routes from "../../helpers/routes";
import logo from "../../assets/logo.png";

import "./Navigation.css";

import * as actions from "../../store/actions";

class Navigation extends Component {
  state = {
    showMobile: false
  };

  buttonClickHandler = () => {
    this.setState(prevState => {
      return { showMobile: !prevState.showMobile };
    });
  };

  render() {
    let menuRoutes = !this.props.token
      ? [{ name: "Home", to: routes.home }, { name: "Login", to: routes.login }]
      : [
          { name: "Home", to: routes.home },
          { name: "Add Event", to: routes.addEvent },
          { name: "Settings", to: routes.settings }
        ];
    return (
      <nav className="navbar">
        <Link className="logo" to="/meetup">
          <img src={logo} alt="Logo" />
        </Link>
        <Toolbar routes={menuRoutes} />
        <button
          className={[
            "burger",
            this.state.showMobile ? " burger-active" : ""
          ].join("")}
          onClick={this.buttonClickHandler}
        >
          <div className="burger__line" />
        </button>
        {this.state.showMobile && (
          <MobileMenu routes={menuRoutes} clicked={this.buttonClickHandler} />
        )}
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
