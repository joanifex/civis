import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { refreshLogin } from '../actions/auth';
import FlashMessage from '../components/FlashMessage';
import { clearFlash } from '../actions/flash';
import { updateReps } from '../actions/reps';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(refreshLogin());
  }

  componentDidUpdate() {
    this.props.dispatch(clearFlash());
  }

  render() {
    let { auth, children } = this.props;

    return(
      <div>
        <Navbar auth={auth} />
        <div>
          <FlashMessage />
        </div>
        <div>
          { children }
        </div>
      </div>
    );
  }
}

export default connect()(App);
