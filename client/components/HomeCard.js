import React from 'react';
import { connect } from 'react-redux';
import AddressForm from './AddressForm';
import RepIndexCard from './RepIndexCard';
import { updateReps } from '../actions/reps'

class HomeCard extends React.Component {
  state = { loading: true, editingAddress: true };

  componentWillMount = () => {
    this.props.dispatch(updateReps());
  }

  componentDidMount = () => {
    if ( this.hasLoaded() )
      this.setState({ loading: false });
    if ( this.hasAddress() )
      this.addressEntered();
  }

  componentDidUpdate = () => {
    if ( this.state.loading && this.hasLoaded() )
      this.setState({ loading: false });
    if ( this.state.editingAddress && this.hasAddress() ) {
      this.addressEntered();
    }
  }

  hasLoaded = () => {
    return this.props.reps[0] === 'loading' ? false : true;
  }

  hasAddress = () => {
    if ( this.props.reps.length === 0 || this.props.reps[0] === 'loading' )
      return false;
    return true;
  }

  addressEntered = () => {
    this.setState({ editingAddress: false });
  }

  displayLoading = () => {
    return( <p>Loading</p> );
  }

  displayContent = () => {
    if (this.state.editingAddress)
      return <AddressForm addressEntered={this.addressEntered}/>;
    else
      return <RepIndexCard />;
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
