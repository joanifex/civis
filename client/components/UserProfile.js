import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import UserNameForm from './UserNameForm';
import { deleteUser } from '../actions/user';


class UserProfile extends React.Component {
  componentDidMount() {
    $('.collapsible').collapsible();
    $('.modal').modal();
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
                  {/* <button className='btn-flat' onClick={this.deleteUser} >
                    Delete Account
                  </button> */}
              <div className="center">
                <a className="waves-effect waves-light btn-flat" href="#modal1">Delete Account</a>
                <div id="modal1" className="modal">
                  <div className="modal-content">
                    <h4>Delete Account</h4>
                    <p>Are you sure you want to delete your account with Civis?</p>
                  </div>
                  <div className="modal-footer">
                    <a onClick={ () => this.props.dispatch(deleteUser(user.id)) }
                      className="modal-action modal-close waves-effect waves-blue btn-flat">Yes</a>
                    <a href="#!"
                      onClick={() => $('#modal1').modal('close') }
                      className="modal-action .modal-close waves-effect waves-blue btn-flat">No</a>
                  </div>
                </div>
              </div>
            </div>
            </li>
          </ul>
      </div>
    </div>
    );
  }
}

export default connect()(UserProfile);
