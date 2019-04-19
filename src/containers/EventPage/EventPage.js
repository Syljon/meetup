import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../components/Buttons/Button";
import { Redirect } from "react-router-dom";
import "./EventPage.css";
class EventPage extends Component {
  state = { done: false };

  getEvent = id => {
    console.log(id);
    const url = `https://react-meetup-c3c9c.firebaseio.com/events/${id}.json`;
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState(response);
      })
      .catch(err => {
        console.log(err);
      });
  };
  deleteEvent = () => {
    console.log("DELETE");
    let id = this.props.match.params.id;
    const url = `https://react-meetup-c3c9c.firebaseio.com/events/${id}.json`;
    fetch(url, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ done: true });
      })
      .catch(err => {
        console.log(err);
        this.setState({ done: false });
      });
  };
  componentDidMount() {
    this.getEvent(this.props.match.params.id);
  }
  render() {
    return (
      <div className="EventPage">
        {this.state.done ? <Redirect to="/" /> : null}
        <div
          className="EventPage__image"
          style={{
            backgroundImage: this.state.imageURL
              ? `url(${this.state.imageURL})`
              : "linear-gradient(30deg,  #1E5799  50%, #252ABA 100%)"
          }}
        />
        <div className="EventPage__content">
          <h1 className="EventPage__content-title">
            {this.state.title ? this.state.title : "No data found"}
          </h1>
          <h2 className="EventPage__content-place">
            Address:{" "}
            {this.state.place ? this.state.place.address : "No data found"}
          </h2>
          <h2 className="EventPage__content-place">
            City: {this.state.place ? this.state.place.city : "No data found"}
          </h2>
          <h2 className="EventPage__content-place">
            Date: {this.state.date ? this.state.date.day : "No data found"}
          </h2>
          <h2 className="EventPage__content-place">
            Time: {this.state.date ? this.state.date.time : "No data found"}
          </h2>
          {this.props.userId ? (
            <Button clicked={this.deleteEvent}>QWEQW</Button>
          ) : null}
          <p className="EventPage__content-description  ">
            {this.state.description
              ? this.state.description
              : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animimaiores cupiditate voluptatem modi autem maxime recusandae doloremagnam inventore laudantium iste id quam voluptatibus veniamaccusamus repellendus, quae obcaecati. Amet, dicta! Doloribuspossimus natus voluptatum odio ex totam aliquid quasi non aliquamdignissimos sit amet, asperiores voluptate labore. Ratione,aliquam!Lorem ipsum dolor, sit amet consectetur adipisicing elit.Animi maiores cupiditate voluptatem modi autem maxime recusandaedolore magnam inventore laudantium iste id quam voluptatibus veniamaccusamus repellendus, quae obcaecati. Amet, dicta! Doloribuspossimus natus voluptatum odio ex totam aliquid quasi non aliquamdignissimos sit amet, asperiores voluptate labore. Ratione,aliquam!Lorem ipsum dolor, sit amet consectetur adipisicing elit.Animi maiores cupiditate voluptatem modi autem maxime recusandaedolore magnam inventore laudantium iste id quam voluptatibus veniamaccusamus repellendus, quae obcaecati. Amet, dicta! Doloribuspossimus natus voluptatum odio ex totam aliquid quasi non aliquamdignissimos sit amet, asperiores voluptate labore. Ratione,aliquam!Lorem ipsum dolor, sit amet consectetur adipisicing elit.Animi maiores cupiditate voluptatem modi autem maxime recusandaeolore magnam inventore laudantium iste id quam voluptatibus veniamaccusamus repellendus, quae obcaecati. Amet, dicta! Doloribuspossimus natus voluptatum odio ex totam aliquid quasi non aliquamdignissimos sit amet, asperiores voluptate labore. Ratione, aliquam!"}
          </p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userId: state.userId
  };
};
export default connect(mapStateToProps)(EventPage);
