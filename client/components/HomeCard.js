import React from 'react';
import { connect } from 'react-redux';
import ZipcodeForm from './ZipcodeForm';
import RepIndexCard from './RepIndexCard';
import { setZipcode } from '../actions/zipcode';

class HomeCard extends React.Component {
  state = { editingZipcode: true }

  componentDidMount = () => {
    this.props.dispatch(setZipcode())
    if (this.props.zipcode.length > 1)
      this.enteredZipcode();
  }

  componentDidUpdate = () => {
    if ( this.state.editingZipcode && this.props.zipcode )
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
  return { zipcode: state.zipcode }
}

export default connect(mapStateToProps)(HomeCard);
