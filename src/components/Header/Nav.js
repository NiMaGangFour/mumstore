import React, { Component } from "react";

import "../css/components.css";
import Logo_White from "../css/images/mumstore_logo.png";

class Nav extends Component {
  render() {
    return (
      <div>
        <ul id="navigation-items">
          <li>
            <img className="logo_white" src={Logo_White} alt="logo"></img>
          </li>
          <li>
            <a>Shop Now</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Safe is Best</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
