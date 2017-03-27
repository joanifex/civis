import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { updateUser } from '../actions/user';

class UserNameForm extends React.Component {
  state = { firstName: "", lastName: "" }

  hasLoaded() {
    return Object.keys(this.props.user).length > 2 ? true : false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(updateUser(firstName.value, lastName.value))
  }

  handleChange = (e) => {
    let { target: { id, value }} = e;
    this.setState({ [id]: value });
  }

  render() {
    let { firstName, lastName } = this.state;
    return(
      <div>
        { this.hasLoaded() ?
          <div>
            <p>Update Your User Name:</p>
            <form className='center' onSubmit={this.handleSubmit} >
              <div className="row">
                <div className='input-field'>
                  <i className='fa fa-user-circle-o prefix'></i>
                  <label className='input-label'>First Name</label>
                  <input
                    id="firstName"
                    onChange={this.handleChange}
                    className="icon_prefix"
                    type='text'
                    value={firstName}
                    required
                    autoFocus
                  />
                </div>
                <div className='input-field'>
                  <i className='fa fa-user-circle-o prefix'></i>
                  <label className='input-label'>Last Name</label>
                  <input
                    id="lastName"
                    onChange={this.handleChange}
                    className="icon_prefix"
                    type='text'
                    value={lastName}
                    required
                  />
                  <input className='btn blue-grey' type='submit'/>
                </div>
              </div>
            </form>
          </div>
          :
          <div>Loading</div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.auth }
}

export default connect(mapStateToProps)(UserNameForm);
