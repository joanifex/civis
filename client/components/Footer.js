import React from 'react';
import { Link } from 'react-router';
import { footer, footerText, civisBlue } from './styles.scss';

const Footer = () => (
  <div>
    <footer className={civisBlue}>
      <div className="footer-copyright white-text">
        <div className="container" style={{ paddingTop: '20px' }}>
          © 2017 Civis
        </div>
      </div>
    </footer>
  </div>
)

export default Footer;
