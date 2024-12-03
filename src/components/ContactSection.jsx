import React from 'react';
import './ContactSection.css';
import emailpic from './assets/email.png';
import linkedin from './assets/linkedin.png';

const ContactSection = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img src={emailpic} alt="Email" className="icon contact-icon email-icon" />
          <p><a href="mailto:kartiknaik3670@gmail.com">Gmail</a></p>
        </div>
        <div className="contact-info-container">
          <img src={linkedin} alt="LinkedIn" className="icon contact-icon" />
          <p><a href="https://www.linkedin.com/in/kartiknaik/">LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
