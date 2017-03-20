import React from 'react';
import { homeImg } from './styles.scss';

const ParallaxContainer = () => (
  <div>
    <div className="parallax-container">
      <div className="parallax">
        <img className={homeImg}
        src="https://c.tribune.com.pk/2016/12/1252658-protests-1480799399-425-160x120.jpg"
        />
      </div>
    </div>
  </div>
)

export default ParallaxContainer;