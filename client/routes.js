import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import RepIndex from './components/RepIndex';


const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
});
//QUESTION: how to authenticate routes
export default (
  <Route>

    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path='/reps' component={RepIndex}/>
      <Route path='/login' component={Login} />
      <Route path='/sign_up' component={SignUp} />
      <Route path='/about_us' component={AboutUs} />
      <Route path='/contact_us' component={ContactUs} />
    </Route>

    <Route path="*" status={404} component={NoMatch} />
  </Route>
)
