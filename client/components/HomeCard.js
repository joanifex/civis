import React from 'react';
import { connect } from 'react-redux';
import { updateReps, resetReps } from '../actions/reps'
import AddressForm from './AddressForm';
import RepIndex from './RepIndex';
import Loading from './Loading';
import { homeCardStyle, backButton } from './styles.scss';

class HomeCard extends React.Component {
  state = { loading: true, showingReps: false, changingReps: false };

  componentDidMount() {
    if ( this.hasLoaded() )
      this.setNotLoading();
    if ( this.hasReps() )
      this.setShowingReps();
  }

  componentDidUpdate() {
    const { loading, showingReps, changingReps } = this.state;
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

  displayContent = () => {
    const { showingReps, changingReps } = this.state;
    const { reps, isAuthenticated } = this.props;
    if ( showingReps ) {
      return(
        <RepIndex
          reps={reps}
          isAuthenticated={isAuthenticated}
          showAddressForm={this.setChangingReps}
        />
      );
    }
    else {
      return (
        <div className='center'>
          <AddressForm enteredAddress={this.setShowingReps} />
          { changingReps ?
            <button className={`waves-effect waves-teal btn-flat ${backButton}`}
              onClick={this.setShowingReps}
            >
              Back
            </button>
            : null
          }
        </div>
      );
    }
  }

  render() {
    const { loading } = this.state;
    return(
      <div className={`card grey lighten-4`}>
        <div className={`card-content ${homeCardStyle}`}>
          { loading ? <Loading /> : this.displayContent() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { reps, auth } = state;
  const isAuthenticated = auth.isAuthenticated ? true : false;
  return { reps, isAuthenticated };
}

export default connect(mapStateToProps)(HomeCard);
