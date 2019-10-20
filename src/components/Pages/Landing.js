import React, { Component } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";

import SecHeader from "../Header/SecHeader";
import carousel_img_1 from "../css/images/carousel_img_1.png";
import carousel_img_2 from "../css/images/carousel_img_2.png";
import carousel_img_3 from "../css/images/carousel_img_3.png";

const carousel = (
  <Carousel>
    <Carousel.Item>
      <img className="d-block w-100" src={carousel_img_1} alt="First slide" />
      <Carousel.Caption>
        <h3 className="carousel-header">JK Tyres come with family package</h3>
        <p className="carousel-p">
          Offering the most Cost-effective tyre selection for your family tavel.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img className="d-block w-100" src={carousel_img_2} alt="First slide" />

      <Carousel.Caption>
        <h3 className="carousel-header">
          Apollo is the best tyre brand on technologies.
        </h3>
        <p className="carousel-p">
          Rewarding the Nova Price for the competion in 2019 with more than
          10,000 times practical experiments
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img className="d-block w-100" src={carousel_img_3} alt="First slide" />

      <Carousel.Caption>
        <h3 className="carousel-header">Continue the Rally Champin Story</h3>
        <p className="carousel-p">
          {" "}
          TyreStore has been the largest tyre supplier for Rally Events in World
          Wide.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

const brandSection = (
  <div class="categories">
    <div class="category">
      <a href="https://www.mumstore.com.au/all-products/brand/aptamil.html">
        <img
          src="https://cdn.mumstore.com.au/media/wysiwyg/homepage_images/Tile_Desktop_Aptamil-Gold-Plus_AU.png"
          data-src="https://cdn.mumstore.com.au/media/wysiwyg/homepage_images/Tile_Desktop_Aptamil-Gold-Plus_AU.png"
          title="aptamil"
          alt="aptamil"
          class="desktop"
        />
        <img
          src="https://cdn.mumstore.com.au/skin/frontend/mumstore/default/images/blank.gif"
          data-src="https://cdn.mumstore.com.au/media/wysiwyg/homepage_images/Tile_Mobile_Aptamil-Gold-Plus_AU.png"
          title="aptamil"
          alt="aptamil"
          class="mobile"
        />
      </a>
    </div>
  </div>
  /* // <Container>
  //   <Row>
  //     <Col>
  //       <div className="brand-section bg-img-1" />
  //     </Col>
  //     <Col>
  //       <div className="brand-section bg-img-2" />
  //     </Col>
  //   </Row>
  // </Container> */
);

class Landing extends Component {
  render() {
    return (
      <div>
        <SecHeader />
        {carousel}
        <div>Landing Page</div>
        {brandSection}
        <div>Landing Page</div>
        <div>Landing Page</div>
      </div>
    );
  }
}

export default Landing;
