import React from 'react';

const RepContact = ({ phone, twitter_account, url, contact_url, full_name }) => {
  let displayTwitter = () => {
    if ( twitter_account !== "" ) {
      return(
        <li className="collection-item">
          <i className="fa fa-twitter"></i>
          <a
            href={`https://twitter.com/${twitter_account}`}
            target="_blank"
          >
            {`   Twitter`}
          </a>
        </li>
      );
    }
  }

  let displayContact = () => {
    if ( contact_url !== "" ) {
      return(
        <li className='collection-item'>
          <i className="fa fa-external-link"></i>
          <a
            href={contact_url}
            target='_blank'
          >
            {`  Contact ${full_name}`}
          </a>
        </li>
      );
    }
  }

  return(
    <div>
      <h5>Contact Info:</h5>
      <ul className="collection">
        <li className="collection-item">
          <i className="fa fa-phone"></i>
          <a href={`tel:${phone}`} >
            {`   ${phone}`}
          </a>
        </li>
        { displayTwitter() }
        <li className="collection-item">
          <i className="fa fa-external-link"></i>
          <a
            href={url}
            target="_blank"
          >
          {`   Website`}
          </a>
        </li>
        { displayContact() }
      </ul>
    </div>
  );
}

export default RepContact;
