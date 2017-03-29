import React from 'react';
import { Link } from 'react-router';
import { footer, footerText } from './styles.scss';

const Footer = () => (
  <div>
    <footer className='blue-grey white-text'>
      <div className="footer-copyright">
        <div className="container" style={{ paddingTop: '20px' }}>
          © 2017 Civis
        </div>
      </div>
    </footer>
  </div>
)

export default Footer;
