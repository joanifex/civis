import React from 'react';
import { connect } from 'react-redux';
import { updateReps } from '../actions/reps'
import AddressForm from './AddressForm';
import RepIndex from './RepIndex';

class HomeCard extends React.Component {
  state = { loading: true, showingReps: false };

  componentDidMount() {
    if ( this.hasLoaded() )
      this.setNotLoading();
    if ( this.hasReps() )
      this.setShowingReps();
  }

  componentDidUpdate() {
    if ( this.state.loading && this.hasLoaded() )
      this.setNotLoading();
    if ( !this.state.showingReps && this.hasReps() )
      this.setShowingReps();
    if ( this.state.showingReps && !this.hasReps() )
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
    this.setState({ showingReps: true });
  }

  setNotShowingReps = () => {
    this.setState({ showingReps: false });
  }

  displayLoading() {
    return( <p>Loading</p> );
  }

  displayContent = () => {
    if (this.state.showingReps)
      return <RepIndex reps={this.props.reps}/>;
    else
      return <AddressForm addressEntered={this.setShowingReps}/>;
  }

  render() {
    let { loading } = this.state;
    return(
      <div className="row">
        <div className="col s12 m10 offset-m1 l8 offset-l2">
          <div className="card grey lighten-4">
            <div className="card-content">
              { loading ? this.displayLoading() : this.displayContent() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { reps: state.reps };
}

export default connect(mapStateToProps)(HomeCard);
