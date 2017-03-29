import React from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import HomeCard from './HomeCard';
import AboutUs from './AboutUs';
import Footer from './Footer';
import ParallaxContainer from './ParallaxContainer';
import vote_360 from '../images/vote_360.png';
import election_480 from '../images/election_480.png';
import { aboutpic } from './styles.scss';
import About from './About';


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
        <div className='section grey lighten-4'>
          <div className="row container">
            <div className='col s12 m6 l4'>
            <h5 className="center">Sign Up!</h5>
            <br />
            <a className="center" target="_blank"
                  href ="https://www.usvotefoundation.org/vote/voter-registration-absentee-voting.htm?gclid=Cj0KEQjwk-jGBRCbxoPLld_bp-IBEiQAgJaftZKlqzQIhh7SUEz7ELELmRqTowsXkDlVMfo8N90PkbgaAlTo8P8HAQ"
                ><img className={aboutpic} src={vote_360}/></a>
          </div>

          <div className='col s12 m6 l4'>
          <h5 className="center">2018 Election</h5>
          <br />
          <a className="center" target="_blank"
                href ="https://ballotpedia.org/United_States_Congress_elections,_2018"
              ><img className={aboutpic} src={election_480}/></a>
        </div>

          <div className='col s12 m6 l4'>
          <h5 className="center">Coming Election</h5>
          <br />
          <a className="center" target="_blank"
                href ="https://ballotpedia.org/United_States_Congress_elections,_2018"
              ><img className={aboutpic} src={election_480}/></a>
            </div>
          </div>
        </div>
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
