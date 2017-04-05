import React from 'react';

const AboutApis = () => (
  <div>
    <h5>APIs</h5>
    <div className='row' style={{marginBottom: '0', paddingBottom: '30px'}}>
      <a
        className='col s12 m2'  href="https://www.propublica.org/datastore/api/propublica-congress-api"
        target='_blank'
      >
        ProPublica
      </a>
      <a
        className='col s12 m2'
        href="https://developer.nytimes.com/"
        target='_blank'
      >
        New York Times
      </a>
      <a
        className='col s12 m2'
        href="https://www.mediawiki.org/wiki/API:Main_page"
        target='_blank'
      >
        Wikipedia
      </a>
      <a
        className='col s12 m2'
        href="https://dev.twitter.com/rest/public"
        target='_blank'
      >Twitter
      </a>
      <a
        className=' col s12 m2'
        href="https://developers.google.com/maps/"
        target='_blank'
      >Google Maps
      </a>
      <a
        className=' col s12 m2'
        href="https://developers.google.com/maps/"
        target='_blank'
      >Google Civic
      </a>
    </div>
  </div>
)

export default AboutApis;
