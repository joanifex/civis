import React from 'react';

const RepHeader = ({ profileLargeUrl, fullName }) => (
  <div className="center">
    <img
      src={profileLargeUrl}
      style={{
        width: "200px",
        borderRadius: "8px",
        border: "5px black solid"
      }}
      className="center"
    />
    <h4>{`${fullName}`}</h4>
  </div>
);

export default RepHeader;
