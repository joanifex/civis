import React from 'react';
import { connect } from 'react-redux';
import RepIndex from './RepIndex';
import { updateReps } from '../actions/reps';

class Rep extends React.Component {

  componentWillMount = () => {
    this.props.dispatch(updateReps());
  }

  render(){
    let { rep } = this.props;
    if(rep) {
      return(
        <li className="collection-item avatar">
          <span className="title">{`${rep.first_name} ${rep.last_name}`}</span>
          <p>
            {`${rep.title} of ${rep.state}`}
          </p>
          <p>
            I contain a bio from the sexy API!
          </p>
        </li>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state, props) => {
  return { rep: state.reps.find( r => r.id == props.params.id ) }
}

export default connect(mapStateToProps)(Rep);
