// navigation.js - Navigation Menu Handling

export function setupNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  if (!hamburger) return;

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    updateHamburgerState();
  });

  // Close menu when link is clicked
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      updateHamburgerState();
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
      navMenu.classList.remove('active');
      updateHamburgerState();
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      navMenu.classList.remove('active');
      updateHamburgerState();
    }
  });
}

/**
 * Update hamburger icon state
 */
function updateHamburgerState() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (navMenu.classList.contains('active')) {
    hamburger.setAttribute('aria-expanded', 'true');
  } else {
    hamburger.setAttribute('aria-expanded', 'false');
  }
}

/**
 * Smooth scroll handling for anchor links
 */
export function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    const headerHeight = document.querySelector('header').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });
  }
}

/**
 * Add active state styling to current navigation item
 */
export function setActiveNavItem(href) {
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === href) {
      link.classList.add('active');
    }
  });
}
