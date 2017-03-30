import React from 'react'

const RepBio = ({ bio }) => (
  <div>
    {
      bio == "" ?
        <div>
          <h5>Bio</h5>
          <p>{bio}</p>
        </div>
      :
      null
    }
  </div>
)

export default RepBio
