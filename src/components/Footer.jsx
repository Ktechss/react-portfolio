import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <p>Copyright &#169; 2023 Kartik Naik. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
