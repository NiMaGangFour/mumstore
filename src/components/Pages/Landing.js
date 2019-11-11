import React, { Component } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { FaStar, FaShippingFast } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { NavLink } from "react-router-dom";

import SecHeader from "../Header/SecHeader";
import carousel_img_1 from "../css/images/carousel_img_1.png";
import carousel_img_2 from "../css/images/carousel_img_2.png";
import carousel_img_3 from "../css/images/carousel_img_3.png";
import landing_category_img_01 from "../css/images/landing-category-img-01.png";
import landing_category_img_02 from "../css/images/landing-category-img-02.png";
import landing_category_img_03 from "../css/images/landing-category-img-03.png";
import landing_category_img_04 from "../css/images/landing-category-img-04.png";

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

const startShopping = (
  <div>
    <h4 className="shopping-section-h4">Start Shopping</h4>
    <div className="startShoppingSection">
      <NavLink className="btn-link" to="/news">
        Register
      </NavLink>
    </div>
  </div>
);

const brandSection = (
  <div className="categories-section">
    <div className="categories">
      <div className="category">
        <a href="https://www.mumstore.com.au/all-products/brand/aptamil.html">
          <img
            src={landing_category_img_01}
            title="landing_category_img_01"
            alt="landing_category_img_01"
            className="desktop"
          />
        </a>
      </div>
      <div className="category">
        <a href="https://www.mumstore.com.au/all-products/brand/aptamil-profutura.html">
          <img
            src={landing_category_img_02}
            data-src="https://cdn.mumstore.com.au/media/wysiwyg/homepage_images/Tile_Desktop_Aptamil-Profutura_AU.png"
            title="landing_category_img_02"
            alt="landing_category_img_02"
            className="desktop"
          />
        </a>
      </div>
      <div className="category">
        <a href="https://www.mumstore.com.au/all-products/brand/karicare.html">
          <img
            src={landing_category_img_03}
            data-src="https://cdn.mumstore.com.au/media/wysiwyg/homepage_images/Tile_Desktop_Karicare_New4.jpg"
            title="landing_category_img_03"
            alt="landing_category_img_03"
            className="desktop"
          />
        </a>
      </div>
      <div className="category">
        <a href="https://www.mumstore.com.au/all-products/formula-toddler-milk/specialty.html">
          <img
            src={landing_category_img_04}
            data-src="https://cdn.mumstore.com.au/media/wysiwyg/homepage_images/Specialty.jpg"
            title="landing_category_img_04"
            alt="landing_category_img_03"
            className="desktop"
          />
        </a>
      </div>
    </div>
  </div>
);

const registSection = (
  <div className="sign-up">
    <div className="img-block">
      <div className="sign-up-info">
        <h2 className="title">Join TyreStore</h2>
        <Container>
          <Row>
            <Col className="col">
              <p className="icon">
                <FaStar />
              </p>
              <h3>SAVE TO MY FAVOURIES</h3>
            </Col>
            <Col>
              <p className="icon">
                <FiBell />
              </p>
              <h3>HEAR ABOUT PROMOTIONS</h3>
            </Col>
            <Col>
              <p className="icon">
                <FaShippingFast />
              </p>
              <h3>TRACK YOUR ORDERS</h3>
            </Col>
          </Row>
        </Container>

        <NavLink className="btn-link" to="/news">
          Register
        </NavLink>
      </div>
    </div>
  </div>
);

class Landing extends Component {
  render() {
    return (
      <div>
        <SecHeader />
        {carousel}
        <div>Landing Page</div>
        {startShopping}
        {brandSection}
        <div>Landing Page</div>
        {registSection}
        <div>Landing Page</div>
      </div>
    );
  }
}

export default Landing;
