import React from 'react';
import './Footer.css'; // Create a CSS file for styling, named Footer.css

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <a href="/contact" className="contact-link">
          Contact Us
        </a>
      </div>
    </footer>
  );
}

export default Footer;
