import React from "react";
import { NavLink } from "react-router-dom";

import "../css/components.css";

const SecHeader = () => (
  <div id="sec-header">
    <p>
      Important announcement regarding YOKOHAMA SRT# has upgraded its look and
      price. For more information <NavLink to="/news">click here</NavLink>.
    </p>
  </div>
);

export default SecHeader;
