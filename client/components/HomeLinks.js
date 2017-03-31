import React from 'react';
import vote_360 from '../images/vote_360.png';
import election_480 from '../images/election_480.png';
import capital from '../images/capital.png'
import { aboutpic, infopic, capitalpic } from './styles.scss';

const HomeLinks = () => (
    <div>
      <div className='section grey lighten-3'>
        <div className="row container">
          <div className='col s12 m6 l4'>
          <h5 className="center">Vote</h5>
          <br />
          <a className="center" target="_blank"
                href ="https://www.usvotefoundation.org/vote/voter-registration-absentee-voting.htm?gclid=Cj0KEQjwk-jGBRCbxoPLld_bp-IBEiQAgJaftZKlqzQIhh7SUEz7ELELmRqTowsXkDlVMfo8N90PkbgaAlTo8P8HAQ"
              ><img className={aboutpic} src={vote_360}/></a>
        </div>

        <div className='col s12 m6 l4'>
        <h5 className="center">Information</h5>
        <br />
        <a className="center" target="_blank"
              href ="https://www.youtube.com/watch?v=Otbml6WIQPo"
            ><img className={capitalpic} src={capital}/></a>
        </div>

        <div className='col s12 m6 l4'>
        <h5 className="center">2018 Election</h5>
        <br />
        <a className="center" target="_blank"
              href ="https://ballotpedia.org/United_States_Congress_elections,_2018"
            ><img className={infopic} src={election_480}/></a>
        </div>
        </div>
      </div>
    </div>
)

export default HomeLinks;
