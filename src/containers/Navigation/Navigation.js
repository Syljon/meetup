import React, { Component } from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideMenu from "../../components/Navigation/SideMenu/SideMenu";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Link } from "react-router-dom";
class Navigation extends Component {
  state = {
    showSideDrawer: false
  };

  buttonClickHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <nav className="navbar">
        <Link className="logo" to="/">
          <img src={logo} alt="Logo" />
        </Link>
        {this.state.showSideDrawer ? (
          <SideMenu
            token={this.props.token}
            clicked={this.buttonClickHandler}
            logout={this.props.onLogout}
          />
        ) : null}
        <Toolbar token={this.props.token} logout={this.props.onLogout} />
        <div className="burger" onClick={this.buttonClickHandler}>
          <div />
          <div />
          <div />
        </div>
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
