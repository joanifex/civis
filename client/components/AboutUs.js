import React from 'react';
import ianpic from '../images/ianpic.png';
import valpic from '../images/valpic.jpeg';
import lindsaypic from '../images/lindsaypic.jpg';
import { aboutpic, lindspic } from './styles.scss'

class AboutUs extends React.Component{

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render (){
    return(
      <div className='row'>
        <h3 className='center'>Our Team</h3>
        <div className='col s12 m6 l3'>
          <h5 className='center'>Ian Wright</h5>
          <br />
          <img className={`${aboutpic}`}src={ianpic} />
          <br />
          <div className='center'>
            <a href={'https://github.com/wrightianb'}
              target="_blank"
            >
              <i className="black-text fa fa-github fa-3x"></i>
            </a>
            <a href={'https://www.linkedin.com/in/wrightianb/'}
              target="_blank"
            >
              <i className="black-text fa fa-linkedin-square fa-3x" style={{margin: "auto 15px"}}></i>
            </a>
            <a
              className='email'
              href="mailto:wright.ianb@gmail.com?subject=Civis"
              target="_blank"
            >
              <i className="black-text fa fa-envelope-square fa-3x"></i>
            </a>
          </div>
        </div>

        <div className='col s12 m6 l3'>
          <h5 className='center'>Jeremy Cram</h5>
          <br />
          <div className='center'>
            <img className={`${aboutpic}`}src={ianpic} />
            <br />
            <a href={'https://github.com/jeremycram'}
              target="_blank"
            >
              <i className="black-text fa fa-github fa-3x"></i>
            </a>
            <a href={'https://www.linkedin.com/in/jeremy-cram/'}
              target="_blank"
            >
              <i className="black-text fa fa-linkedin-square fa-3x" style={{margin: "auto 15px"}}></i>
            </a>
            <a
              className='email'
              href="mailto:Jeremycrams@gmail.com?subject=Civis"
              target="_blank"
            >
              <i className="black-text fa fa-envelope-square fa-3x"></i>
            </a>
          </div>
        </div>

        <div className='col s12 m6 l3'>
          <h5 className='center'>Lindsay Larkin</h5>
          <br />
          <div className='center'>
            <img className={`${aboutpic}`} src={lindsaypic} />
            <br />
            <a href={'https://github.com/lilarkin'}
              target="_blank"
            >
              <i className="black-text fa fa-github fa-3x"></i>
            </a>
            <a href={'https://www.linkedin.com/in/lindsaylarkin/'}
              target="_blank"
            >
              <i className="black-text fa fa-linkedin-square fa-3x" style={{margin: "auto 15px"}}></i>
            </a>
            <a
              className='email'
              href="mailto:lindsay.larkin@gmail.com?subject=Civis"
              target="_blank"
            >
              <i className="black-text fa fa-envelope-square fa-3x"></i>
            </a>
           </div>
        </div>

        <div className='col s12 m6 l3'>
          <h5 className='center'>Valerie Barela</h5>
          <br />
          <img className={`${aboutpic}`} src={valpic} />
          <br />
          <div className='center'>
            <a href={'https://github.com/vbarela1'}
              target="_blank"
            >
              <i className="black-text fa fa-github fa-3x"></i>
            </a>
            <a href={'https://www.linkedin.com/in/barelavalerie/'}
              target="_blank"
            >
              <i className="black-text fa fa-linkedin-square fa-3x" style={{margin: "auto 15px"}}></i>
            </a>
            <a
              className='email'
              href="mailto:vbarela1@gmail.com?subject=Civis"
              target="_blank"
            >
              <i className="black-text fa fa-envelope-square fa-3x"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
