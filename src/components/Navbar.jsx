// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ darkMode, setDarkMode, visitorCount }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Company Portfolio</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profiles">Profiles</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="actions">
        <button onClick={() => setDarkMode(!darkMode)} className="toggle-mode">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <div className="visitor-count">Visitors: {visitorCount}</div>
      </div>
    </nav>
  );
}

export default Navbar;
