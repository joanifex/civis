import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import HomeCard from './HomeCard';
import { updateUser, deleteUser } from '../actions/user';

class Account extends React.Component {

  deleteUser = () => {
    const { dispatch, user, history } = this.props
    if (confirm('Do you really want to delete your User Profile?'))
      dispatch(deleteUser(user.id, history));
  }

  render() {
    const { user } = this.props
    return(
      <div>
        <div className="row">
          <div className="col s12 l4">
            <UserProfile user={user}/>
          </div>
          <div className="col s12 l8">
            <HomeCard />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.auth }
}

export default connect(mapStateToProps)(Account);
