import React from 'react';
import { connect } from 'react-redux';
import ZipcodeForm from './ZipcodeForm';
import RepIndexCard from './RepIndexCard';
import { updateReps } from '../actions/reps'

class HomeCard extends React.Component {
  state = { loading: true, editingZipcode: true }

  componentDidMount = () => {
    this.props.dispatch(updateReps())
    if ( this.hasReps() ) {
      this.setState({ loading: false });
      this.enteredZipcode();
    }
  }

  componentDidUpdate = () => {
    if ( this.hasReps() )
      this.setState({ loading: false });
    if ( this.state.editingZipcode && this.props.reps.count > 0 )
      this.enteredZipcode();
  }

  hasReps = () => {
    return this.props.reps.count > 0 ? true : false;
  }

  enteredZipcode = () => {
    this.setState({ editingZipcode: false })
  }

  displayLoading = () => {
    return(
      <p>Loading</p>
    );
  }

  displayCardContent = () => {
    if (this.state.editingZipcode) {
      return <ZipcodeForm enteredZipcode={this.enteredZipcode}/>;
    } else {
      return <RepIndexCard />;
    }
  }

  render(){
    let { loading } = this.state;
    return(
      <div className="row">
        <div className="col s12 m10 offset-m1 l8 offset-l2">
          <div className="card grey lighten-4">
            <div className="card-content">
              { loading ? this.displayLoading() : this.displayCardContent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { reps: state.reps }
}

export default connect(mapStateToProps)(HomeCard);
