import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from '../actions/auth';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  logout = (e) => {
    e.preventDefault();
    this.props.dispatch(handleLogout());
  }

  componentDidMount() {
    $('.button-collapse').sideNav();
  }

  authLinks = () =>{
    let { auth } = this.props;
    if(auth && auth.isAuthenticated) {
      return(
        <li> <a href='#' onClick={this.logout}>Logout</a> </li>
      )
    } else {
      return(<li> <Link to='/login'>Login</Link> </li>);
    }
  }

  render() {
    return(
      <nav className='blue-grey'>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo'>Civis</Link>
          <a data-activates='mobile' className='button-collapse'>
            <i className='fa fa-bars'/>
          </a>
          <ul className='right hide-on-med-and-down'>
            <li><Link to='/'>Home </Link></li>
            <li><Link to='/about_us'>About Us</Link></li>
            <li><Link to='/contact_us'>Contact Us</Link></li>
            { this.authLinks() }
          </ul>
          <ul className='side-nav' id="mobile">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about_us'>About Us</Link></li>
            <li><Link to='/contact_us'>Contact Us</Link></li>
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
