import React, { Component } from "react";
import EventBoxList from "../../components/EventBoxList/EventBoxList";
import Input from "../../components/Input/Input";
import Spinner from "../../components/Spinner/Spinner";
import { connect } from "react-redux";
import Button from "../../components/Buttons/Button";
import "./HomePage.css";
class HomePage extends Component {
  state = {
    citySearch: "",
    titleSearch: "",
    events: []
  };

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
        this.setState({ events: fetchEvents });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getEvents();
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
                classname="Input_Default"
                changed={this.InputChangeHandler}
                value={this.state.titleSearch}
                placeholder="Enter Title ..."
              />
            </div>

            <div className="header__input">
              <Input
                name="citySearch"
                classname="Input_Default"
                changed={this.InputChangeHandler}
                value={this.state.citySearch}
                placeholder="Enter City ..."
              />
            </div>
          </div>
          <ul className="city__list">
            <li>
              <Button clicked={this.cityButtonClickHandler} btnType="Info">
                QAZ
              </Button>
            </li>
            <li>
              <Button clicked={this.cityButtonClickHandler} btnType="Info">
                Warszawa
              </Button>
            </li>
            <li>
              <Button clicked={this.cityButtonClickHandler} btnType="Info">
                Wrocław
              </Button>
            </li>
            <li>
              <Button clicked={this.cityButtonClickHandler} btnType="Info">
                Chorzów
              </Button>
            </li>
          </ul>
        </header>
        <div className="EventBoxList">
          {this.props.token}
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
const mapStateToProps = state => {
  return {
    test: state.test,
    token: state.token
  };
};
export default connect(mapStateToProps)(HomePage);
