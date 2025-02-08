import './Profiles.css';
import { FaInstagram, FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from 'react-icons/fa6';

const teamMembers = [
  {
    id: 1,
    name: 'ANGELA',
    image: '/images/Angela.jpeg',
    role: 'Frontend Developer',
    languages: ['HTML', 'CSS', 'JavaScript', 'React'],
    socials: { 
      instagram: 'https://www.instagram.com/angel.a_gathoni/', 
      github: 'https://github.com/Angela-G9',
      linkedin: 'https://www.linkedin.com/in/angela-gathoni/',
      twitter: 'https://twitter.com/AngelaG9',
      email: 'mailto:angela@example.com'
    }
  },
  {
    id: 2,
    name: 'BRIAN',
    image: '/images/Brian.jpeg',
    role: 'Backend Developer',
    languages: ['Node.js', 'Express', 'MongoDB', 'SQL'],
    socials: { 
      instagram: 'https://www.instagram.com/steam.gx/', 
      github: 'https://github.com/Steamgx',
      linkedin: 'https://www.linkedin.com/in/brian-muraya-4419b3284//',
      twitter: 'https://x.com/mu19540870',
      email: 'bmuraya646@gmail.com'
    }
  },
  {
    id: 3,
    name: 'KEVIN',
    image: '/images/Kevin.jpeg',
    role: 'Fullstack Developer',
    languages: ['JavaScript', 'Python', 'React', 'Django'],
    socials: { 
      instagram: 'https://www.instagram.com/charlie/',
      github: 'https://github.com/kagoz-lab',
      linkedin: 'https://www.linkedin.com/in/kevin-kago/',
      twitter: 'https://twitter.com/KevinKago',
      email: 'mailto:kevin@example.com'
    }
  },
  {
    id: 4,
    name: 'ELVIS',
    image: '/images/Elvis.jpeg',
    role: 'UX/UI Designer',
    languages: ['Sketch', 'Figma', 'Adobe XD'],
    socials: { 
      instagram: 'https://www.instagram.com/packet_elvis/', 
      github: 'https://github.com/Elvis-Packet',
      linkedin: 'https://www.linkedin.com/in/elvis-packet/',
      twitter: 'https://x.com/ElvisMbuguasos?t=92Rk7s-SrIz-SUpbSwWnXA&s=09',
      email: 'elvismb3@gmail.com'
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
                <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaInstagram size={30} color="#E4405F" />
                </a>
              )}
              {member.socials.github && (
                <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaGithub size={30} color="#333" />
                </a>
              )}
              {member.socials.linkedin && (
                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaLinkedin size={30} color="#0077B5" />
                </a>
              )}
              {member.socials.twitter && (
                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaXTwitter size={30} color="black" />
                </a>
              )}
              {member.socials.email && (
                <a href={member.socials.email} className="social-icon">
                  <FaEnvelope size={30} color="#D44638" />
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
