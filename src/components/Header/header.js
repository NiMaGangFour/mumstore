import React, { Component } from "react";
import Nav from "./Nav";

import "../css/components.css";
import Logo_White from "../css/images/mumstore_logo.png";
// import { Button } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div>
        {/* <img className="logo_white" src={Logo_White} alt="logo"></img> */}
        <Nav />
      </div>
    );
  }
}

export default Header;
