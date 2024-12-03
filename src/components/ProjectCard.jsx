import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, projectName, description, projectLink }) => {
  const handleButtonClick = () => {
    window.open(projectLink, "_blank");  // Opens the link in a new tab
  };

  return (
    <div className="project-card">
      <div className="project-image-container" style={{background:`url(${image})`,backgroundPosition:'center',backgroundSize:'cover'}}>

      </div>
      <div className="project-details">
        <h3 className="project-name">{projectName}</h3>
        <p className="project-description">{description}</p>
      </div>
      <div className="project-buttons">
        <button className="github-button" onClick={handleButtonClick}>
          GitHub
        </button>

      </div>
    </div>
  );
};

export default ProjectCard;
