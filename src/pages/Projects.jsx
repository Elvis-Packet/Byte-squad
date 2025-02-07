// src/pages/Projects.jsx
import './Projects.css';

const projects = [
  { id: 1, title: 'Project One', description: 'Description for project one.', image: '/images/project1.jpg' },
  { id: 2, title: 'Project Two', description: 'Description for project two.', image: '/images/project2.jpg' },
  // Add more projects as needed
];

function Projects() {
  return (
    <div className="projects">
      <h1>Our Projects</h1>
      <div className="project-container">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
