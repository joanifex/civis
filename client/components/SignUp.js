import React from 'react';
import { Link } from 'react-router';
import { handleSignUp } from '../actions/auth';
import { connect } from 'react-redux';

class SignUp extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let first_name = this.refs.firstName.value;
    let last_name = this.refs.lastName.value;
    this.props.dispatch(handleSignUp(email, password, first_name, last_name));
  }

  render() {
    return(

      <div className="row">
         <div className="col s12 m10 offset-m1 l8 offset-l2">
           <div className="card grey lighten-4">
             <div className="card-content black-text">
               <span className="card-title">Sign Up For A New Account</span>
               <form onSubmit={ this.handleSubmit }>
                 <div className="row">
                   <div className="col s12">
                     <input ref='firstName' type="text" required placeholder="First Name"/>
                     <br />
                     <input ref='lastName' type="text" required placeholder="Last Name"/>
                     <br />
                     <i className="fa fa-envelope-o prefix" aria-hidden="true"></i>
                     <input ref='email' className="icon_prefix" type='text' required placeholder='Email' />
                     <br />
                    <input ref='password' type='password' required placeholder='Password' />
                    <br />
                    <input type='submit' className='btn' value='Sign Up' />
                    <Link to='/login' className='btn grey'>Cancel</Link>
                 </div>
               </div>
               </form>
             </div>
           </div>
         </div>
       </div>
    );
  }
}

export default connect()(SignUp);
