// main.js - Application Entry Point

import { content } from '../config/content.js';
import { setupNavigation } from './navigation.js';
import { setupForm } from './form.js';
import { setupAnalytics } from './analytics.js';

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupForm();
  setupAnalytics();
  initializeScrollspy();
  logPageMetadata();
});

/**
 * Scroll spy to highlight current section in navigation
 */
function initializeScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a');

  const observerOptions = {
    threshold: 0.3,
    rootMargin: '-100px 0px -66%',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/**
 * Log page metadata for verification
 */
function logPageMetadata() {
  if (process.env.NODE_ENV !== 'production') {
    console.log('=== Optify Landing Page ===');
    console.log(`Title: ${content.site.title}`);
    console.log(`URL: ${content.site.url}`);
    console.log(`Contact: ${content.site.email}`);
  }
}

// Add global error handler for form submissions
window.addEventListener('error', (event) => {
  console.error('An error occurred:', event.error);
});
