import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import SecHeader from "../Header/SecHeader";
import carousel_img_1 from "../css/images/carousel_img_1.jpg";
import carousel_img_2 from "../css/images/carousel_img_2.jpg";
import carousel_img_3 from "../css/images/carousel_img_3.png";

const carousel = (
  <Carousel>
    <Carousel.Item>
      <img className="d-block w-100" src={carousel_img_1} alt="First slide" />
      <Carousel.Caption>
        <h3 className="carousel">First slide label</h3>
        <p className="carousel">
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img className="d-block w-100" src={carousel_img_2} alt="First slide" />

      <Carousel.Caption>
        <h3 className="carousel">Second slide label</h3>
        <p className="carousel">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img className="d-block w-100" src={carousel_img_3} alt="First slide" />

      <Carousel.Caption>
        <h3 className="carousel">Third slide label</h3>
        <p className="carousel">
          {" "}
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

class Landing extends Component {
  render() {
    return (
      <div>
        <SecHeader />
        {carousel}
        <div>Landing Page</div>
      </div>
    );
  }
}

export default Landing;
