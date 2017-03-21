import React from 'react';
import { connect } from 'react-redux';
import { updateReps } from '../actions/reps';
import RepContact from './RepContact';
import RepInfo from './RepInfo';
import RepHeader from './RepHeader';

class Rep extends React.Component {
  state = { loading: true }

  componentWillMount = () => {
      this.props.dispatch(updateReps());
  }

  componentDidUpdate = () => {
    if (this.state.loading)
      this.setState({ loading: false });
  }

  displayRepData = () => {
    let { rep } = this.props;
    return (
      <div>
        <RepHeader
          profile_large_url={rep.profile_large_url}
          first_name={rep.first_name}
          last_name={rep.last_name}
        />
        <RepInfo
          party={rep.party}
          title={rep.title}
          state={rep.state}
          next_election={rep.next_election}
          district={rep.district}
        />
        <RepContact
          phone={rep.phone}
          twitter_account={rep.twitter_account}
          url={rep.url}
        />
      </div>
    );
  }

  render = () => {
    if ( this.state.loading ) {
      return( <p>Loading</p> );
    } else {
      return (
        <div>
          { this.displayRepData() }
        </div>
      );
    }
  }
}

const mapStateToProps = (state, props) => {
  return { rep: state.reps.find( r => r.id == props.params.id ) }
}

export default connect(mapStateToProps)(Rep);
