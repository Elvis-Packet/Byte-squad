import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Project One', description: 'An innovative project that solves real-world problems.', image: '/images/project1.jpg', demo: '' },
  { id: 2, title: 'Project Two', description: 'A cutting-edge application with modern UI/UX.', image: '/images/project2.jpg', demo: '' },
  { id: 3, title: 'Project Three', description: 'A powerful tool to enhance productivity and efficiency.', image: '/images/project3.jpg', demo: '' },
  { 
    id: 4, 
    title: 'Recipe Finder', 
    description: 'A web-based application to find and save recipes.', 
    image: '/images/project4.png',
    link: 'https://elvis-packet.github.io/Recipe-project/',
    demo: 'https://elvis-packet.github.io/Recipe-project/'
  },
];

function Projects() {
  return (
    <div className="projects">
      <h1>Our Projects</h1>
      <div className="project-container">
        {projects.map(project => (
          <motion.div 
            key={project.id} 
            className="project-card project-3d"
            whileHover={{ scale: 1.1, rotateY: 10, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="overlay">
                <p>{project.description}</p>
              </div>
            </div>
            <h2>{project.title}</h2>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-button">View Demo</a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;