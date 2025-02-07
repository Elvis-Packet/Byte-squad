import './Profiles.css';
import { FaInstagram, FaGithub } from 'react-icons/fa';

const teamMembers = [
  {
    id: 1,
    name: 'ANGELA',
    image: '/images/Angela.jpeg', // Use absolute path for images in the public folder
    role: 'Frontend Developer',
    languages: ['HTML', 'CSS', 'JavaScript', 'React'],
    socials: { 
      instagram: 'https://www.instagram.com/angel.a_gathoni?igsh=MWZ4ZnZjb3IyMzhyNg==', 
      github: 'https://github.com/Angela-G9' 
    }
  },
  {
    id: 2,
    name: 'BRIAN',
    image: '/images/Brian.jpeg',
    role: 'Backend Developer',
    languages: ['Node.js', 'Express', 'MongoDB', 'SQL'],
    socials: { 
      instagram: 'https://www.instagram.com/steam.gx?igsh=MTY2azRocnJicG9idA==', 
      github: 'https://github.com/Steamgx' 
    }
  },
  {
    id: 3,
    name: 'KEVIN',
    image: '/images/Kevin.jpeg',
    role: 'Fullstack Developer',
    languages: ['JavaScript', 'Python', 'React', 'Django'],
    socials: { 
      instagram: 'https://instagram.com/charlie', 
      github: 'https://github.com/kagoz-lab' 
    }
  },
  {
    id: 4,
    name: 'Elvis',
    image: '/images/Elvis.jpeg',
    role: 'UX/UI Designer',
    languages: ['Sketch', 'Figma', 'Adobe XD'],
    socials: { 
      instagram: 'https://www.instagram.com/packet_elvis?igsh=MTdqYmw2c3doNXJhbA==', 
      github: 'https://github.com/Elvis-Packet' 
    }
  },
];

function Profiles() {
  return (
    <div className="profiles">
      <h1>Our Team</h1>
      <div className="profile-container">
        {teamMembers.map(member => (
          <div key={member.id} className="profile-card">
            <img src={member.image} alt={member.name} className="profile-image" />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
            {member.languages && member.languages.length > 0 && (
              <p>
                <strong>Specialized In:</strong> {member.languages.join(', ')}
              </p>
            )}
            <div className="socials">
              {member.socials.instagram && (
                <a 
                  href={member.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                >
                  <FaInstagram size={30} color="#E4405F" />
                </a>
              )}
              {member.socials.github && (
                <a 
                  href={member.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                >
                  <FaGithub size={30} color="#333" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profiles;
