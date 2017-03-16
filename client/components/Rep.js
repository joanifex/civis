import React from 'react';
import { connect } from 'react-redux';
import RepIndex from './RepIndex';
import { updateReps } from '../actions/reps';
import { Link } from 'react-router';

class Rep extends React.Component {

  componentWillMount = () => {
    this.props.dispatch(updateReps());
  }

  render(){
    let { rep } = this.props;
    if(rep) {
      return(
        <div>
          <div className="center">
            <h4>{`${rep.first_name} ${rep.last_name}`}</h4>
            <p>
              {`${rep.party} ${rep.title} of ${rep.state}`}
            </p>
            <p>
              Next Election: {`${rep.next_election}`} <br />
            </p>
          </div>
          <h5>Contact Info:</h5>
          <div className="row">
            <div className="col s12 m6 l4">
              <ul className="collection">
                <li className="collection-item">
                  <i className="fa fa-phone"></i>
                  {`   ${rep.phone}`}
                </li>
                <li className="collection-item">
                  <i className="fa fa-twitter"></i>
                  <a
                    href={`https://twitter.com/${rep.twitter_account}`}
                    target="_blank"
                  >
                    {`   Twitter`}
                  </a>
                </li>
                <li className="collection-item">
                  <i className="fa fa-external-link"></i>
                  <a
                    href={rep.url}
                    target="_blank"
                  >
                  {`   Website`}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Link to="/reps">All My Reps</Link>
        </div>
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
