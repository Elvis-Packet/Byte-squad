// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profiles from './pages/Profiles';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  // Initialize dark mode based on localStorage (default: light)
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');
  const [visitorCount, setVisitorCount] = useState(0);

  // Update body class and localStorage on dark mode change
  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Simple visitor counter stored in localStorage
  useEffect(() => {
    const count = localStorage.getItem('visitors') || 0;
    const newCount = parseInt(count, 10) + 1;
    localStorage.setItem('visitors', newCount);
    setVisitorCount(newCount);
  }, []);

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark' : 'light'}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} visitorCount={visitorCount} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
