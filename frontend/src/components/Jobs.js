import React, { useState, useEffect } from 'react';
import JobSidebar from './JobSidebar';
import './Jobs.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}/jobs`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Veri yüklenemedi');
        }
        return response.json();
      })
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
    setSelectedJob(null);
  };

  if (loading) {
    return (
      <section id="jobs" className="jobs-section">
        <div className="container">
          <h2>İş İlanları</h2>
          <div className="loading">Yükleniyor...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="jobs" className="jobs-section">
        <div className="container">
          <h2>İş İlanları</h2>
          <div className="error">Hata: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="jobs" className="jobs-section">
        <div className="container">
          <h2>İş İlanları</h2>
          <div className="jobs-list">
            {jobs.map(job => (
              <div 
                key={job.id} 
                className="job-card"
                onClick={() => handleJobClick(job)}
              >
                <h3 className="job-title">{job.title}</h3>
                <span className="job-click-hint">Detaylar için tıklayın →</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {sidebarOpen && selectedJob && (
        <JobSidebar 
          job={selectedJob} 
          onClose={handleCloseSidebar}
        />
      )}
    </>
  );
};

export default Jobs;