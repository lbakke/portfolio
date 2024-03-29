import React, { Component } from 'react'
import '../App.css';
import { Link, animateScroll as scroll } from "react-scroll"; 
import { IconContext } from "react-icons";
import { FaArrowDown } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import Typical from 'react-typical';
import Typing from 'react-typing-animation';
import { Typography, Space } from 'antd';

const { Text, Title } = Typography;

export default class Introduction extends Component {
  render() {
    return (
      <div>
	  <div className="introduction" name="home">
          <div className="social-buttons"> 
          <IconContext.Provider value={{ className: "react-icons" }}>
              <a href="https://github.com/lbakke" className="social-link">
                <FaGithub size={30}/>
              </a>
              <a href="https://www.linkedin.com/in/lauren-b-aa4b84113/" className="social-link">
                <FaLinkedin size={30}/>
              </a>
            </IconContext.Provider>
            </div>
        <div className="intro-box">
          <Title className="intro-name">Hi, I'm <a style={{color: '#00ccff'}} href="https://drive.google.com/file/d/1yHTKkbch95PZ39eG5fTqehrvkWO8aWA8/view?usp=sharing">Lauren</a>.</Title>
        <div className="typing-box">
            <p> I'm {' '}
                <Typical 
                loop={Infinity}
                wrapper='b'
                steps={[
                    'a Notre Dame alum.', 2000,
                    'an Amazon Alexa Music Developer.', 2000,
                    'a software engineer.', 2000
                ]}
                />
            </p> 
        </div>
        </div>
        <div className="intro-buttons">
          <div className="intro-button">
            <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>about</Link>
          </div>
          <div className="intro-button">
            <Link activeClass="active" to="experience" spy={true} smooth={true} duration={500}>experience</Link>
          </div> 
          <div className="intro-button">
            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>contact</Link>
          </div>   
        </div>   
        <div className="intro-arrow">
          <FaArrowDown size={40}/>
        </div>
      </div>
      </div>
    )
  }
}


