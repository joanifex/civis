import React from 'react';

const RepContact = ({ phone, twitterAccount, url, contactUrl, fullName }) => {
  let displayTwitter = () => {
    if ( twitterAccount !== "" ) {
      return(
        <li className="collection-item">
          <i className="fa fa-twitter"></i>
          <a
            href={`https://twitter.com/${twitterAccount}`}
            target="_blank"
          >
            {`   Twitter`}
          </a>
        </li>
      );
    }
  }

  let displayContact = () => {
    if ( contactUrl !== "" ) {
      return(
        <li className='collection-item'>
          <i className="fa fa-external-link"></i>
          <a
            href={contactUrl}
            target='_blank'
          >
            {`  Contact ${fullName}`}
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
