import React from 'react'
import { Link } from 'react-router';
import UserNameForm from './UserNameForm';


class UserProfile extends React.Component {
  render(){
    let { user } = this.props;
    return(
      <div className="card grey lighten-4">
        <div className="card-content black-text">
          <h3 className="center">{`${user.first_name} ${user.last_name}`} </h3>
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
    );
  }
}

export default UserProfile
