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
          <div className="row">
            <div className="col s12 m10 offset-m1 l8 offset-l2">
              <div className="card grey lighten-4">
                <div className="card-content black-text">
                  <span className="card-title">Login</span>
                    <form className='center' onSubmit={ e => {
                      e.preventDefault();
                      dispatch(updateUser(firstName.value, lastName.value))
                      }}>

                      <div className="row ">
                        <div className='input-field'>
                          <i className='fa fa-user-circle-o prefix'></i>
                          <input
                          ref={ n => firstName = n}
                          className="icon_prefix"
                          type='text'
                          placeholder='First Name'
                          defaultValue={first_name}
                          required
                          autoFocus
                          />
                        </div>

                        <div className='input-field'>
                          <i className='fa fa-user-circle-o prefix'></i>
                          <input
                          ref={ n => lastName = n}
                          className="icon_prefix"
                          type='text'
                          placeholder='Last Name'
                          defaultValue={last_name}
                          />
                          
                          <input className='btn blue-grey' type='submit'/>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
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