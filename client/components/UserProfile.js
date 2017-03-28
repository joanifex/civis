import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import AddressForm from './AddressForm';
import UserNameForm from './UserNameForm';
import { updateUser, deleteUser } from '../actions/user';

class UserProfile extends React.Component {

// TODO: add a change password form
  deleteUser = () => {
    if (confirm('Do you really want to delete your User Profile?'))
      this.props.dispatch(deleteUser(this.props.user.id, this.props.history));
  }

  render() {
    let user = this.props.user
    return(
      <div>
        <div className="row">
          <div className="col s12 m10 offset-m1 l8 offset-l2">
            <div className="card grey lighten-4">
              <div className="card-content black-text">
                <h3 className="center">{user.full_name} </h3>
                <AddressForm />
                <br />
                <UserNameForm user={user} />
                <button onClick={this.deleteUser} className='btn blue-grey'>
                  Delete User Profile
                </button>
                <br />
                <Link to={'/'} className='btn blue-grey'>Home</Link>
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
