import React, { Component } from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideMenu from "../../components/Navigation/SideMenu/SideMenu";
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
          <SideMenu clicked={this.buttonClickHandler} />
        ) : null}
        <Toolbar />
        <div className="burger" onClick={this.buttonClickHandler}>
          <div />
          <div />
          <div />
        </div>
      </nav>
    );
  }
}

export default Navigation;
