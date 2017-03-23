import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ZipcodeForm from './ZipcodeForm';
import UserNameForm from './UserNameForm';
import { updateUser, deleteUser } from '../actions/user';

class UserProfile extends React.Component {

// TODO: welcome w/ full_name method (in model and show_user.json.jbuilder)
// TODO: add a change password form

  render() {
    let user = this.props.user
    return(
      <div>
        <div>
          <h3>Welcome, {user.full_name} </h3>
          <h5>Update Your Zipcode:</h5>
          <ZipcodeForm />
          <h5>Update Your User Name:</h5>
          <UserNameForm user={user} />
        </div>
        <div>
          <button
            onClick={ () => { 
              if (confirm('Do you really want to delete your User Profile?'))
                dispatch(deleteUser(user.id, this.props.history)) 
            }}
            className='btn blue-grey'
          >
          Delete User Profile
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.auth }
}

export default connect(mapStateToProps)(UserProfile);