import React from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import HomeCard from './HomeCard';
import AboutUs from './AboutUs';
import Footer from './Footer';
import About from './About';
import HomeLinks from './HomeLinks';
import { homeCardStyle, aboutBar, civisGradient, btnStyle, backgroundImage } from './styles.scss';
import civis from '../images/civis-white.svg';

class Home extends React.Component {
  state = { showMore: false }

  componentDidMount() {
    $('.collapsible').collapsible();
  }

  toggleAbout = () => {
    this.setState( (state) => {
      return { showMore: !state.showMore }
    })
  }

  render() {
    return(
      <div className={backgroundImage}>
        <div>
        <div className="row" style={{padding: "60px 0"}}>
          <div className="col s12 m10 offset-m1 l8 offset-l2">
            <HomeCard />
          </div>
        </div>
          <HomeLinks />
          <br />
          <div className='section'>
            <div className={`${civisGradient} ${aboutBar} center collapsible-header grey lighten-3 white-text`}>
              Be a Better Citizen
              <br />
              <br />
              <button className={`${btnStyle} btn btn-large btn-outline center hoverable transparent`} onClick={ this.toggleAbout }>
                { this.state.showMore ? 'Close' : 'Read More' }
              </button>
            </div>
            { this.state.showMore && <About /> }
          </div>
        </div>
          <br />
          <Footer />
        </div>
      )
    }
  };

export default connect()(Home);
