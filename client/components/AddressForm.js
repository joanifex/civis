import React from 'react';
import { browserHistory } from 'react-router';

class AddressForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let address = this.address.value
    this.updateAddress({address})
  }

  geolocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( position => {
        let coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.updateAddress({coords})
      });
    } else {
      Materialize.toast("Can't Geolocate.")
    }
  }

  updateAddress = ({ address = "", coords = [] }) => {
    $.ajax({
      type: 'PATCH',
      url: `/api/user/address`,
      dataType: 'JSON',
      data: { address, coords }
    }).done(data => {
      Materialize.toast('Address Updated', 3000);
      if (this.props.addressEntered)
        this.props.addressEntered();
    }).fail( data => {
      Materialize.toast('Invalid address, Please try again', 3000);
    });
  }

  render(){
    return(
      <div>
        <span className='card-title center'>
          Find your legislators by zip code or address.
        </span>
        <form className='center' onSubmit={this.handleSubmit}>
          <div className="row">
            <input
             ref={ n => this.address = n}
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

export default AddressForm;
