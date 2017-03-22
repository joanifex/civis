import React from 'react';
import { Link } from 'react-router';
import ZipcodeForm from './ZipcodeForm';
import UserNameForm from './UserNameForm';

class UserProfile extends React.Component {

  componentWillMount() {
    $.ajax({
      type: 'GET',
      URL: '/about'
    }).done ( user => {
      this.setState({ user })
    }).fail ( data => {
      console.log(data);
    });
  } 

// define user as state- why is this not defined in line 13?
// welcome w/ full_name method (in model and show_user.json.jbuilder)
// show current user's info (first_name, last_name, and zipcode)
// add a change password form
  render() {
    return(
      <div>
        <h3>Welcome, {this.user}</h3>
        <h5>Update Your User Name:</h5>
        <UserNameForm />
        <h5>Update Your Zipcode:</h5>
        <ZipcodeForm />
      </div>
    )
  }
}


export default UserProfile;