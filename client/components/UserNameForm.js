import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { updateUser } from '../actions/user';

const UserNameForm = ({ dispatch, user }) => {

    let firstName;
    let lastName;
    if(Object.keys(user).length > 2) {
      let { first_name, last_name } = user;
      return(
        <div>
          <form className='center' onSubmit={ e => {
            e.preventDefault();
            dispatch(updateUser(firstName.value, lastName.value))
            }}>
            <div className="row">
              <input
              ref={ n => firstName = n}
              className="col s12 m6 offset-m1"
              type='text'
              placeholder='First Name'
              defaultValue={first_name}
              required
              autoFocus
              />
              <input
              ref={ n => lastName = n}
              className="col s12 m6 offset-m1"
              type='text'
              placeholder='Last Name'
              defaultValue={last_name}
              />
              <input className='btn blue-grey' type='submit'/>
            </div>
          </form>
        </div>
      )
    } else {
      return(
        <div>Loading</div>
      )
    }
}

const mapStateToProps = (state) => {
  return { user: state.auth }
}

export default connect(mapStateToProps)(UserNameForm);