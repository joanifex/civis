import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// Actions
import { resetArticles } from '../actions/reps';

// Components
import RepHeader from './RepHeader';
import RepContact from './RepContact';
import RepInfo from './RepInfo';
import RepBio from './RepBio';
import Articles from './Articles';

class Rep extends React.Component {
  state = { loading: true }

  componentDidMount() {
    const { loading } = this.state
    const { rep, auth } = this.props
    if ( !auth.isAuthenticated && !rep )
      browserHistory.push('/');
    if ( loading && rep )
      this.setState({ loading: false });
  }

  componentDidUpdate() {
    const { loading } = this.state
    const { rep, auth } = this.props
    //TODO: redirect home if user does not have rep
    // if ( auth.isAuthenticated && !loading && !rep )
    //   browserHistory.push('/');
    if ( loading && rep )
      this.setState({ loading: false });
    if ( auth.isAuthenticated && rep && rep.new_articles > 0 ) {
      this.resetArticles(rep.id);
    }
  }

  resetArticles(id) {
    $.ajax({
      url: `../api/ties/${id}`,
      type: 'PUT',
      dataType: 'JSON'
    }).done( data => {
      this.props.dispatch(resetArticles(id));
    }).fail( err => {
      console.log(err);
    });
  }

  displayRep = () => {
    const {
      full_name: fullName,
      state,
      title,
      party,
      phone,
      url,
      bio,
      twitter_account: twitterAccount,
      next_election: nextElection,
      profile_url: profileUrl,
      profile_large_url: profileLargeUrl,
      district,
      contact_url: contactUrl,
      articles
    } = this.props.rep;
    return (
      <div>
        <div className="row">
          <div className="col s12 l4">
            <RepHeader
              profileLargeUrl={profileLargeUrl}
              fullName={fullName}
            />
            <RepInfo
              party={party}
              title={title}
              state={state}
              bio={bio}
              nextElection={nextElection}
            />
            <RepContact
              phone={phone}
              twitterAccount={twitterAccount}
              url={url}
              contactUrl={contactUrl}
              fullName={fullName}
            />
          </div>
          <div className="col s12 l8">
            <RepBio bio={bio}/>
            <Articles articles={articles} />
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
  const { auth, reps } = state;
  return { rep: reps.find( r => r.id == props.params.id ), auth }
}

export default connect(mapStateToProps)(Rep);
