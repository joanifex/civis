import React from 'react';

const RepInfo = ({
    party,
    title,
    state,
    next_election,
    district
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
        <li classname="collection-item">
          District: {`${district}`} <br/>
        </li>
        :
        null
      }
    </ul>
  </div>
);

export default RepInfo;
