import React from 'react';
import { browserHistory } from 'react-router';

class ZipcodeForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let zipcode = this.zipcode.value
    if (/^\d{5}(-\d{4})?$/.test(zipcode)) {
      $.ajax({
        type: 'PATCH',
        url: '/api/user/zipcode',
        dataType: 'JSON',
        data: {user: {zipcode}}
      }).done(data => {
        browserHistory.push('/reps');
      }).fail( data => {
        Materialize.toast('Invalid zipcode, Please try again', 3000);
      });
    } else {
      Materialize.toast('Please try again.' ,3000);
    }
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
             ref={ n => this.zipcode = n}
             className="col s12 m6 offset-m1"
             type='number'
             placeholder='Zip code...'
             // TODO: fix input pattern
             pattern="(\d{5}([\-]\d{4})?)"
             required
             autoFocus
            />
            <input className='btn' type='submit'/>
          </div>
        </form>
      </div>
    );
  }
}

export default ZipcodeForm;
