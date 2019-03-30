import React, { Component } from "react";
import EventBoxList from "./components/EventBoxList";

import "./App.css";

class App extends Component {
  state = {
    events: [
      { id: 1, title: "Event1", place: "Katowice" },
      { id: 2, title: "Event2", place: "Wrocaław" },
      { id: 3, title: "Event3", place: "Poznań" }
    ]
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input />
          <EventBoxList list={this.state.events} cityReducer="Ka" />
        </header>
      </div>
    );
  }
}

export default App;
