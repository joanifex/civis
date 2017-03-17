import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import HomeCard from './HomeCard';

class Home extends React.Component {

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
