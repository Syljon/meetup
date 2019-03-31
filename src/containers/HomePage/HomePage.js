import React, { Component } from "react";
import EventBoxList from "../../components/EventBoxList";
import Input from "../../components/Input/Input";

import "./HomePage.css";
class HomePage extends Component {
  state = {
    citySearch: "",
    titleSearch: "",
    events: []
  };

  titleChangeHandler = e => {
    this.setState({ titleSearch: e.target.value });
  };

  cityChangeHandler = e => {
    this.setState({ citySearch: e.target.value });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        events: [
          {
            id: 1,
            title: "Śląski Festiwal Nauki w Chorzowie",
            place: "Katowice",
            image:
              "https://images.pexels.com/photos/1165607/pexels-photo-1165607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          {
            id: 2,
            title: "Event2",
            place: "Wrocaław",
            image:
              "https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          },
          { id: 3, title: "Event3", place: "Poznań", image: "" },
          { id: 4, title: "Event4", place: "Warszawa", image: "" },
          {
            id: 5,
            title: "Event5",
            place: "Poznań",
            image:
              "https://images.pexels.com/photos/1371179/pexels-photo-1371179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          { id: 6, title: "Event6", place: "Warszawa", image: "" }
        ]
      });
    }, 2000);
  }

  render() {
    return (
      <div className="HomePage">
        <header className="App-header">
          <Input
            changed={this.titleChangeHandler}
            value={this.state.titleSearch}
            placeholder="Enter Title ..."
          />

          <Input
            changed={this.cityChangeHandler}
            value={this.state.citySearch}
            placeholder="Enter City ..."
          />
        </header>
        {this.state.events.length > 0 ? (
          <EventBoxList
            list={this.state.events}
            cityReducer={this.state.citySearch}
            titleReducer={this.state.titleSearch}
          />
        ) : (
          <h1>{"Loading...."}</h1>
        )}
      </div>
    );
  }
}

export default HomePage;
