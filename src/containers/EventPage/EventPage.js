import React, { Component } from "react";
import "./EventPage.css";
class EventPage extends Component {
  state = {};
  componentDidMount() {
    setTimeout(() => {
      let event = {
        id: 1,
        title: "Śląski Festiwal Nauki w Katowicach",
        place: { address: "ul.Wojaka 32", city: "Katowice" },
        time: "12:30:00",
        image:
          "https://images.pexels.com/photos/1165607/pexels-photo-1165607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      };
      const pepega = { ...event };
      this.setState(pepega);
    }, 1000);
  }
  render() {
    return (
      <div className="EventPage">
        <div
          className="EventPage__image"
          style={{
            backgroundImage: this.state.image ? `url(${this.state.image})` : ""
          }}
        />
        <div className="EventPage__content">
          <h1 className="EventPage__content-title"> {this.state.title}</h1>
          <h2 className="EventPage__content-place">
            {this.state.place ? this.state.place.address : ""}
          </h2>
          <h2 className="EventPage__content-place">
            {this.state.place ? this.state.place.city : ""}
          </h2>
          <h2 className="EventPage__content-place">
            {this.state.time ? this.state.time : ""}
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
