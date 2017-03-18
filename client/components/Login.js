import React from 'react';
import { handleLogin } from '../actions/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
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
                  <input ref='email' type='text' required placeholder='Email' />
                  <br />
                  <input ref='password' type='password' required placeholder='Password' />
                  <br />
                  <input type='submit' className='btn' />
                  <Link to='/sign_up'className='btn grey'>Sign Up</Link>
                </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default connect()(Login);
