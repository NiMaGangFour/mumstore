import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class FooterLists extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="col">
              <ul className="footer-list">
                <li>
                  <NavLink to="/about">
                    <strong>Shop now</strong>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Brands</NavLink>
                </li>
                <li>
                  <NavLink to="/news">Formula & Ordinary Tire</NavLink>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="footer-list">
                <li>
                  <NavLink to="/about">
                    <strong>Shop now</strong>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Brands</NavLink>
                </li>
                <li>
                  <NavLink to="/news">Formula & Ordinary Tire</NavLink>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="footer-list">
                <li>
                  <NavLink to="/about">
                    <strong>Brands</strong>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Official Brand Support</NavLink>
                </li>
                <li>
                  <NavLink to="/news">Formula & Ordinary Tire</NavLink>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FooterLists;
