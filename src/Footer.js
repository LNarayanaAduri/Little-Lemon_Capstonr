import React from 'react';
// Import the logo using the correct relative path to your assets directory
// Adjust the path '../icons_assets/' depending on where your assets folder is located relative to Footer.js
import footerLogo from './images/Logo .svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={footerLogo} alt="Little Lemon logo footer" />
        <p>&copy; 2026 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;