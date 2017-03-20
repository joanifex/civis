import React from 'react';

const RepHeader =({
                  profile_large_url,
                  first_name,
                  last_name
                  }) => (

  <div className="center">
    <img
      src={profile_large_url}
      style={{height: "250px", height: "250px"}}
      className="center"
    />
    <h4>{`${first_name} ${last_name}`}</h4>
  </div>
);

export default RepHeader;
