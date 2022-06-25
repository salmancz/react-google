import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="navbar__container">
      <div className="left__navbar">
        <div className="logo">Salman</div>
      </div>
      <div className="right__navbar">
        <ul className="nav__item">
          <li className="nav__elements">Home</li>
          <li className="nav__elements">About</li>
          <li className="nav__elements">Testimonials</li>
          <li className="nav__elements">Projects</li>
          <li className="nav__elements">Skills</li>
          <li className="nav__elements">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
