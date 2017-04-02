import React from 'react';
import { Link, browserHistory } from 'react-router';
import { civisBlueColor } from './styles.scss'
import { civisRed, badge } from './styles.scss'

const RepIndex = ({ reps, isAuthenticated, showAddressForm }) => {

  const displayNewArticles = (new_articles) => {
    if ( new_articles )
      return <span className={`new badge ${civisRed} ${badge}`}>{`${new_articles}`}</span>
  }

  const linkToRep = (rep) => {
    browserHistory.push(`/rep/${rep.id}`);
  }

  const displayReps = () => {
    return reps.map( (rep) => {
      return(
          <li
            style={{ cursor: 'pointer', margin: '5px', border: "1px solid #e0e0e0" }}
            key={rep.id} className="collection-item avatar hoverable"
            onClick={ () => linkToRep(rep) }
          >
            <img src={rep.profile_url} alt="" className="circle left" />
            <br />
            <span className="title">{`${rep.first_name} ${rep.last_name}`}</span>
            <p>
              {`U.S. ${rep.title} of ${rep.state}`}
            </p>
            { displayNewArticles(rep.new_articles) }
            <div className='secondary-content'>
              <i className={`fa fa-institution fa-2x ${civisBlueColor}`}></i>
            </div>
          </li>
      );
    });
  }

  const displaySignUp = () => {
    return(
      <Link
        to="sign_up"
        className="waves-effect waves-teal btn-flat left"
      >
        Sign Up for News Alerts
      </Link>
    );
  }

  return(
    <div>
      <ul className="collection" style={{ border: "none"}}>
        { displayReps() }
      </ul>
      { isAuthenticated ? null : displaySignUp() }
      <a
        className="waves-effect waves-teal btn-flat right"
        onClick={showAddressForm}>
        Update Address
      </a>
    </div>
  );
}

export default RepIndex;
