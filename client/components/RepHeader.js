import React from 'react';

const RepHeader = ({ profileLargeUrl, fullName }) => (
  <div className="center">
    <img
      src={profileLargeUrl}
      style={{height: "250px", height: "250px"}}
      className="center"
    />
    <h4>{`${fullName}`}</h4>
  </div>
);

export default RepHeader;
