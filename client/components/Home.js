import React from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import HomeCard from './HomeCard';
import AboutUs from './AboutUs';
import Footer from './Footer';
import ParallaxContainer from './ParallaxContainer';


class Home extends React.Component {

  componentDidMount() {
    $('.parallax').parallax();
  }

  render() {
    return(
      <div>
        <h2 className='center'>Civis</h2>
        <div className="row">
          <div className="col s12 m10 offset-m1 l8 offset-l2">
            <div className="card grey lighten-4">
              <div className="card-content">
                <HomeCard />
              </div>
            </div>
          </div>
        </div>
        <ParallaxContainer />
        <div className='section white'>
          <div className="row container">
            <h2 className="header">Parallax</h2>
            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
          </div>
        </div>
        <div className='section white'>
          <div className="row">
            <div><AboutUs /></div>
          </div>
        </div>

       <ParallaxContainer />
       <Footer />
     </div>
    )
  }
};

export default connect()(Home);
