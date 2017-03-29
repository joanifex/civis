import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// Actions
import { resetArticles } from '../actions/reps';

// Components
import RepContact from './RepContact';
import RepInfo from './RepInfo';
import RepHeader from './RepHeader';
import Articles from './Articles';

// TODO: Redirect to home on refresh if no current session
class Rep extends React.Component {
  state = { loading: true }

  componentDidMount() {
    if (this.props.rep)
      this.setState({ loading: false });
  }

  componentDidUpdate() {
    let { loading } = this.state
    let { rep, auth } = this.props
    if ( loading && rep )
      this.setState({ loading: false });
    if ( auth.isAuthenticated && rep && rep.new_articles > 0 ) {
      $.ajax({
        url: `../api/ties/${rep.id}`,
        type: 'PUT',
        dataType: 'JSON'
      }).done( data => {
        this.props.dispatch(resetArticles(rep.id));
      }).fail( err => {
        console.log(data);
      });
    }
  }

  // TODO: Refactor with JavaScript named variables in the object destructure.
  displayRep = () => {
    let { rep } = this.props;
    return (
      <div>
        <RepHeader
          profile_large_url={rep.profile_large_url}
          first_name={rep.first_name}
          last_name={rep.last_name}
        />
        <div className="row">
          <div className="col s12 l4">
            <RepInfo
              party={rep.party}
              title={rep.title}
              state={rep.state}
              bio={rep.bio}
              next_election={rep.next_election}
            />
            <RepContact
              phone={rep.phone}
              twitter_account={rep.twitter_account}
              url={rep.url}
              contact_url={rep.contact_url}
            />
          </div>
          <div className="col s12 l8">
            <Articles
              fullName={rep.full_name}
              articles={rep.articles}
            />
          </div>
        </div>
      </div>
    );
  }

  render = () => {
    if ( this.state.loading )
      return( <div><i className="fa fa-spinner fa-lg"></i></div> );
    else
      return ( this.displayRep() );
  }
}

const mapStateToProps = (state, props) => {
  let { auth } = state
  if (!auth.isAuthenticated && state.reps.length === 0)
     browserHistory.push('/')
  else
    return { rep: state.reps.find( r => r.id == props.params.id ), auth }
}

export default connect(mapStateToProps)(Rep);
