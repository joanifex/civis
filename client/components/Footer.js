import React from 'react';
import { Link } from 'react-router';
import { footer, footerText } from './styles.scss';

const Footer = () => (
  <div>
    <footer className='blue-grey white-text'>
      <div className="footer-copyright">
        <div className="container">
          © 2017 Civis
          <div className= {`${footerText} right`} style={{ verticalAlign: 'middle' }}>
            <Link to='/about'>About</Link>
          </div>
        </div>
      </div>
    </footer>
  </div>
)

export default Footer;
