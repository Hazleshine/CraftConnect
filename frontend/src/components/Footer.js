// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/faqs">FAQs</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com">FB</a>
        <a href="https://twitter.com">TW</a>
        <a href="https://linkedin.com">LI</a>
      </div>
    </footer>
  );
};

export default Footer;