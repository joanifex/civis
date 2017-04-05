import React from 'react';

import AboutCivis from './AboutCivis';
import AboutApis from './AboutApis';
import AboutUs from './AboutUs';

import { aboutComponent } from './styles.scss';

const About = () => (
  <div className={aboutComponent}>
    <div className='container'>
      <AboutCivis />
      <br />
      <AboutApis />
      <AboutUs />
    </div>
  </div>
)

export default About;
