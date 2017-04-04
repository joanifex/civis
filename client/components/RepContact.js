import React from 'react';

const displayTwitter = (twitterAccount) => {
  if ( twitterAccount !== "" ) {
    return(
      <li className="collection-item">
        <a
          href={`https://twitter.com/${twitterAccount}`}
          target="_blank"
          className="btn-flat" style={{width: "100%", padding: "0"}}
        >
          <i className="fa fa-twitter"></i>
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
        <a
          href={contactUrl}
          target='_blank'
          className="btn-flat" style={{width: "100%", padding: "0"}}
        >
          <i className="fa fa-envelope-o"></i>
            {`  Contact`}
        </a>
      </li>
    );
  }
}

const RepContact = ({ phone, twitterAccount, url, contactUrl, fullName }) => (
  <div>
    <h6 className="center">Contact Info</h6>
    <ul className="collection">
      <li className="collection-item">
        <a href={`tel:${phone}`} className="btn-flat" style={{width: "100%", padding: "0"}}>
          <i className="fa fa-phone"></i>
          {`   ${phone}`}
        </a>
      </li>
      { displayTwitter(twitterAccount) }
      <li className="collection-item">
        <a
          href={url}
          target="_blank"
          className="btn-flat" style={{width: "100%", padding: "0"}}
        >
          <i className="fa fa-external-link"></i>
          {`   Website`}
        </a>
      </li>
      { displayContact(contactUrl) }
    </ul>
  </div>
);


export default RepContact;
