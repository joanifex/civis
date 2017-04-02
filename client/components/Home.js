import React from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import HomeCard from './HomeCard';
import AboutUs from './AboutUs';
import Footer from './Footer';
import About from './About';
import HomeLinks from './HomeLinks';
import { homeCardStyle, accordion, civisGradient } from './styles.scss';
import civis from '../images/civis-white.svg';

class Home extends React.Component {

  componentDidMount() {
    $('.collapsible').collapsible();
  }

  render() {
    return(
      <div>
        <div className = "row" style={{margin: "60px 0"}}>
          <div className="col s12 m10 offset-m1 l8 offset-l2">
            <HomeCard />
          </div>
        </div>
          <HomeLinks />
          <br />
          <div className='section'>
          <ul className='collapsible' data-collapsible='accordion'>
            <li>
              <div className={`${civisGradient} ${accordion} center collapsible-header grey lighten-3`}>
                Read More
              </div>
              <div className='collapsible-body'><About /></div>
            </li>
          </ul>
          </div>
          <br />
          <Footer />
        </div>
      )
    }
  };

export default connect()(Home);
