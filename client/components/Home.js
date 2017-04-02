import React from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import HomeCard from './HomeCard';
import AboutUs from './AboutUs';
import Footer from './Footer';
import About from './About';
import HomeLinks from './HomeLinks';
import { homeCardStyle, accordian } from './styles.scss';

class Home extends React.Component {

  componentDidMount() {
    $('.parallax').parallax();
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
          <ul className='collapsible' data-collapsible='accordion'>
            <li>
              <div className='center collapsible-header grey lighten-3'>
                <h3 className={accordian}>Read More</h3>
              </div>
              <div className='collapsible-body'><About /></div>
            </li>
          </ul>
          <Footer />
        </div>
      )
    }
  };

export default connect()(Home);
