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
    this.props.dispatch(updateReps());
  }

  componentDidUpdate() {
    this.props.dispatch(clearFlash());
  }

  render() {
    let { auth, children } = this.props;

    return(
      <div>
        <Navbar auth={auth} />
        <div style={{ marginBottom: '30px' }}>
          <FlashMessage />
        </div>
        <div className='container'>
          { children }
        </div>
      </div>
    );
  }
}

export default connect()(App);
