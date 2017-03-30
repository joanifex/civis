import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { updateReps } from '../actions/reps';

class AddressForm extends React.Component {
  state = { address: "", loading: false }

  handleSubmit = (e) => {
    e.preventDefault();
    let { address } = this.state
    this.findReps({ address });
  }

  geolocate = () => {
    if (navigator.geolocation) {
      this.setState({ loading: true });
      navigator.geolocation.getCurrentPosition( position => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.findReps({ coords });
      });
    } else {
      this.setState({ loading: false });
      Materialize.toast("Can't Geolocate.");
    }
  }

  findReps = ({ address = "", coords = {} }) => {
    $.ajax({
      type: 'GET',
      url: `/api/reps`,
      dataType: 'JSON',
      data: { address, coords }
    }).done(data => {
      const { dispatch, enteredAddress } = this.props;
      dispatch(updateReps(data.reps));
      enteredAddress();
    }).fail( err => {
      const message = err.responseText === "Requires More Specific Address" ?
        "That address includes multiple districts. Try searching for a full address."
        : "Could not find address. Try another one.";
      Materialize.toast(message, 3000);
    });
  }

  handleChange = (e) => {
    let { target: { value } } = e;
    this.setState({ address: value });
  }

  displayLoading() {
    //TODO: style this loading state
    return <div>Loading</div>
  }

  displayContent = () => {
    let { address } = this.state
    return(
      <div>
        <span className='card-title center'>
          Find your legislators by zip code or address
        </span>
        <form className='center' onSubmit={this.handleSubmit}>
          <div className="row">
            <input
              id="address"
              value={address}
              onChange={this.handleChange}
              className="col s12 m8 offset-m1"
              placeholder='Zip code or Address'
              required
              autoFocus
            />
            <input className='btn' type='submit'/>
          </div>
        </form>
        <div className=''>
          <button className="btn center" onClick={this.geolocate}>Geolocate</button>
        </div>
      </div>
    );
  }

  render() {
    return(
      <div>
        { this.state.loading ? this.displayLoading() : this.displayContent() }
      </div>
    );
  }
}

export default connect()(AddressForm);
