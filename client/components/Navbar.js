import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { resetReps } from '../actions/reps';

class Navbar extends React.Component {
  logout = (e) => {
    e.preventDefault();
    this.props.dispatch(resetReps());
    this.props.dispatch(handleLogout());
    this.props.dispatch({ type: "USER_LOGOUT" });
    // TODO: this duplication is intentional. Probably a better way to do it
    this.props.dispatch(resetReps());
  }

  componentDidMount() {
    $('.button-collapse').sideNav({
      closeOnClick: true
    });
  }

  authLinks = () =>{
    let { auth } = this.props;
    if(auth && auth.isAuthenticated) {
      return(
        <div>
          <li><Link to='/account'>Account</Link></li>
          <li> <a href='#' onClick={this.logout}>Logout</a> </li>
        </div>
      );
    } else {
      return(<li> <Link to='/login'>Login</Link> </li>);
    }
  }

  render() {
    return(
      <nav className='blue-grey'>
        <div className='nav-wrapper' style={{ margin: '0 30px'}}>
          <Link to='/' className='brand-logo'>
            <img src='https://res.cloudinary.com/dx6ytyvvg/image/upload/c_scale,h_44/v1490061952/civis_logo_white_myb2hu.png'
            style={{ marginTop: '10px'}}
            />
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
