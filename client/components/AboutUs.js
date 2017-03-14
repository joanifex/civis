import React from 'react';

class AboutUs extends React.Component{
  render (){
    return(
      <div className='row'>
        <h1 className='center'>About Us</h1>
        <div className='col s12 m6 l3'>
          <h5 className='center'>Ian</h5>
          <br />
          <img width='100%' src='https://s-media-cache-ak0.pinimg.com/564x/10/3f/62/103f62d4e3aa8f471b3b512c9361cfe1.jpg' />
          <p>Hi, I am Ian and I'm the smartest person in the class! </p>
        </div>
        <div className='col s12 m6 l3'>
          <h5 className='center'>Jeremy</h5>
          <br />
          <img width='100%' src='http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/13531800_1235678766445299_1590304831_n.jpg?ig_cache_key=MTI5MDUzMDU5NjcwNzI0MzQ3Mw%3D%3D.2'/>
          <p>Hi! I am Jeremy and I'm a lumberjack and I'm ok! </p>
        </div>
        <div className='col s12 m6 l3'>
          <h5 className='center'>Lindsay</h5>
          <br />
          <img width='100%' src='https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr01/2013/4/18/16/anigif_enhanced-buzz-1786-1366317339-16_preview.gif' />
          <p>Hi! I'm Lindsay and I like drinks! How much could a banana cost? $10?! </p>
        </div>
        <div className='col s12 m6 l3'>
          <h5 className='center'>Valerie</h5>
          <br />
          <img width='100%' src='http://i.dailymail.co.uk/i/pix/2015/09/04/13/190E8A9100000578-0-image-a-26_1441371211282.jpg'/>
          <p>Hi! My name is Valerie and I want to look like Liza</p>
        </div>
      </div>
    );
  }
}

export default AboutUs;
