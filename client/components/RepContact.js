import React from 'react';

const RepContact = ({ phone, twitter_account, url }) => (
  <div>
    <h5>Contact Info:</h5>
    <div className="row">
      <div className="col s12 m6 l4">
        <ul className="collection">
          <li className="collection-item">
            <i className="fa fa-phone"></i>
            <a href={`tel:${phone}`} >
              {`   ${phone}`}
            </a>
          </li>
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
        </ul>
      </div>
    </div>
  </div>
);

export default RepContact;
