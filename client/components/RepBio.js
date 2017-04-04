import React from 'react'
  
class RepBio extends React.Component {

  componentDidMount() {
    $('.collapsible').collapsible();
  }

  render() {
    return(
      <div>
        {
          this.props.bio != "" ?
            <div>
              <h5>Bio</h5>
              <ul className="collapsible hoverable" data-collapsible="accordion">
                <li>
                   
                  <div className="collapsible-header">
                    <i className='fa fa-sort-amount-desc' aria-hidden="true"></i>
                    <p className='truncate'>{this.props.bio}</p>
                  </div>
                  <div className="collapsible-body">
                    <p>{this.props.bio}</p>
                  </div>
                </li>
              </ul>
            </div>
          :
          null
        }
      </div>
    )
  }
}

export default RepBio;
