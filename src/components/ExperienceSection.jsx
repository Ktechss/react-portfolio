import React from 'react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="experience-details-container">
        <div className="details-container">
          <h2 className="experience-sub-title">Programming Language</h2>
          <div className="article-container">
            <article>
              <h3>Java</h3>
              <p>Experienced</p>
            </article>
            <article>
              <h3>Spring Boot</h3>
              <p>Experienced</p>
            </article>
            <article>
              <h3>Docker</h3>
              <p>Experienced</p>
            </article>
            <article>
              <h3>Networking</h3>
              <p>Experienced</p>
            </article>
            <article>
              <h3>React</h3>
              <p>Experienced</p>
            </article>
            <article>
              <h3>Linux</h3>
              <p>Experienced</p>
            </article>
            <article>
              <h3>My SQL</h3>
              <p>Intermediate</p>
            </article>
            {/* Add more articles */}
          </div>
        </div>
        {/* Add other skill categories like Frontend/Backend, Other, etc. */}
      </div>
    </section>
  );
};

export default ExperienceSection;
