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
    return (
      <nav className="navbar">
        <Link className="logo" to="/">
          <img src={logo} alt="Logo" />
        </Link>
        {this.state.showMobile ? (
          <MobileMenu
            token={this.props.token}
            clicked={this.buttonClickHandler}
            logout={this.props.onLogout}
          />
        ) : null}
        <Toolbar token={this.props.token} logout={this.props.onLogout} />
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
