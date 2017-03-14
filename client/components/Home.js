import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class Home extends React.Component {
//client side validation to make sure zipcode is valid
  handleSubmit = (e) => {
    e.preventDefault();
    let zipcode = this.refs.zipcode.value
    $.ajax({
      type: 'PATCH',
      url: '/api/user/zipcode',
      dataType: 'JSON',
      data: {user: {zipcode}}
    }).done(data => {
      browserHistory.push('/reps');
    }).fail( data => {
      console.log(data);
    });
  }



  render() {
    return(
      <div>
        <h1 className='center'>Welcome to Civis</h1>
        <form className='center' onSubmit={this.handleSubmit}>
          <h5>Enter Your Zip Code to find your Representatives</h5>
          <input type='number' required placeholder='Zip Code' ref='zipcode' autoFocus/>
          <br />
          <input className='center btn' type='submit' />
        </form>
      </div>
  )
 }
};



export default connect()(Home);
