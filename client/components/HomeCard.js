import React from 'react'
import ZipcodeForm from './ZipcodeForm'

const HomeCard = () => (
  <div className="row">
    <div className="col s12 m10 offset-m1 l8 offset-l2">
      <div className="card grey lighten-4">
        <div className="card-content">
          <ZipcodeForm />
        </div>
      </div>
    </div>
  </div>
)

export default HomeCard
