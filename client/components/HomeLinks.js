import React from 'react';
import vote_360 from '../images/vote_360.png';
import election_480 from '../images/election_480.png';
import capital from '../images/capital.png'
import { infopic, capitalpic, lato } from './styles.scss';

const HomeLinks = () => (
  <div>
    <div className='section grey lighten-3'>
      <div className="row container">
        <a
          className="hoverable center"
          target="_blank"
          href ="https://www.usvotefoundation.org/vote/sviddomestic.htm"
        >
          <div className='col s12 m6 l4 hoverable'>
            <h5 className={`center black-text ${lato}`}>VOTE</h5>
            <img className={infopic} src={vote_360} style={{paddingBottom: "12px"}}/>
          </div>
        </a>
        <a
          className="center"
          target="_blank"
          href ="https://www.youtube.com/watch?v=pSANTRnEBgg"
        >
          <div className='col s12 m6 l4 hoverable'>
            <h5 className={`center black-text ${lato}`}>INFORMATION</h5>
            <img className={capitalpic} src={capital}/>
          </div>
        </a>
        <a
          className="center"
          target="_blank"
          href ="https://ballotpedia.org/United_States_Congress_elections,_2018"
        >
          <div className='col s12 m6 l4 hoverable'>
            <h5 className={`center black-text ${lato}`}>2018 ELECTION</h5>
            <img className={infopic} src={election_480} style={{paddingBottom: "6px"}}/>
          </div>
        </a>
      </div>
    </div>
  </div>
)

export default HomeLinks;
