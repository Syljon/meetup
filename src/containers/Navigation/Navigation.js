import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import MobileMenu from "../../components/Navigation/MobileMenu/MobileMenu";
import * as actions from "../../store/actions";

import logo from "../../assets/logo.png";
import "./Navigation.css";
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
    let routes;

    if (!this.props.token) {
      routes = [{ name: "Home", to: "/" }, { name: "Login", to: "/login" }];
    } else {
      routes = [
        { name: "Home", to: "/" },
        { name: "Add Event", to: "/add" },
        { name: "Your Events", to: "/yourevents" }
      ];
    }
    return (
      <nav className="navbar">
        <Link className="logo" to="/">
          <img src={logo} alt="Logo" />
        </Link>
        {this.state.showMobile ? (
          <MobileMenu
            token={this.props.token}
            routes={routes}
            clicked={this.buttonClickHandler}
            logout={this.props.onLogout}
          />
        ) : null}
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
