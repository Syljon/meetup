import React, { Component } from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideMenu from "../../components/Navigation/SideMenu/SideMenu";
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
        <img className="logo" src={logo} alt="Logo" />
        {this.state.showSideDrawer ? <SideMenu /> : null}
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
