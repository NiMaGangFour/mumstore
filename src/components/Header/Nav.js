import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

import "../css/components.css";
import Logo_White from "../css/images/mumstore_logo.png";

class Nav extends Component {
  render() {
    return (
      <div>
        <ul id="navigation-items">
          <NavLink to="/">
            <li>
              <img className="logo_white" src={Logo_White} alt="logo"></img>
            </li>
          </NavLink>
          <li>
            <a>Shop Now</a>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Safe is Best</a>
          </li>
          <li>
            <a>
              <FaSearch />
            </a>
          </li>
          <li>
            <a>
              <FaShoppingCart />
            </a>
          </li>
          <li>
            <a>
              <FaUser />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
