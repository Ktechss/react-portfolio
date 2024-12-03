// src/AboutSection.js
import React from 'react';
import './AboutSection.css';
import aboutPic from './assets/About_picc.png';
import arrowIcon from './assets/arrow.png'; // Using arrow icon image
import experiencepic from './assets/experience.png';
import EducationCard from './EducationCard'; // Import the EducationCard component

const AboutSection = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="about_section__pic-container" style={{backgroundImage:`url(${aboutPic})`}}>
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experiencepic} alt="Experience" className="icon" />
              <h3>Experience</h3>
              <p>6 months Internship at <span style={{color:'red'}}> Festive Learn</span> as Software Developer</p>
            </div>
            <div className="details-container">
              <img src={experiencepic} alt="Experience" className="icon" />
              <h3>Education</h3>
              <EducationCard 
                courseName="Master of Computer Application"
                startDate="2022"
                endDate="2024"
                university="PES University"
              />
              <EducationCard 
                courseName="Bachelor of Computer Application"
                startDate="2019"
                endDate="2022"
                university="Kristu Jayanti College"
              />
            </div>
          </div>
          <div className="text-container">
            <ul>
              <li><p>Gained full-stack development, networking, and cloud tech experience, while improving system performance through integration of Jitsi Meet API for live class functionalities.</p></li>
              <li><p>Developed strong skills in Java, Data Structures, Algorithms, and Cloud Computing, with a focus on optimizing user experience and operational efficiency.</p></li>
              <li><p>Created network monitoring tools to enhance outage management, successfully completing projects that improved system reliability and operational efficiency.</p></li>
            </ul>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow"
        className="icon arrow"
        onClick={() => window.location.href = '#experience'}
      />
    </section>
  );
};

export default AboutSection;
