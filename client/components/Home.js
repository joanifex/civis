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
        <HomeCard />
        <ParallaxContainer />

        <div className='section white'>
          <div className="row container">
            <h3 className="header center">Register To Vote!</h3>
            <Link className="register to vote" target="_blank" href ="https://www.usvotefoundation.org/vote/voter-registration-absentee-voting.htm?gclid=Cj0KEQjwk-jGBRCbxoPLld_bp-IBEiQAgJaftZKlqzQIhh7SUEz7ELELmRqTowsXkDlVMfo8N90PkbgaAlTo8P8HAQ">Here!</Link>
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
