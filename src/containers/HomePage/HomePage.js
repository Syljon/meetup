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
    loading: true,
    cityList: ["Katowice", "Warszawa", "Chorzów", "Poznań", "Gliwice", "Bytom"]
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
    const events =
      e.target.name === "citySearch"
        ? this.cityReducerHandler(this.state.events, e.target.value)
        : this.titleReducerHandler(this.state.events, e.target.value);

    this.setState({ eventsReduce: events });
  };

  cityButtonClickHandler = e => {
    this.setState({ citySearch: e.target.value });
    const events = this.cityReducerHandler(this.state.events, e.target.value);
    this.setState({ eventsReduce: events });
  };

  titleReducerHandler(T, red) {
    if (!red) {
      return T;
    }
    return T.filter(
      p => p.title.toLowerCase().indexOf(red.toLowerCase()) !== -1
    );
  }

  cityReducerHandler(T, red) {
    if (!red) {
      return T;
    }
    return T.filter(
      f => f.place.city.toLowerCase().indexOf(red.toLowerCase()) !== -1
    );
  }

  render() {
    const {
      cityList,
      titleSearch,
      citySearch,
      loading,
      eventsReduce
    } = this.state;
    return (
      <div className="HomePage">
        <Header
          citySearch={citySearch}
          titleSearch={titleSearch}
          cityBtnList={cityList}
          InputChangeHandler={this.InputChangeHandler}
          cityButtonClickHandler={this.cityButtonClickHandler}
        />
        <div className="EventBoxList">
          {loading ? <Spinner /> : <EventBoxList list={eventsReduce} />}
        </div>
      </div>
    );
  }
}
export default HomePage;
