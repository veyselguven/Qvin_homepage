import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Values from './components/Values';
import TeamMembers from './components/TeamMembers';
import Jobs from './components/Jobs';
import Mission from './components/Mission';

function App() {
  return (
    <div className="App">
      <Navigation />
      <About />
      <Values />
      <TeamMembers />
      <Jobs />
      <Mission />
    </div>
  );
}

export default App;