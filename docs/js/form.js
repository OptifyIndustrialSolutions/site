// form.js - Form Handling

export function setupForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  form.addEventListener('submit', handleFormSubmit);

  // Add real-time validation
  const inputs = form.querySelectorAll('input, textarea, select');
  inputs.forEach((input) => {
    input.addEventListener('blur', () => validateField(input));
  });
}

/**
 * Handle form submission
 */
async function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const formData = new FormData(form);

  // Validate all fields
  const isValid = validateForm(form);
  if (!isValid) {
    displayMessage('Please fill in all required fields.', 'error');
    return;
  }

  // Disable submit button
  submitBtn.disabled = true;
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Submitting...';

  try {
    // Send form data to backend
    const response = await sendFormData(Object.fromEntries(formData));

    if (response.success) {
      displayMessage(response.message || 'Thank you. Optify will review the process context and respond with the next validation step.', 'success');
      form.reset();
      trackEvent('validation_form_submit', {
        company: formData.get('company'),
      });
    } else {
      displayMessage(response.message || 'An error occurred. Please try again.', 'error');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    displayMessage('An error occurred. Please try again or contact us directly at validation@optify.io', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
}

/**
 * Validate a single field
 */
function validateField(field) {
  const value = field.value.trim();
  const isRequired = field.hasAttribute('required');
  const errorElement = field.parentElement.querySelector('.form-error');

  if (isRequired && !value) {
    field.classList.add('error');
    if (errorElement) {
      errorElement.textContent = 'This field is required.';
    }
    return false;
  }

  if (field.type === 'email' && value && !isValidEmail(value)) {
    field.classList.add('error');
    if (errorElement) {
      errorElement.textContent = 'Please enter a valid email address.';
    }
    return false;
  }

  field.classList.remove('error');
  if (errorElement) {
    errorElement.textContent = '';
  }
  return true;
}

/**
 * Validate entire form
 */
function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input, textarea, select');

  inputs.forEach((input) => {
    if (!validateField(input)) {
      isValid = false;
    }
  });

  return isValid;
}

/**
 * Validate email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Send form data to backend
 */
async function sendFormData(data) {
  // Replace with your actual backend endpoint
  const endpoint = '/api/validation-request';

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

/**
 * Display form message (success or error)
 */
function displayMessage(message, type) {
  const form = document.querySelector('#contact-form');
  const messageElement = form.querySelector('.form-message');

  const newMessage = document.createElement('div');
  newMessage.className = `${type}-message`;
  newMessage.textContent = message;

  if (messageElement) {
    messageElement.replaceWith(newMessage);
  } else {
    form.insertBefore(newMessage, form.firstChild);
  }

  newMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Track form submission event for analytics
 */
function trackEvent(eventName, data = {}) {
  if (window.gtag) {
    window.gtag('event', eventName, data);
  }
}
