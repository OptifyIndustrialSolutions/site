// analytics.js - Analytics & Event Tracking

export function setupAnalytics() {
  trackPageView();
  setupEventListeners();
  trackScrollDepth();
  trackSectionViews();
}

const isDevEnvironment =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

/**
 * Track page view
 */
function trackPageView() {
  if (window.gtag) {
    window.gtag('pageview', {
      page_title: document.title,
      page_path: window.location.pathname,
    });
  }
}

/**
 * Setup event listeners for CTAs and interactions
 */
function setupEventListeners() {
  // Track CTA button clicks
  document.querySelectorAll('.btn-primary').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const text = btn.textContent.trim();
      trackEvent('cta_click', {
        cta_text: text,
        cta_location: btn.closest('section')?.id || 'unknown',
      });
    });
  });

  // Track secondary button clicks
  document.querySelectorAll('.btn-secondary').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const text = btn.textContent.trim();
      trackEvent('secondary_click', {
        button_text: text,
        button_location: btn.closest('section')?.id || 'unknown',
      });
    });
  });

  // Track link clicks in content
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('href');
      trackEvent('internal_link_click', {
        link_text: link.textContent.trim(),
        target_section: target,
      });
    });
  });

  // Track external link clicks
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      trackEvent('external_link_click', {
        link_text: link.textContent.trim(),
        link_url: link.getAttribute('href'),
      });
    });
  });

  // Track technical note download
  const downloadLink = document.querySelector('a[href$=".pdf"]');
  if (downloadLink) {
    downloadLink.addEventListener('click', () => {
      trackEvent('technical_note_download');
    });
  }
}

/**
 * Track scroll depth
 */
function trackScrollDepth() {
  let maxScrolled = 0;
  const thresholds = [25, 50, 75, 100];

  window.addEventListener('scroll', () => {
    const scrollPercentage = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    maxScrolled = Math.max(maxScrolled, scrollPercentage);

    thresholds.forEach((threshold) => {
      if (maxScrolled >= threshold && !sessionStorage.getItem(`scrolled_${threshold}`)) {
        trackEvent('scroll_depth', {
          scroll_percentage: threshold,
        });
        sessionStorage.setItem(`scrolled_${threshold}`, 'true');
      }
    });
  });
}

/**
 * Track when sections come into view
 */
function trackSectionViews() {
  const sections = document.querySelectorAll('section[id]');

  const observerOptions = {
    threshold: 0.25,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute('id');
        const sectionTitle = entry.target.querySelector('h1, h2, h3')?.textContent || sectionId;

        trackEvent('section_view', {
          section_id: sectionId,
          section_title: sectionTitle,
        });

        // Stop observing this section after it's been viewed
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/**
 * Track custom event
 */
export function trackEvent(eventName, data = {}) {
  if (typeof window !== 'undefined') {
    // Google Analytics
    if (window.gtag) {
      window.gtag('event', eventName, data);
    }

    // Custom console logging for development
    if (isDevEnvironment) {
      console.log(`📊 Event: ${eventName}`, data);
    }
  }
}

/**
 * Track time on page
 */
export function trackTimeOnPage() {
  const startTime = Date.now();

  window.addEventListener('beforeunload', () => {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    trackEvent('page_time', {
      time_seconds: timeOnPage,
    });
  });
}
