import React, { useState } from 'react';
import './JobSidebar.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const JobSidebar = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedinUrl: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch(`${API_BASE_URL}/job/${job.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Başvurunuz başarıyla gönderildi!' });
        setFormData({ name: '', email: '', linkedinUrl: '' });
      } else {
        setMessage({ type: 'error', text: data.error || 'Bir hata oluştu' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Bağlantı hatası. Lütfen tekrar deneyin.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="sidebar-overlay" onClick={onClose}></div>
      <div className="job-sidebar">
        <button className="sidebar-close" onClick={onClose}>×</button>
        <h2 className="sidebar-title">
          <a href={job.url} target="_blank" rel="noopener noreferrer">
            {job.title}
          </a>
        </h2>
        <form onSubmit={handleSubmit} className="job-form">
          <div className="form-group">
            <label htmlFor="name">İsim *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Adınız ve soyadınız"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="ornek@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="linkedinUrl">LinkedIn Profil URL *</label>
            <input
              type="url"
              id="linkedinUrl"
              name="linkedinUrl"
              value={formData.linkedinUrl}
              onChange={handleChange}
              required
              placeholder="https://linkedin.com/in/profil"
            />
          </div>
          {message.text && (
            <div className={`form-message ${message.type}`}>
              {message.text}
            </div>
          )}
          <button type="submit" className="submit-btn" disabled={submitting}>
            {submitting ? 'Gönderiliyor...' : 'Başvur'}
          </button>
        </form>
      </div>
    </>
  );
};

export default JobSidebar;