import React from 'react';
import { connect } from 'react-redux';
import { updateReps } from '../actions/reps';
import ZipcodeForm from './ZipcodeForm';
import RepIndexCard from './RepIndexCard';

class HomeCard extends React.Component {
  state = { editingZipcode: true }

  componentWillMount = () => {
    this.props.dispatch(updateReps());
  }

  componentDidMount = () => {
    if (this.props.reps.length !== 0)
      this.enteredZipcode();
  }

  enteredZipcode = () => {
    this.setState({ editingZipcode: false })
  }

  displayCardContent = () => {
    if (this.state.editingZipcode) {
      return <ZipcodeForm enteredZipcode={this.enteredZipcode}/>;
    } else {
      return <RepIndexCard />;
    }
  }

  render(){
    return(
      <div className="row">
        <div className="col s12 m10 offset-m1 l8 offset-l2">
          <div className="card grey lighten-4">
            <div className="card-content">
              {this.displayCardContent()}
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
