// fullscreen-mobile.js - Mobile Fullscreen & Auto-Advance Sections

/**
 * List of sections in order for navigation
 */
const SECTIONS = [
  'hero',
  'problem',
  'what-optify-does',
  'contained-deployment',
  'architecture',
  'maintenance',
  'engineering-visibility',
  'existing-systems',
  'validation',
  'final-cta',
  'contact',
];

let isFullscreenActive = false;
let currentSectionIndex = 0;
let autoAdvanceTimer = null;
let clickListenerActive = false;

/**
 * Check if device is in mobile view
 */
function isMobileView() {
  return window.innerWidth < 768;
}

/**
 * Update active section display in fullscreen mode
 */
function updateActiveSection() {
  SECTIONS.forEach((sectionId, index) => {
    const section = document.getElementById(sectionId);
    if (section) {
      if (index === currentSectionIndex) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    }
  });

  // Update data attribute for section counter
  document.body.setAttribute('data-section', `${currentSectionIndex + 1}/${SECTIONS.length}`);
}

/**
 * Trigger fullscreen for the entire document
 */
async function enterFullscreen() {
  try {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
      await elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      // Safari
      await elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      // IE11
      await elem.msRequestFullscreen();
    }

    isFullscreenActive = true;
    document.body.classList.add('fullscreen-mobile-active');
    clickListenerActive = false;
    currentSectionIndex = 0;
    updateActiveSection();
    startAutoAdvance();
  } catch (err) {
    console.error('Fullscreen request failed:', err);
  }
}

/**
 * Exit fullscreen
 */
function exitFullscreen() {
  if (document.fullscreenElement || document.webkitFullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      // Safari
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // IE11
      document.msExitFullscreen();
    }
  }

  isFullscreenActive = false;
  document.body.classList.remove('fullscreen-mobile-active');
  document.body.removeAttribute('data-section');
  stopAutoAdvance();
  currentSectionIndex = 0;
  
  // Remove active class from all sections
  SECTIONS.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.remove('active');
    }
  });

  setupClickListener();
}

/**
 * Navigate to a specific section by index
 */
function navigateToSection(index) {
  if (index < 0 || index >= SECTIONS.length) {
    return;
  }

  currentSectionIndex = index;
  updateActiveSection();
}

/**
 * Navigate to next section
 */
function nextSection() {
  if (currentSectionIndex < SECTIONS.length - 1) {
    navigateToSection(currentSectionIndex + 1);
  }
}

/**
 * Navigate to previous section
 */
function previousSection() {
  if (currentSectionIndex > 0) {
    navigateToSection(currentSectionIndex - 1);
  }
}

/**
 * Start auto-advance timer (10 seconds per section)
 */
function startAutoAdvance() {
  stopAutoAdvance(); // Clear any existing timer

  autoAdvanceTimer = setInterval(() => {
    if (currentSectionIndex < SECTIONS.length - 1) {
      nextSection();
    } else {
      // At last section - exit fullscreen
      exitFullscreen();
    }
  }, 10000); // 10 seconds
}

/**
 * Stop auto-advance timer
 */
function stopAutoAdvance() {
  if (autoAdvanceTimer) {
    clearInterval(autoAdvanceTimer);
    autoAdvanceTimer = null;
  }
}

/**
 * Handle back button / ESC key in fullscreen mode
 */
function handleBackButton() {
  if (!isFullscreenActive) return;

  if (currentSectionIndex === SECTIONS.length - 1) {
    // At last section - exit fullscreen
    exitFullscreen();
  } else {
    // Go to previous section
    previousSection();
  }
}

/**
 * Handle fullscreen change event
 */
function handleFullscreenChange() {
  const isCurrentlyFullscreen = !!(
    document.fullscreenElement || 
    document.webkitFullscreenElement ||
    document.msFullscreenElement
  );

  if (!isCurrentlyFullscreen && isFullscreenActive) {
    exitFullscreen();
  }
}

/**
 * Setup click listener for activation
 */
function setupClickListener() {
  if (clickListenerActive || !isMobileView()) {
    return;
  }

  clickListenerActive = true;

  const clickHandler = () => {
    if (!isFullscreenActive && isMobileView()) {
      document.removeEventListener('click', clickHandler);
      enterFullscreen();
    }
  };

  document.addEventListener('click', clickHandler);
}

/**
 * Initialize mobile fullscreen functionality
 */
export function setupMobileFullscreen() {
  if (!isMobileView()) {
    return; // Only activate on mobile
  }

  // Setup initial click listener
  setupClickListener();

  // Handle escape key / back button
  document.addEventListener('keydown', (e) => {
    if (isFullscreenActive && (e.key === 'Escape' || e.key === 'Backspace')) {
      e.preventDefault();
      handleBackButton();
    }
  });

  // Handle fullscreen change (user exits via browser UI)
  document.addEventListener('fullscreenchange', handleFullscreenChange);
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
  document.addEventListener('msfullscreenchange', handleFullscreenChange);

  // Handle window resize to re-check if still mobile
  window.addEventListener('resize', () => {
    if (!isMobileView() && isFullscreenActive) {
      exitFullscreen();
    }
  });
}

