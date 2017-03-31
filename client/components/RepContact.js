import React from 'react';

const displayTwitter = (twitterAccount) => {
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

const displayContact = (contactUrl) => {
  if ( contactUrl !== "" ) {
    return(
      <li className='collection-item'>
        <i className="fa fa-envelope-o"></i>
        <a
          href={contactUrl}
          target='_blank'
        >
          {`  Contact`}
        </a>
      </li>
    );
  }
}

const RepContact = ({ phone, twitterAccount, url, contactUrl, fullName }) => (
  <div>
    <h5>Contact Info:</h5>
    <ul className="collection">
      <li className="collection-item">
        <i className="fa fa-phone"></i>
        <a href={`tel:${phone}`} >
          {`   ${phone}`}
        </a>
      </li>
      { displayTwitter(twitterAccount) }
      <li className="collection-item">
        <i className="fa fa-external-link"></i>
        <a
          href={url}
          target="_blank"
        >
        {`   Website`}
        </a>
      </li>
      { displayContact(contactUrl) }
    </ul>
  </div>
);


export default RepContact;
