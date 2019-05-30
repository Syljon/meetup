import React, { Component } from "react";

import EventBoxList from "../../components/EventBoxList/EventBoxList";
import Header from "../../components/Header/Header";
import Spinner from "../../components/Spinner/Spinner";

import { getEvents } from "../../API/API";

import "./HomePage.css";
class HomePage extends Component {
  state = {
    citySearch: "",
    titleSearch: "",
    events: [],
    eventsReduce: [],
    loading: true
  };
  componentDidMount() {
    getEvents()
      .then(res => {
        this.setState({ events: res, loading: false });
      })
      .catch(err => this.setState({ loading: false }));
  }

  InputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
    if (!e.target.value) {
      this.setState({ eventsReduce: [] });
      return;
    }
    const events =
      e.target.name === "citySearch"
        ? this.cityReducerHandler(this.state.events, e.target.value)
        : this.titleReducerHandler(this.state.events, e.target.value);

    this.setState({ eventsReduce: events });
  };

  titleReducerHandler(T, red) {
    return T.filter(
      p => p.title.toLowerCase().indexOf(red.toLowerCase()) !== -1
    );
  }

  cityReducerHandler(T, red) {
    return T.filter(
      f => f.place.city.toLowerCase().indexOf(red.toLowerCase()) !== -1
    );
  }

  render() {
    const { titleSearch, citySearch, loading, eventsReduce } = this.state;
    return (
      <div className="HomePage">
        <Header
          citySearch={citySearch}
          titleSearch={titleSearch}
          InputChangeHandler={this.InputChangeHandler}
        />
        {loading ? (
          <Spinner />
        ) : (
          <div className="EventBoxList">
            <EventBoxList list={eventsReduce} />
          </div>
        )}
      </div>
    );
  }
}
export default HomePage;
