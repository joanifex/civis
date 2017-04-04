import React from 'react';
import { Link } from 'react-router';
import { footer, civisBlue } from './styles.scss';

const Footer = () => (
  <div>
    <footer className={`${civisBlue} page-footer`}>
      <div className={`${civisBlue} center`}>
        <h5 className="white-text">APIs</h5>
        <div className='row' style={{marginBottom: '0', paddingBottom: '30px'}}>
          <a className='offset-m1 white-text col s12 m2'  href="https://www.propublica.org/datastore/api/propublica-congress-api"
          >ProPublica
          </a>
          <a className='white-text col s12 m2'
          href="https://developer.nytimes.com/"
          >New York Times
          </a>
          <a className='white-text col s12 m2'  href="https://www.mediawiki.org/wiki/API:Main_page"
          >Wikipedia
          </a>
          <a className='white-text col s12 m2'
          href="https://dev.twitter.com/rest/public"
          >Twitter
          </a>
          <a className='white-text col s12 m2'
          href="https://developers.google.com/maps/"
          >Google Maps
          </a>
        </div>
      </div>
    </footer>
  </div>
)

export default Footer;
