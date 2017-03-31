import React from 'react';
import { Link, browserHistory } from 'react-router';
import { civisBlueColor } from './styles.scss'
import { civisRed, badge } from './styles.scss'

const RepIndex = ({ reps, showAddressForm }) => {

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
            style={{ cursor: 'pointer', margin: '5px' }}
            key={rep.id} className="collection-item avatar hoverable"
            onClick={ () => linkToRep(rep) }
          >
            <img src={rep.profile_url} alt="" className="circle left" />
            <br />
            <span className="title">{`${rep.first_name} ${rep.last_name}`}</span>
            <p>
              {`${rep.title} of ${rep.state}`}
            </p>
            { displayNewArticles(rep.new_articles) }
            <div className='secondary-content'>
              <i className={`fa fa-institution fa-2x ${civisBlueColor}`}></i>
            </div>
          </li>
      );
    });
  }

  return(
    <div>
      <ul className="collection">
        { displayReps() }
      </ul>
      <a
        className="waves-effect waves-teal btn-flat right"
        onClick={showAddressForm}>
        Update Address
      </a>
    </div>
  );
}

export default RepIndex;
