import React from 'react';

function Footer() {
  return (
    <footer>
      {/* Footer copyright and info will go here */}
      <div className="footer-content">
        <img src={footerLogo} alt="Little Lemon logo footer" />
        <p>&copy; 2026 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;