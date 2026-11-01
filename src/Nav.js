import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <button 
        className="hamburger-toggle" 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className="hamburger-icon" aria-hidden="true">{isOpen ? '✕' : '☰'}</span>
      </button>

      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" aria-label="On Click" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" aria-label="On Click" onClick={closeMenu}>About</Link></li>
        <li><Link to="/menu" aria-label="On Click" onClick={closeMenu}>Menu</Link></li>
        <li><Link to="/booking" aria-label="On Click" onClick={closeMenu}>Reservations</Link></li>
        <li><Link to="/order-online" aria-label="On Click" onClick={closeMenu}>Order Online</Link></li>
        <li><Link to="/login" aria-label="On Click" onClick={closeMenu}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
