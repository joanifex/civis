import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class Home extends React.Component {

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
        console.log(data);
      });
    } else {
      // TODO: handle invalid zipcode
      console.log('invalid zipcode');
    }
  }

  render() {
    return(
      <div>
        <h2 className='center'>Civis</h2>
        <div className="row">
          <div className="col s12 m10 offset-m1 l8 offset-l2">
            <div className="card grey lighten-4">
              <div className="card-content">
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
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default connect()(Home);
