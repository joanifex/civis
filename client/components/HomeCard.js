import React from 'react';
import { connect } from 'react-redux';
import { updateReps, resetReps } from '../actions/reps'
import AddressForm from './AddressForm';
import RepIndex from './RepIndex';

class HomeCard extends React.Component {
  state = { loading: true, showingReps: false, changingReps: false };

  componentDidMount() {
    if ( this.hasLoaded() )
      this.setNotLoading();
    if ( this.hasReps() )
      this.setShowingReps();
  }

  componentDidUpdate() {
    let { loading, showingReps, changingReps } = this.state;
    if ( loading && this.hasLoaded() )
      this.setNotLoading();
    if ( showingReps && changingReps )
      this.setNotShowingReps();
    else if ( !showingReps && this.hasReps() && !changingReps )
      this.setShowingReps();
    if ( showingReps && !this.hasReps() )
      this.setNotShowingReps();
  }

  hasLoaded = () => {
    return this.props.reps[0] === 'loading' ? false : true;
  }

  hasReps = () => {
    return !this.state.loading && this.props.reps.length !== 0 ? true : false;
  }

  setNotLoading = () => {
    this.setState({ loading: false });
  }

  setShowingReps = () => {
    if ( this.state.changingReps )
      this.setState({ changingReps: false });
    this.setState({ showingReps: true });
  }

  setNotShowingReps = () => {
    this.setState({ showingReps: false });
  }

  setChangingReps = () => {
    this.setState({ changingReps: true });
  }

  displayLoading() {
    return( <div><i className="fa fa-spinner fa-lg"></i></div> );
  }

  displayContent = () => {
    let { showingReps, changingReps } = this.state
    if (this.state.showingReps) {
      return <RepIndex reps={this.props.reps} showAddressForm={this.setChangingReps}/>;
    }
    else if ( changingReps ) {
      return (
        <div className='center'>
          <AddressForm enteredAddress={this.setShowingReps} />
          <button className="btn blue-grey" onClick={this.setShowingReps}>Back</button>
        </div>
      );
    }
    else {
      return <AddressForm enteredAddress={this.setShowingReps} />
    }
  }

  render() {
    let { loading } = this.state;
    return(
      <div>
        { loading ? this.displayLoading() : this.displayContent() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { reps: state.reps };
}

export default connect(mapStateToProps)(HomeCard);
