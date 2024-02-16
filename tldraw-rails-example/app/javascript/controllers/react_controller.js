import { Controller } from '@hotwired/stimulus';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../components/App';

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log('React controller connected');
    const app = document.getElementById('app');
    createRoot(app).render(<App />);
  }
}
