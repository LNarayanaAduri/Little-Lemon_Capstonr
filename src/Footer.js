import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from './images/Logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand & About */}
        <div className="footer-col footer-brand">
          <img src={footerLogo} alt="Little Lemon logo footer" className="footer-logo" />
          <p className="footer-tagline">
            Little Lemon is a charming Mediterranean restaurant in Chicago focused on traditional recipes served with a modern twist.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/" aria-label="On Click">Home</Link></li>
            <li><Link to="/about" aria-label="On Click">About</Link></li>
            <li><Link to="/menu" aria-label="On Click">Menu</Link></li>
            <li><Link to="/booking" aria-label="On Click">Reservations</Link></li>
            <li><Link to="/order-online" aria-label="On Click">Order Online</Link></li>
            <li><Link to="/login" aria-label="On Click">Login</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <address className="footer-contact">
            <p>📍 123 Mediterranean Way, Chicago, IL 60601</p>
            <p>📞 <a href="tel:3125550199">(312) 555-0199</a></p>
            <p>✉️ <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
          </address>
        </div>

        {/* Opening Hours & Socials */}
        <div className="footer-col">
          <h4 className="footer-heading">Hours & Connect</h4>
          <div className="footer-hours">
            <p><strong>Mon – Fri:</strong> 11:00 AM – 10:00 PM</p>
            <p><strong>Sat – Sun:</strong> 10:00 AM – 11:00 PM</p>
          </div>
          <div className="footer-socials" aria-label="Social Media Links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘 Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸 Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦 Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Little Lemon Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
