// src/pages/Projects.js
import React from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of Project One.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s',
    githubLink: 'https://github.com/haribq15/about',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    githubLink: 'https://github.com/haribq15/master',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s',
    githubLink: 'https://github.com/haribq15/hari',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
