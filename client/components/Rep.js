import React from 'react';
import { connect } from 'react-redux';

class Rep extends React.Component {
  render(){
    return(
      <div>
        Hey, I'm a rep!
      </div>
    );
  }
}

export default connect()(Rep);
