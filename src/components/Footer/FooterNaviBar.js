import React, { Component } from "react";

class FooterNaviBar extends Component {
  render() {
    return (
      <div className="footer-navi-bar">
        <ul className="footer-navi-bar-ul">
          <li>
            <a href="#home">Copyright © 2019 TyreStore</a>
          </li>
        </ul>
        <ul className="footer-navi-bar-ul">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default FooterNaviBar;
