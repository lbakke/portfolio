import React, { Component } from 'react'
import '../App.css'; 
import { Link, animateScroll as scroll } from "react-scroll"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

/* spotify credentials */ 
// import SpotifyWebApi from "spotify-web-api-js";
// const spotifyApi = new SpotifyWebApi();

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typing from 'react-typing-animation';

var ColorLink = {
    color: '#00ccff'
}

var BoldColorLink = {
  color: '#00ccff',
  fontWeight: 'bold'
}

export default class About extends Component {
  render() {
    return (
      <div>
      <div className="blank-space"/>
      <div name="about" className="introduction">
        <div>
          <div className="about-header">about</div>
        </div>
          <div className="about-facts-holder">
            <div className="about-facts">hometown: Minneapolis, MN</div>
            <div className="about-facts">school: University of Notre Dame</div>
            <div className="about-facts">major: Computer Science</div>
            <div className="about-facts"> 
              <div>hobbies: <a style={ColorLink} href="https://www.youtube.com/watch?v=NT2_gOJm9Xs">marching band</a>, <a style={ColorLink} href="https://www.youtube.com/watch?v=IXKXumEvLFk">ND symphony orchestra</a> and co-hosting a <a style={ColorLink} href="https://wsnd.nd.edu/">radio show</a></div>
            </div>
          </div>
          <div className="about-text">
            <p>Hello! My name is Lauren and I'm glad to see you made it to my site. 
          I'm from Minneapolis, MN and am in my fourth and final year at the University 
          of Notre Dame. College has been the greatest years of my life so far - not only have I met some incredible 
          people through classes, the marching band, and other activities on campus, but I've also 
          learned so much more about computer science than I ever would have imagined. I had never
          coded before coming to college, but I took a chance on the computer science major and it has rewarded me ever since.
          Maintaining a growth mindset and being inspired by the amazing professors and students around me has helped shape 
          my goals and dreams in amazing ways. </p>
          <p>
            Feel free to check out my <a style={BoldColorLink} href="https://drive.google.com/file/d/1jz87shODLIkyiBOvQVLcXq0VHIoRvGMw/view?usp=sharing">resume</a>, and if you want to read a bit more about my professional and educational 
            experiences, keep on scrolling!
          </p> 
        </div>
      </div> 
      </div>
    )
  }
}
