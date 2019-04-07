import React from "react";
import "./EventBox.css";

const eventBox = props => (
  <div className="EventBox">
    <div
      className="EventBox__image"
      style={{
        backgroundImage: props.image
          ? `url(${props.image})`
          : "linear-gradient(to bottom, blue, #2f00ff)"
      }}
    />
    <div className="EventBox__content">
      <h1 className="EventBox__content-title">
        {props.title ? props.title : "No data found"}
      </h1>
      <h2 className="EventBox__content-place">
        {props.place ? props.place : "No data found"}
      </h2>
      <p className="EventBox__content-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi maiores
        cupiditate voluptatem modi autem maxime recusandae dolore magnam
        inventore laudantium iste id quam voluptatibus veniam accusamus
        repellendus, quae obcaecati. Amet, dicta! Doloribus possimus natus
        voluptatum odio ex totam aliquid quasi non aliquam dignissimos sit amet,
        asperiores voluptate labore. Ratione, aliquam! inventore laudantium iste
        id quam voluptatibus veniam accusamus repellendus, quae obcaecati. Amet,
        dicta! Doloribus possimus natus voluptatum odio ex totam aliquid quasi
        non aliquam dignissimos sit amet, asperiores voluptate labore. Ratione,
        aliquam! inventore laudantium iste id quam voluptatibus veniam accusamus
        repellendus, quae obcaecati. Amet, dicta! Doloribus possimus natus
        voluptatum odio ex totam aliquid quasi non aliquam dignissimos sit amet,
        asperiores voluptate labore. Ratione, aliquam! inventore laudantium iste
        id quam voluptatibus veniam accusamus repellendus, quae obcaecati. Amet,
        dicta! Doloribus possimus natus voluptatum odio ex totam aliquid quasi
        non aliquam dignissimos sit amet, asperiores voluptate labore. Ratione,
        aliquam!
      </p>
    </div>
  </div>
);

export default eventBox;
