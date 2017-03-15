import React from 'react';
import { connect } from 'react-redux';
import RepIndex from './RepIndex';

class Rep extends React.Component {
  render(){
    let { rep } = this.props;
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
  }
}

const mapStateToProps = (state, ownProps) => {
  return { rep: state.reps[parseInt(ownProps.params.id)] }
}

export default connect(mapStateToProps)(Rep);
