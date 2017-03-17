import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import HomeCard from './HomeCard';
import AboutUs from './AboutUs';

class Home extends React.Component {

  componentDidMount() {
    $('.parallax').parallax();
  }

  render() {
    return(
      <div>
        <h2 className='center'>Civis</h2>
        <HomeCard />
      </div>
    )
  }
};

export default connect()(Home);
