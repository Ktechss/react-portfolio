// src/ProjectsSection.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProjectsSection.css';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]); // State to hold project data

  // Fetch project data from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects`); // API URL from .env file
        setProjects(response.data); // Set the project data in state
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects(); // Fetch projects when the component mounts
  }, []); // Empty dependency array ensures this runs only once

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        {/* Dynamically render ProjectCard components */}
        {projects.map((project) => (
          <ProjectCard
            key={project._id} // Use unique key for each project
            image={`${process.env.REACT_APP_API_URL}${project.image}`} // Image URL from backend
            projectName={project.name} // Project name from backend
            description={project.description} // Project description from backend
            projectLink={project.projectLink} // Project link from backend
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
