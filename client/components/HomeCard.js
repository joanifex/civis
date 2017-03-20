import React from 'react';
import { connect } from 'react-redux';
import ZipcodeForm from './ZipcodeForm';
import RepIndexCard from './RepIndexCard';
import { updateReps } from '../actions/reps'

class HomeCard extends React.Component {
  state = { loading: true, editingZipcode: true };

  componentWillMount = () => {
    this.props.dispatch(updateReps());
  }

  componentDidMount = () => {
    if ( this.isLoaded() )
      this.setState({ loading: false });
    if ( this.hasZipcode() )
      this.zipcodeEntered();
  }

  componentDidUpdate = () => {
    if ( this.state.loading && this.isLoaded() )
      this.setState({ loading: false });
    if ( this.state.editingZipcode && this.hasZipcode() )
      this.zipcodeEntered();
  }

  isLoaded = () => {
    return this.props.reps[0] === 'loading' ? false : true;
  }

  hasZipcode = () => {
    return this.props.reps.length === 0 ? false : true;
  }

  zipcodeEntered = () => {
    this.setState({ editingZipcode: false });
  }

  displayLoading = () => {
    return( <p>Loading</p> );
  }

  displayContent = () => {
    if (this.state.editingZipcode)
      return <ZipcodeForm zipcodeEntered={this.zipcodeEntered}/>;
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
