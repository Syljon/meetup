import React, { Component } from "react";
import { apiEvents } from "../../fakeAPI/events";
import "./EventPage.css";
class EventPage extends Component {
  state = {};

  getEvent = id => {
    console.log(id);
    const url = `https://react-meetup-c3c9c.firebaseio.com/events/${id}.json`;
    fetch(url, {
      method: "Get"
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

  componentDidMount() {
    setTimeout(() => {
      let event = apiEvents[this.props.match.params.id];
      const pepega = { ...event };
      this.setState(pepega);
    }, 1000);
    this.getEvent(this.props.match.params.id);
  }
  render() {
    return (
      <div className="EventPage">
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
            {this.state.place ? this.state.place.address : "No data found"}
          </h2>
          <h2 className="EventPage__content-place">
            {this.state.place ? this.state.place.city : "No data found"}
          </h2>
          <h2 className="EventPage__content-place">
            {this.state.date ? this.state.date.day : "No data found"}
          </h2>
          <h2 className="EventPage__content-place">
            {this.state.date ? this.state.date.time : "No data found"}
          </h2>
          <p className="EventPage__content-description  ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
            maiores cupiditate voluptatem modi autem maxime recusandae dolore
            magnam inventore laudantium iste id quam voluptatibus veniam
            accusamus repellendus, quae obcaecati. Amet, dicta! Doloribus
            possimus natus voluptatum odio ex totam aliquid quasi non aliquam
            dignissimos sit amet, asperiores voluptate labore. Ratione,
            aliquam!Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Animi maiores cupiditate voluptatem modi autem maxime recusandae
            dolore magnam inventore laudantium iste id quam voluptatibus veniam
            accusamus repellendus, quae obcaecati. Amet, dicta! Doloribus
            possimus natus voluptatum odio ex totam aliquid quasi non aliquam
            dignissimos sit amet, asperiores voluptate labore. Ratione,
            aliquam!Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Animi maiores cupiditate voluptatem modi autem maxime recusandae
            dolore magnam inventore laudantium iste id quam voluptatibus veniam
            accusamus repellendus, quae obcaecati. Amet, dicta! Doloribus
            possimus natus voluptatum odio ex totam aliquid quasi non aliquam
            dignissimos sit amet, asperiores voluptate labore. Ratione,
            aliquam!Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Animi maiores cupiditate voluptatem modi autem maxime recusandae
            dolore magnam inventore laudantium iste id quam voluptatibus veniam
            accusamus repellendus, quae obcaecati. Amet, dicta! Doloribus
            possimus natus voluptatum odio ex totam aliquid quasi non aliquam
            dignissimos sit amet, asperiores voluptate labore. Ratione, aliquam!
          </p>
        </div>
      </div>
    );
  }
}

export default EventPage;
