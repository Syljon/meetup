import React, { Component } from "react";
import EventBoxList from "../../components/EventBoxList/EventBoxList";
import Input from "../../components/Input/Input";
import CityButton from "../../components/Buttons/CityButton/CityButton";
import Spinner from "../../components/Spinner/Spinner";

import "./HomePage.css";
import { apiEvents } from "../../fakeAPI/events";
class HomePage extends Component {
  state = {
    citySearch: "",
    titleSearch: "",
    events: []
  };

  componentDidMount() {
    console.log(apiEvents);
    setTimeout(() => {
      this.setState({
        events: apiEvents
      });
    }, 1000);
  }

  InputChangeHandler = e => {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  cityButtonClickHandler = e => {
    console.log(e.target.value);
    this.setState({ citySearch: e.target.value });
  };

  render() {
    return (
      <div className="HomePage">
        <header className="HomePage__header">
          <h1 className="header__heading">Find Event</h1>
          <div className="header__inputs">
            <div className="header__input">
              <Input
                name="titleSearch"
                changed={this.InputChangeHandler}
                value={this.state.titleSearch}
                placeholder="Enter Title ..."
              />
            </div>

            <div className="header__input">
              <Input
                name="citySearch"
                changed={this.InputChangeHandler}
                value={this.state.citySearch}
                placeholder="Enter City ..."
              />
            </div>
          </div>
          <ul className="city__list">
            <li>
              <CityButton
                clicked={this.cityButtonClickHandler}
                place="Katowice"
              />
            </li>
            <li>
              <CityButton
                place="Warszawa"
                clicked={this.cityButtonClickHandler}
              />
            </li>
            <li>
              <CityButton
                place="Wrocław"
                clicked={this.cityButtonClickHandler}
              />
            </li>
            <li>
              <CityButton
                place="Chorzów"
                clicked={this.cityButtonClickHandler}
              />
            </li>
          </ul>
        </header>
        <div className="EventBoxList">
          {this.state.events.length > 0 ? (
            <EventBoxList
              list={this.state.events}
              cityReducer={this.state.citySearch}
              titleReducer={this.state.titleSearch}
            />
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
