import React from 'react';
import { Link } from 'react-router';
import sam from '../images/sam.jpg';
import { samImg, civisBlue } from './styles.scss';

const NoMatch = () => (
  <div className='center'>
    <img  src={sam} className={samImg} />
    <br />
    <h4>404: this page could not be found.</h4>
    <button className={`waves-effect waves-light btn ${civisBlue}`} >
      <Link to={'/'} className='white-text'>Civis Home</Link>
    </button>
  </div>
  )

export default NoMatch;

