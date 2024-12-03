import React, { useState } from 'react';
import './Navbar.css'; // Import Navbar-specific styles

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">Kartik Naik</div>
      <div className="nav-links" id="desktop-nav">
      <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="hamburger-menu" id="hamburger-nav">
        <div className="hamburger-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
