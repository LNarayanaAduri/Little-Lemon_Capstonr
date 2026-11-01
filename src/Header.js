import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/Logo.svg';

function Header() {
  return (
    <header className="header">
      <Link to="/" aria-label="Little Lemon Home">
        <img src={logo} alt="Little Lemon logo" className="header-logo" />
      </Link>
    </header>
  );
}

export default Header;
