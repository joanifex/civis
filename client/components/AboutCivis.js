import React from 'react';
import civis from '../images/civis.svg';
import appStore from '../images/app_store.svg';

const AboutCivis = () => (
  <div>
    <img src={civis} style={{height: "80px", display: "block", margin: "0 auto", paddingTop: "30px"}} />
    <br />
    <p>
      Civis is a modern web application that makes it easy to stay informed and in touch with your legislators.
    </p>
    <p>
      After identifying your location, Civis will identify your congressional representatives from our database. Civis will give you all you need to know about your legislators by combining information from ProPublica, Wikipedia, the New York Times, Twitter, and Google.
    </p>
    <p>
      In addition, by signing up, you can receive news alerts whenever your representatives are in the news, so that you can stay informed and be a better citizen. Civis is also available as an iOS and Android native app.
    </p>
    <a
      href="https://github.com/wrightianb/civis-native"
      target="_blank"
      className="right"
    >
      <img src={appStore}/>
    </a>
  </div>
)

export default AboutCivis;
