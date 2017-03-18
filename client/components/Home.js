import React from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import HomeCard from './HomeCard';
import AboutUs from './AboutUs';
import { homeImgFirst, homeImgSecond, section, footer, footerText } from './styles.scss';

class Home extends React.Component {

  componentDidMount() {
    $('.parallax').parallax();
  }

  render() {
    return(
      <div>
        <h2 className='center'>Civis</h2>
        <HomeCard />
        <div className="parallax-container">
          <div className="parallax">
            <img className={homeImgFirst}
            src="https://c.tribune.com.pk/2016/12/1252658-protests-1480799399-425-160x120.jpg"
            />
          </div>
        </div>
        <div className={`${section} white`}>
          <div className="row container">
            <h2 className="header">Parallax</h2>
            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
          </div>
        </div>
        <div className={`${section} white`}>
          <div className="row">
            <div><AboutUs /></div>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img className={homeImgSecond}
            src="https://c.tribune.com.pk/2016/12/1252658-protests-1480799399-425-160x120.jpg"
            />
          </div>
        </div>

        <footer className='blue-grey white-text'>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Civis
            <div className= {`${footerText} right`} style={{ verticalAlign: 'middle' }}>
            <Link to='/about'>About</Link>
            </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
};

export default connect()(Home);
