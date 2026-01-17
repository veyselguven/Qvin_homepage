import React from 'react';
import './Navigation.css';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">Company</div>
        <ul className="nav-menu">
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('values')}>Values</button></li>
          <li><button onClick={() => scrollToSection('team')}>Team</button></li>
          <li><button onClick={() => scrollToSection('jobs')}>Jobs</button></li>
          <li><button onClick={() => scrollToSection('mission')}>Mission</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;