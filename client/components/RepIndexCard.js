import React from 'react';
import { connect } from 'react-redux';
import { updateReps } from '../actions/reps';
import { Link } from 'react-router';

class RepIndex extends React.Component {

  componentWillMount = () => {
    this.props.dispatch(updateReps());
  }

  displayReps = () => {
    return this.props.reps.map( (rep) => {
      return(
        <li key={rep.id} className="collection-item avatar">
          <img src={rep.profile_url} alt="" className="circle" />
          <span className="title">{`${rep.first_name} ${rep.last_name}`}</span>
          <p>
            {`${rep.title} of ${rep.state}`}
          </p>
          <Link
            to={`/rep/${rep.id}`}
            href="#!"
            className="secondary-content">
            <i className="fa fa-user-circle fa-2x"></i>
          </Link>
        </li>
      );
    });
  }

  render(){
    return(
      <ul className="collection">
        {this.displayReps()}
      </ul> );
  }
}

const mapStateToProps = (state) => {
  return {reps: state.reps}
}

export default connect(mapStateToProps)(RepIndex);
