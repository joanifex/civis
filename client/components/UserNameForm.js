import React from 'react';
import { browserHistory } from 'react-router';

class UserNameForm extends React.Component {
  
  handleSubmit = (e) => {
    e.preventDefault();
    let firstName = this.first_name.value
    let lastName = this.last_name.value
    
      $.ajax({
        type: 'PATCH',
        // TODO: what is the route for this?
        url: '/api/user/',
        dataType: 'JSON',
        data: {user: {}}
      }).done(data => {
        Materialize.toast('User Name Updated', 3000);
        this.props.zipcodeEntered();
      }).fail( data => {
        console.log(data);
      });
    
  }
  
  render() {
    return(
      <div>
        <form className='center' onSubmit={this.handleSubmit}>
          <div className="row">
            <input
             ref={ n => this.first_name = n}
             className="col s12 m6 offset-m1"
             type='text'
             placeholder='First Name'
             required
             autoFocus
            />
            <input
             ref={ n => this.last_name = n}
             className="col s12 m6 offset-m1"
             type='text'
             placeholder='Last Name'
            />
            <input className='btn blue-grey' type='submit'/>
          </div>
        </form>
      </div>
    )
  }
}

export default UserNameForm;