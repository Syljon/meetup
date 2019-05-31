import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Toolbar from "./Toolbar/Toolbar";
import MobileMenu from "./MobileMenu/MobileMenu";

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
    let routes = !this.props.token
      ? [
          { name: "Home", to: "/meetup" },
          { name: "Login", to: "/meetup/login" }
        ]
      : [
          { name: "Home", to: "/meetup" },
          { name: "Add Event", to: "/meetup/add" },
          { name: "Your Events", to: "/meetup/yourevents" }
        ];
    return (
      <nav className="navbar">
        <Link className="logo" to="/meetup">
          <img src={logo} alt="Logo" />
        </Link>
        <Toolbar
          token={this.props.token}
          routes={routes}
          logout={this.props.onLogout}
        />
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
          <MobileMenu
            token={this.props.token}
            routes={routes}
            clicked={this.buttonClickHandler}
            logout={this.props.onLogout}
          />
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
