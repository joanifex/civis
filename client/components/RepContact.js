import React from 'react';

const RepContact = ({ phone, twitter_account, url, contact_url }) => (
  <div>
    <h5>Contact Info:</h5>
    <ul className="collection">
      <li className="collection-item">
        <i className="fa fa-phone"></i>
        <a href={`tel:${phone}`} >
          {`   ${phone}`}
        </a>
      </li>
      {/* TODO: if no twitter, do not display */}
      <li className="collection-item">
        <i className="fa fa-twitter"></i>
        <a
          href={`https://twitter.com/${twitter_account}`}
          target="_blank"
        >
          {`   Twitter`}
        </a>
      </li>
      <li className="collection-item">
        <i className="fa fa-external-link"></i>
        <a
          href={url}
          target="_blank"
        >
        {`   Website`}
        </a>
      </li>
      {/* TODO: if no contact_url, do not display */}
      <li className='collection-item'>
        <i className="fa fa-external-link"></i>
        <a
          href={contact_url}
          target='_blank'
        >
          {`  Email your Representative`}
          {/* TODO: insert rep name after email */}
        </a>
      </li>
    </ul>
  </div>
);

export default RepContact;
