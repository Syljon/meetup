import React, { Component } from "react";
import EventBoxList from "./components/EventBoxList";

import "./App.css";

class App extends Component {
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
          { id: 1, title: "Event1", place: "Katowice" },
          { id: 2, title: "Event2", place: "Wrocaław" },
          { id: 3, title: "Event3", place: "Poznań" },
          { id: 4, title: "Event4", place: "Warszawa" },
          { id: 5, title: "Event5", place: "Poznań" },
          { id: 6, title: "Event6", place: "Warszawa" }
        ]
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Add Event</a>
              </li>
            </ul>
          </nav>

          <input
            onChange={this.titleChangeHandler}
            value={this.state.titleSearch}
            placeholder="Title"
          />

          <input
            onChange={this.cityChangeHandler}
            value={this.state.citySearch}
            placeholder="City"
          />
          <p>
            {this.state.citySearch ? this.state.citySearch : "Write something"}
          </p>
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

export default App;
