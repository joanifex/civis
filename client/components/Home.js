import React from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import HomeCard from './HomeCard';
import AboutUs from './AboutUs';
import Footer from './Footer';
import ParallaxContainer from './ParallaxContainer';
import About from './About';
import HomeLinks from './HomeLinks';


class Home extends React.Component {

  componentDidMount() {
    $('.parallax').parallax();
    $('.collapsible').collapsible();
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
        <HomeLinks />
          <ParallaxContainer />
        <div className='section grey lighten-4'>
          <div className="row">
           <div>
            <ul className='collapsible' data-collapsible='accordion'>
              <li>
              <div className='center collapsible-header grey lighten-4'><h2>About Us</h2></div>
              <div className='collapsible-body'><About /></div>
             </li>
            </ul>
          </div>
        </div>
      </div>
       <Footer />
    </div>
    )
  }
};

export default connect()(Home);
