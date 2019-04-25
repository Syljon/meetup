import React, { Component } from "react";
import EventBoxList from "../../components/EventBoxList/EventBoxList";
import Input from "../../components/Input/Input";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/Buttons/Button";
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
    this.getEvents();
  }

  getEvents = () => {
    const url = "https://react-meetup-c3c9c.firebaseio.com/events.json";
    fetch(url, {
      method: "Get"
    })
      .then(response => response.json())
      .then(response => {
        let fetchEvents = [];
        for (let key in response) {
          response[key].id = key;
          fetchEvents.push(response[key]);
        }
        this.setState({ events: fetchEvents, loading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

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
