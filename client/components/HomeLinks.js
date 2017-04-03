import React from 'react';
import vote_360 from '../images/vote_360.png';
import election_480 from '../images/election_480.png';
import capital from '../images/capital.png'
import { infopic, capitalpic } from './styles.scss';

const HomeLinks = () => (
    <div>
      <div className='section grey lighten-3'>
        <div className="row container">
          <a className="hoverable center" target="_blank"
            href ="https://www.usvotefoundation.org/vote/voter-registration-absentee-voting.htm?gclid=Cj0KEQjwk-jGBRCbxoPLld_bp-IBEiQAgJaftZKlqzQIhh7SUEz7ELELmRqTowsXkDlVMfo8N90PkbgaAlTo8P8HAQ"
            >
        <div className='col s12 m6 l4 hoverable'>
          <h5 className="center black-text">VOTE</h5>
          <img className={infopic} src={vote_360}/>
        </div>
          </a>
          <a className="center" target="_blank"
              href ="https://www.youtube.com/watch?v=Otbml6WIQPo"
            >
        <div className='col s12 m6 l4 hoverable'>
          <h5 className="center black-text">INFORMATION</h5>
          <img className={capitalpic} src={capital}/>
        </div>
          </a>

          <a className="center" target="_blank"
              href ="https://ballotpedia.org/United_States_Congress_elections,_2018"
            >
        <div className='col s12 m6 l4 hoverable'>
          <h5 className="center black-text">2018 ELECTION</h5>
          <img className={infopic} src={election_480}/>
        </div>
          </a>
        </div>
      </div>
    </div>
)

export default HomeLinks;
