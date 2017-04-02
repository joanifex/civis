import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { handleLogout } from '../actions/auth';
import { resetReps } from '../actions/reps';
import { civisGradient } from './styles.scss';
import civis from '../images/civis-white.svg';

class Navbar extends React.Component {
  logout = (e) => {
    e.preventDefault();
    browserHistory.push('login');
    this.props.dispatch(handleLogout());
    this.props.dispatch(resetReps());
  }

  componentDidMount() {
    $('.button-collapse').sideNav({
      closeOnClick: true
    });
  }

  authLinks = () =>{
    const { auth } = this.props;
    if( auth && auth.isAuthenticated ) {
      return(
        <div>
          <li><Link to='/account'>Account</Link></li>
          <li> <a href='#' onClick={this.logout}>Logout</a> </li>
          <li> <Link to="/">Home</Link> </li>
        </div>
      );
    } else {
      return(
        <div>
          <li> <Link to='/sign_up'>Sign Up</Link> </li>
          <li> <Link to='/login'>Login</Link> </li>
          <li> <Link to="/">Home</Link> </li>
        </div>
      );
    }
  }

  render() {
    return(
      <nav className={civisGradient}>
        <div className='nav-wrapper' style={{ margin: '0 30px'}}>
          <Link to='/' className='brand-logo'>
            <img src={civis} style={{height: "50px", marginTop: "5px"}}/>
          </Link>
          <a data-activates='mobile' className='button-collapse'>
            <i className='fa fa-bars'/>
          </a>
          <ul className='right hide-on-med-and-down'>
            { this.authLinks() }
          </ul>
          <ul className='side-nav' id="mobile">
            { this.authLinks() }
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Navbar);
