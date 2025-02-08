import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Project One', description: 'Description for project one.', image: '/images/project1.jpg' },
  { id: 2, title: 'Project Two', description: 'Description for project two.', image: '/images/project2.jpg' },
  { id: 3, title: 'Project Three', description: 'Description for project three.', image: '/images/project3.jpg' },
  { 
    id: 4, 
    title: 'Recipe Finder', 
    description: 'Description for project four.', 
    image: '/images/project4.png',
    link: 'https://elvis-packet.github.io/Recipe-project/'
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <div className="projects">
      <h1>Our Projects</h1>
      <div className="project-container">
        {projects.map(project => (
          <motion.div 
            key={project.id} 
            className="project-card"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="overlay">
                <p>{project.description}</p>
              </div>
            </div>
            <h2>{project.title}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
