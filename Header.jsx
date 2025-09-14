//Student ID : 25011322

import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/websitelogo.png";


function Header() {
  return (
    <header>
      <div className="logo_title">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>Kiwi Trails and Tales</h1>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
    </header>
  );
}

export default Header;
