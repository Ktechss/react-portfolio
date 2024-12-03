import React from 'react';
import profilePic from './assets/profile_k.jpg';
import linkedin from './assets/linkedin.png'
import github from './assets/github.png';
import youtube from './assets/youtube.png'
import './ProfileSection.css';
import cv from './assets/Knaik-CV.pdf'


const ProfileSection = () => {
  return (
    <section id="profile">
      <div className="profile_section__pic-container">
        <img src={profilePic} alt="Kartik Naik profile" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Kartik Naik</h1>
        <p className="section__text__p2">Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open(cv)}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = '#contact')}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedin}
            alt="LinkedIn"
            className="icon"
            onClick={() => window.location.href = 'https://www.linkedin.com/in/kartiknaik/'}
          />
          <img
            src={github}
            alt="GitHub"
            className="icon"
            onClick={() => window.location.href = 'https://github.com/Ktechss?tab=repositories'}
          />
          <img
            src={youtube}
            alt="YouTube"
            className="icon"
            onClick={() => window.location.href = 'https://www.youtube.com/@Ktechs'}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
