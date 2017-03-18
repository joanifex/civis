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
    $('.button-collapse').sideNav({
      closeOnClick: true
    });
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
        <div className='nav-wrapper' style={{ margin: '0 30px'}}>
          <Link to='/' className='brand-logo'>Civis</Link>
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
