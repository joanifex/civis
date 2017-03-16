import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import App from './containers/App';

// Components
import NoMatch from './components/NoMatch';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import RepIndex from './components/RepIndex';
import Rep from './components/Rep';
import About from './components/About';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
});

//QUESTION: how to authenticate routes
export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={UserIsAuthenticated(Home)} />
      <Route path='/rep/:id' component={Rep} />
      <Route path='/reps' component={RepIndex}/>
      <Route path='/login' component={Login} />
      <Route path='/sign_up' component={SignUp} />
      <Route path='/about_us' component={AboutUs} />
      <Route path='/contact_us' component={ContactUs} />
      <Route path='/about' component={About} />
    </Route>

    <Route path="*" status={404} component={NoMatch} />
  </Route>
)
