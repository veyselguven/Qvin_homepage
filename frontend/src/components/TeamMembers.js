import React, { useState, useEffect } from 'react';
import './TeamMembers.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const TeamMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/team_members`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Veri yüklenemedi');
        }
        return response.json();
      })
      .then(data => {
        setMembers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="team" className="team-section">
        <div className="container">
          <h2>Ekibimiz</h2>
          <div className="loading">Yükleniyor...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="team" className="team-section">
        <div className="container">
          <h2>Ekibimiz</h2>
          <div className="error">Hata: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="team" className="team-section">
      <div className="container">
        <h2>Ekibimiz</h2>
        <div className="team-grid">
          {members.map(member => (
            <div key={member.id} className="team-card">
              <img src={member.picture} alt={member.name} className="team-image" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-title">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;