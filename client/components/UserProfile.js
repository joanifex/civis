import React from 'react'
import { Link } from 'react-router';
import UserNameForm from './UserNameForm';


class UserProfile extends React.Component {
  componentDidMount() {
    $('.collapsible').collapsible();
  }

  render(){
    let { user } = this.props;
    return(
      <div className="card grey lighten-4">
        <div className="card-content black-text">
          <h3 className="center">{`${user.first_name} ${user.last_name}`} </h3>
          <br />

          <ul className="collapsible" data-collapsible="accordion">
            <li>
              <div className="collapsible-header">
                <i className="black-text fa fa-cog fa-2x"></i>Settings
              </div>
              <div className="collapsible-body">
                <UserNameForm user={user} />
                <div className="center">
                  <button className='btn blue-grey ' onClick={this.deleteUser} >
                    Delete Account
                  </button>
                    &nbsp;
                  <Link to={'/'} className='btn blue-grey'>Home</Link>
                </div>
              </div>
            </li>
          </ul>

        </div>
      </div>
    );
  }
}

export default UserProfile
