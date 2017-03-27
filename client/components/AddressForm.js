import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { updateReps } from '../actions/reps';

class AddressForm extends React.Component {
  state = { address: "" }

  handleSubmit = (e) => {
    e.preventDefault();
    let { address } = this.state;
    this.findReps({ address });
  }

  geolocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( position => {
        let coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.findReps({ coords })
      });
    } else {
      Materialize.toast("Can't Geolocate.")
    }
  }

  findReps = ({ address = "", coords = "" }) => {
    $.ajax({
      type: 'GET',
      url: `/api/reps`,
      dataType: 'JSON',
      data: { address, coords }
    }).done(data => {
      this.props.dispatch(updateReps(data.reps));
      // TODO: refactor this. This component is being used in two different places
      if (this.props.addressEntered)
        this.props.addressEntered();
      else
        browserHistory.push('/');
    }).fail( data => {
      Materialize.toast('Invalid address, Please try again', 3000);
    });
  }

  handleChange = (e) => {
    let { target: { value } } = e;
    this.setState({ address: value });
  }

  render() {
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
            <input className='btn blue-grey' type='submit'/>
          </div>
        </form>
        <button className="btn" onClick={this.geolocate}>Geolocate</button>
      </div>
    );
  }
}

export default connect()(AddressForm);
