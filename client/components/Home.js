import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return(
      <div>
        <h1 className='center'>Welcome to Civis</h1>
        <form className='center' onSubmit={this.handleSubmit}>
          <h5>Enter Your Zip Code to find your Representatives</h5>
          <input type='text-box' required placeholder='Zip Code' ref='zipcode' autoFocus/>
          <br />
          <input className='center btn' type='submit' />
        </form>
      </div>
  )
 }
};



export default connect()(Home);
