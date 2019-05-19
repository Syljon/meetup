import React, { Component } from "react";
import EventBoxList from "../../components/EventBoxList/EventBoxList";
import Input from "../../components/Input/Input";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/Buttons/Button";

import { getEvents } from "../../API/API";
import "./HomePage.css";
class HomePage extends Component {
  state = {
    citySearch: "",
    titleSearch: "",
    events: [],
    loading: true,
    cityList: ["Katowice", "Warszawa", "Chorzów", "Poznań", "Gliwice", "Bytom"]
  };

  componentDidMount() {
    getEvents()
      .then(res => this.setState({ events: res, loading: false }))
      .catch(err => this.setState({ loading: false }));
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
    const cityBtnList = (
      <ul className="city__list">
        {this.state.cityList.map(cityName => (
          <li key={cityName}>
            <Button clicked={this.cityButtonClickHandler} btnType="Info">
              {cityName}
            </Button>
          </li>
        ))}
      </ul>
    );
    return (
      <div className="HomePage">
        <header className="HomePage__header">
          <h1 className="header__heading">Find Event</h1>
          <div className="header__inputs">
            <div className="header__input">
              <Input
                name="titleSearch"
                inputType="Input_Default"
                changed={this.InputChangeHandler}
                value={this.state.titleSearch}
                placeholder="Enter Title ..."
              />
            </div>

            <div className="header__input">
              <Input
                name="citySearch"
                inputType="Input_Default"
                changed={this.InputChangeHandler}
                value={this.state.citySearch}
                placeholder="Enter City ..."
              />
            </div>
          </div>
          {cityBtnList}
        </header>
        <div className="EventBoxList">
          {this.state.loading ? (
            <Spinner />
          ) : (
            <EventBoxList
              list={this.state.events}
              cityReducer={this.state.citySearch}
              titleReducer={this.state.titleSearch}
            />
          )}
        </div>
      </div>
    );
  }
}
export default HomePage;
