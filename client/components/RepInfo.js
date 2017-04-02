import React from 'react';

const RepInfo = ({
    party,
    title,
    state,
    nextElection,
    district,
  }) => (
  <div>
    <ul className="collection">
      <li className="collection-item">
        {`${party} U.S. ${title} of ${state}`}
      </li>
      <li className="collection-item">
        Next Election: {`${nextElection}`} <br />
      </li>
      {
        district ?
        <li className="collection-item">
          District: {`${district}`} <br/>
        </li>
        :
        null
      }
    </ul>
  </div>
);

export default RepInfo;
