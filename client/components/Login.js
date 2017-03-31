import React from 'react';
import { handleLogin } from '../actions/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { civisBlue } from './styles.scss';

class Login extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    this.props.dispatch(handleLogin(email, password));
  }

  render() {
    return(
      <div className="row">
        <div className="col s12 m10 offset-m1 l8 offset-l2">
          <div className="card grey lighten-4">
            <div className="card-content black-text">
              <span className="card-title">Login</span>
                <form onSubmit={ this.handleSubmit }>
                  <div className="input-field">
                    <i className="fa fa-envelope-o prefix"></i>
                    <input id='email' ref='email' className="icon_prefix" type='email' required placeholder='Email' />
                  </div>
                  <div className="input-field">
                    <i className="fa fa-unlock-alt prefix"></i>
                    <input ref='password' className="icon_prefix" type='password' required placeholder='Password' />
                  </div>
                  <input type='submit' className={` waves-effect waves-light btn ${civisBlue}`} />
                  <Link to='/sign_up' className='waves-effect waves-teal btn-flat right'>
                    Sign Up
                  </Link>
                </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default connect()(Login);
