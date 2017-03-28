import React from 'react';

const RepInfo = ({
    party,
    title,
    state,
    next_election,
    district,
    bio
  }) => (
  <div>
    <h5>Official Info:</h5>
    <ul className="collection">
      <li className="collection-item">
        {`${party} ${title} of ${state}`}
      </li>
      <li className="collection-item">
        Next Election: {`${next_election}`} <br />
      </li>
      {
        district ?
        <li className="collection-item">
          District: {`${district}`} <br/>
        </li>
        :
        null
      }
      {/* TODO: if there is a bio, show bio, if not do not */}
      <li className="collection-item">
        Bio: {`${bio}`} <br/>
      </li>
    </ul>
  </div>
);

export default RepInfo;
