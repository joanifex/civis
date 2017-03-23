import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import AddressForm from './AddressForm';
import UserNameForm from './UserNameForm';
import { updateUser } from '../actions/user';

class UserProfile extends React.Component {


// TODO: welcome w/ full_name method (in model and show_user.json.jbuilder)
// TODO: add a change password form
  render() {
    let user = this.props.user
    return(
      <div>
        <h3>Welcome, {user.first_name} {user.last_name} </h3>
        <h5>Update Your Zipcode:</h5>
        <AddressForm />
        <h5>Update Your User Name:</h5>
        <UserNameForm user={user} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.auth }
}

export default connect(mapStateToProps)(UserProfile);
