import React, { Component } from "react";
import { connect } from "react-redux";

import Spinner from "../../components/Spinner/Spinner";

import EventBoxList from "../../components/EventBoxList/EventBoxList";

import { getUserEvents } from "../../API/API";

import "./YourEvents.css";
class YourEvents extends Component {
  state = {
    events: [],
    loading: true
  };
  componentDidMount() {
    getUserEvents(this.props.token, this.props.userId)
      .then(res => {
        console.log(res);
        this.setState({ events: res, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let eventList =
      this.state.events.length > 0 ? (
        <EventBoxList list={this.state.events} />
      ) : (
        <h1
          style={{
            textAlign: "center"
          }}
        >
          {"There is nothing here"}
        </h1>
      );

    return (
      <div className="YourEventPage">
        <div className="YourEventList">
          {this.state.loading ? <Spinner /> : eventList}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.token,
    userId: state.userId
  };
};
export default connect(mapStateToProps)(YourEvents);
