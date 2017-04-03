import React from 'react';
import AboutUs from './AboutUs';
import appStore from '../images/app_store.svg';
import civis from '../images/civis.svg';

const About = () => (
  <div className='container'>
    <img src={civis} style={{height: "80px", display: "block", margin: "30px auto 0 auto"}} />
    <br />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis pellentesque magna. Fusce faucibus, lacus at tristique consectetur, tortor nibh ornare mi, lobortis suscipit ex libero tincidunt tortor. Nam blandit dolor ante, ut pulvinar nunc aliquam ac. Proin imperdiet, lacus ac commodo dignissim, libero velit consequat enim, scelerisque blandit risus mauris at quam. Sed a tincidunt massa, vitae egestas justo. Nam fringilla pulvinar ipsum, ac efficitur nisl aliquam vitae. Morbi gravida ut sem eu fringilla.
      <br />
      Duis ullamcorper nulla ut diam pharetra, sed sodales elit sodales. Proin sed ultrices felis. Integer et tellus magna. Suspendisse molestie, arcu ac sodales imperdiet, risus nisi pharetra felis, sed molestie enim mi et mauris. Nam quis aliquet risus, eget commodo sem. Phasellus posuere, ligula a accumsan hendrerit, massa justo semper risus, a volutpat leo velit sit amet erat. Proin lacinia tellus ut nunc vestibulum, in placerat felis scelerisque. Proin posuere ligula eu nunc maximus, sed rutrum mauris eleifend. Nunc in justo eros. Vivamus ut egestas urna, in tristique erat. Nulla porta libero at tincidunt efficitur. Duis tincidunt erat vel egestas porttitor.
    </p>
    <a href="https://github.com/wrightianb/civis-native" target="_blank">
      <img src={appStore} />
    </a>
    <AboutUs />
  </div>
)

export default About;
