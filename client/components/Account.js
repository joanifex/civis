import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import HomeCard from './HomeCard';
import UserNameForm from './UserNameForm';
import { updateUser, deleteUser } from '../actions/user';

class UserProfile extends React.Component {

// TODO: add a change password form
  deleteUser = () => {
    const { dispatch, user, history } = this.props
    if (confirm('Do you really want to delete your User Profile?'))
      dispatch(deleteUser(user.id, history));
  }

  // TODO: Whiteboard and redesign. Looks bad.
  render() {
    const { user } = this.props
    return(
      <div>
        <div className="row">
          <div className="col s12 m10 offset-m1 l8 offset-l2">
            <div className="card grey lighten-4">
              <div className="card-content black-text">
                {/* TODO: User name not showing after signup. Check signup action */}
                <h3 className="center">{user.full_name} </h3>
                <HomeCard />
                <br />
                <UserNameForm user={user} />
                <div className="center">
                  <button className='btn blue-grey ' onClick={this.deleteUser} >
                    Delete User Profile
                  </button>
                    &nbsp;
                  <Link to={'/'} className='btn blue-grey'>Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.auth }
}

export default connect(mapStateToProps)(UserProfile);
