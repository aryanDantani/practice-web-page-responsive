import React, { useState } from "react";
import "./navigation.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo"></div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isMenuOpen ? "line open" : "line"}></div>
          <div className={isMenuOpen ? "line open" : "line"}></div>
          <div className={isMenuOpen ? "line open" : "line"}></div>
        </div>
        <ul className={isMenuOpen ? "nav-links open" : "nav-links"}>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
