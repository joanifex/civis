import React from 'react';
import { Link } from 'react-router';

const RepIndex = ({ reps, showAddressForm }) => {

  const displayNewArticles = (new_articles) => {
    if ( new_articles )
      return <span className="new badge">{`${new_articles}`}</span>
  }

  const displayReps = () => {
    return reps.map( (rep) => {
      return(
        <li key={rep.id} className="collection-item avatar">
          <img src={rep.profile_url} alt="" className="circle" />
          <span className="title">{`${rep.first_name} ${rep.last_name}`}</span>
          <p>
            {`${rep.title} of ${rep.state}`}
          </p>
          { displayNewArticles(rep.new_articles) }
          <Link
            to={`/rep/${rep.id}`}
            href="#!"
            className="secondary-content">
            <i className="fa fa-institution fa-2x"></i>
          </Link>
        </li>
      );
    });
  }

  return(
    <div>
      <ul className="collection">
        { displayReps() }
      </ul>
      <button className="btn" onClick={showAddressForm}>Update Adress</button>
    </div>
  );
}

export default RepIndex;
