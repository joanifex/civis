import React from 'react';
import { Link } from 'react-router';
import { handleSignUp } from '../actions/auth';
import { connect } from 'react-redux';

class SignUp extends React.Component {
  // TODO: rewrite with controller inputs: refactor refs

  handleSubmit = (e) => {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let confirmPassword = this.refs.confirmPassword.value;
    let firstName = this.refs.firstName.value;
    let lastName = this.refs.lastName.value;
    if ( password === confirmPassword )  {
      this.props.dispatch(handleSignUp(email, password, confirmPassword, firstName, lastName));
    } else {
      this.refs.confirmPassword.setCustomValidity("Passwords Don't Match");
    }
  }

  render() {
    return(
      <div className="row">
         <div className="col s12 m10 offset-m1 l8 offset-l2">
           <div className="card grey lighten-4">
             <div className="card-content black-text">
               <span className="card-title">Sign Up For A New Account</span>
               <form id='sign_up' onSubmit={ this.handleSubmit }>
                 <div className="row">
                   <div className="col s12">

                     <div className="input-field">
                       <i className="fa fa-user-circle-o prefix"></i>
                       <input ref='firstName' className="icon_prefix" type='text' required placeholder='First Name' />
                     </div>

                     <div className="input-field">
                       <i className="fa fa-user-circle-o prefix"></i>
                       <input ref='lastName' className="icon_prefix" type='text' required placeholder='Last Name' />
                    </div>

                     <div className="input-field">
                       <i className="fa fa-envelope-o prefix"></i>
                       <input ref='email' className="icon_prefix" type='email' required placeholder='Email' />
                     </div>


                     <div className="input-field">
                       <i className="fa fa-unlock-alt prefix"></i>
                       <input ref='password' className="icon_prefix" type='password' required placeholder='Password' />
                     </div>

                     <div className="input-field">
                       <i className="fa fa-unlock-alt prefix"></i>
                       <input ref='confirmPassword' className="icon_prefix" type='password' required placeholder='confirm Password' />
                     </div>

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
