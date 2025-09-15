import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="hamburger-menu-container">
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>

      <nav className={`menu ${isOpen ? 'show' : ''}`}>
            <Link to="/about">ABOUT</Link>
            <Link to="/events"> EVENTS</Link>
            <Link to="/admissions">ADMISSIONS</Link>
            <Link to="/support">SUPPORT US</Link>
            <Link to="/contact">CONTACT US</Link>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
