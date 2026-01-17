import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// "No checkout popup config" hatasını suppress et (React Scripts 5.0.1 bilinen hatası)
window.addEventListener('unhandledrejection', (event) => {
  if (event.reason && event.reason.message && event.reason.message.includes('checkout popup config')) {
    event.preventDefault();
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);