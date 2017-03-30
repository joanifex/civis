import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { updateUser } from '../actions/user';

class UserNameForm extends React.Component {
  state = {  firstName: "", lastName: "" }

  hasLoaded() {
    return Object.keys(this.props.user).length > 2 ? true : false
  }

  setNotLoading = () => {
    this.setState({ loading: false });
  }

  displayLoading() {
    return( <div><i className="fa fa-spinner fa-lg"></i></div> );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(updateUser(firstName.value, lastName.value))
  }

  handleChange = (e) => {
    let { target: { id, value }} = e;
    this.setState({ [id]: value });
  }

  displayForm = () => {
    let { firstName, lastName } = this.state;
    return(
      <div>
      <span className='card-title center'>
        Update user
      </span>
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
              <input className='btn ' type='submit'/>
            </div>
          </div>
        </form>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return(
      <div>
        { loading ? this.displayLoading() : this.displayForm() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.auth }
}

export default connect(mapStateToProps)(UserNameForm);
