import React from 'react';
import { browserHistory } from 'react-router';

// TODO: refactor into presentational component
class ZipcodeForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let address = this.address.value
    $.ajax({
      type: 'PATCH',
      url: '/api/user/address',
      dataType: 'JSON',
      data: { address }
    }).done(data => {
      Materialize.toast('Address Updated', 3000);
      this.props.zipcodeEntered();
    }).fail( data => {
      Materialize.toast('Invalid zipcode, Please try again', 3000);
    });
  }

  render(){
    return(
      <div>
        <span className='card-title center'>
          Enter your zip code to see your elected officials.
        </span>
        <form className='center' onSubmit={this.handleSubmit}>
          <div className="row">
            <input
             ref={ n => this.address = n}
             className="col s12 m6 offset-m1"
             type='number'
             placeholder='Zip code...'
             required
             autoFocus
            />
            <input className='btn blue-grey' type='submit'/>
          </div>
        </form>
      </div>
    );
  }
}

export default ZipcodeForm;
