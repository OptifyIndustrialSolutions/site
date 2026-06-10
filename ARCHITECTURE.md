# Project Architecture & File Structure

## Overview

This is a **modular, static-site landing page** for Optify built with:
- **HTML5** for semantic structure
- **CSS3** with custom properties (variables)
- **Vanilla JavaScript** (no frameworks)
- **GitHub Pages** compatible

The site is production-ready, performant, and designed for ease of maintenance and future enhancements.

---

## File Structure Explained

```
website_review/
│
├── .github/
│   └── instructions/
│       └── meta_prompt.instructions.md    # Brand guidelines & content strategy
│
├── docs/                                   # ← GITHUB PAGES ROOT (everything here)
│   ├── index.html                          # Main landing page
│   ├── _config.yml                         # Jekyll/GitHub Pages config
│   ├── .gitignore                          # Git ignore rules
│   ├── package.json                        # npm dependencies & scripts
│   ├── .stylelintrc                        # CSS linting config
│   ├── README.md                           # Full documentation
│   ├── QUICKSTART.md                       # Developer quick start
│   │
│   ├── css/
│   │   ├── variables.css                   # Design tokens (colors, fonts, spacing)
│   │   ├── base.css                        # Global styles, typography, forms
│   │   ├── layout.css                      # Grid, flexbox, utilities
│   │   └── components.css                  # Buttons, cards, tables, etc.
│   │
│   ├── js/
│   │   ├── main.js                         # Entry point, initialization, scroll spy
│   │   ├── navigation.js                   # Mobile menu, smooth scroll
│   │   ├── form.js                         # Form validation & submission
│   │   └── analytics.js                    # Event tracking, analytics
│   │
│   ├── config/
│   │   └── content.js                      # Centralized copy (all text on site)
│   │
│   ├── components/                         # Reserved for modular HTML components
│   │   (empty - for future modularization)
│   │
│   └── assets/
│       ├── images/                         # Placeholder for images
│       └── svg/                            # Placeholder for inline SVGs
│
└── DEPLOYMENT.md                           # Deployment guide (root level)
```

---

## CSS Architecture (Cascade-Driven)

### `variables.css` (Design Tokens)
Defines all reusable values:
- 6 color variables (primary, secondary, accent, states)
- 10 font sizes (xs to 5xl) with 1.333 scale
- 10 spacing units (multiples of 4px)
- 2 font families (sans-serif, monospace)
- 5 breakpoints for responsive design
- Shadows, borders, transitions

**Purpose**: Single source of truth. Change a variable once, applies everywhere.

**Dark Mode Support**: Optional prefers-color-scheme media query.

### `base.css` (Global Styles)
Applies base styles to all elements:
- Reset margins/padding, box-sizing
- Body typography and background
- All heading levels
- Paragraph styling
- Link colors and states
- Form elements (input, textarea, select)
- Code blocks
- Accessibility features (focus states, sr-only)

**Purpose**: Consistent baseline across all pages.

### `layout.css` (Layout Utilities)
Provides layout building blocks:
- `.container` - Max-width wrapper
- Grid system (1-4 columns with responsive collapse)
- Flexbox utilities (.flex, .flex--center, .gap-*)
- Spacing utilities (mt-*, mb-*, px-*, py-*)
- Text utilities (.text-center, .text-muted, etc.)
- Visibility utilities (.hidden, .show-mobile)

**Purpose**: Build layouts without custom CSS.

### `components.css` (Component Styles)
Styled components used throughout:
- **Navigation**: Sticky header, mobile hamburger
- **Buttons**: Primary, secondary, small, block variants
- **Cards**: Hover effects, shadows
- **Forms**: Input states, error messages
- **Tables**: Parameter display
- **Lists**: Checklists, steps, accordions
- **Boxes**: Highlight boxes
- **Footer**: Dark background, links

**Purpose**: Reusable, styled components.

---

## JavaScript Architecture (Module-Based)

### `main.js` (Entry Point)
```javascript
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupForm();
  setupAnalytics();
  initializeScrollspy();
})
```

Responsibilities:
- Initialize all modules
- Set up scroll spy (highlight current section in nav)
- Log page metadata (development only)
- Handle global errors

**Imports**: navigation.js, form.js, analytics.js

### `navigation.js` (Menu & Scroll)
Handles user interactions:
- Toggle mobile hamburger menu
- Close menu on link click or Escape key
- Smooth scroll to sections
- Highlight active nav items

**Functions**:
- `setupNavigation()` - Initialize event listeners
- `smoothScroll(target)` - Scroll to element
- `setActiveNavItem(href)` - Highlight nav item

### `form.js` (Form Handling)
Manages contact form:
- Real-time field validation
- Form submission with loading state
- Error/success messaging
- Analytics event tracking

**Functions**:
- `setupForm()` - Initialize form listeners
- `handleFormSubmit(e)` - Process submission
- `validateField(field)` - Single field validation
- `validateForm(form)` - Full form validation
- `sendFormData(data)` - POST to backend

**Expected Backend Response**:
```json
{ "success": true, "message": "Optional message" }
```

### `analytics.js` (Tracking)
Tracks user behavior:
- Page views
- CTA clicks
- Section views (when scrolled into view)
- Scroll depth (25%, 50%, 75%, 100%)
- Link clicks

**Functions**:
- `setupAnalytics()` - Initialize tracking
- `trackEvent(eventName, data)` - Send custom event
- `trackPageView()` - Track page load
- `trackScrollDepth()` - Track scroll %
- `trackSectionViews()` - Track section visibility

**Analytics Provider**: Google Analytics (via gtag)

---

## Content Configuration (`config/content.js`)

All copywriting text lives here, organized by section:

```javascript
export const content = {
  site: { title, description, url, email, ... },
  navigation: { items, cta },
  hero: { headline, subheadline, trustLine, cta },
  problem: { headline, copy },
  whatOptifyDoes: { headline, intro, cards[] },
  containedDeployment: { headline, copy, checklist[] },
  architecture: { headline, copy },
  maintenance: { headline, copy, highlight },
  engineeringVisibility: { headline, copy, parameters[] },
  existingControlSystems: { headline, copy, highlight },
  validationPath: { headline, copy, steps[] },
  finalCta: { headline, copy, cta },
  contact: { headline, fields[] },
  footer: { company, location, email, tagline, links[] }
}
```

**Benefits**:
- Change copy once, reflects everywhere
- Easy CMS integration (swap JS object with API)
- Separation of content from HTML
- Supports multiple languages (i18n-ready)

---

## HTML Structure (index.html)

Single-page app with 11 major sections:

1. **Navigation** - Sticky header
2. **Hero** - Value prop, CTA, architecture visual
3. **Problem** - Why optimization fails, timeline visual
4. **What Optify Does** - 4-card feature overview
5. **Contained Deployment** - Safety guarantees, checklist
6. **Architecture** - System design, context flow
7. **Maintenance** - Reset & Learn workflow
8. **Engineering Visibility** - Parameter table
9. **Existing Systems** - Compatibility messaging
10. **Validation Path** - 6-step deployment
11. **Contact** - Form & final CTA
12. **Footer** - Company info, links

### Key HTML Patterns

**Section Structure**:
```html
<section id="section-id">
  <div class="container">
    <h2>Headline</h2>
    <!-- Content -->
  </div>
</section>
```

**Cards**:
```html
<div class="card">
  <div class="card-icon">📊</div>
  <h4 class="card-title">Title</h4>
  <p class="card-text">Description</p>
</div>
```

**Form Fields**:
```html
<div class="form-group">
  <label for="name" class="form-required">Name</label>
  <input type="text" id="name" name="name" required>
  <div class="form-error"></div>
</div>
```

**Steps**:
```html
<ul class="steps">
  <li><h4>Title</h4><p>Description</p></li>
  <li><h4>Title</h4><p>Description</p></li>
</ul>
```

---

## Responsive Design Strategy

### Breakpoints
- **Mobile**: < 640px (default, mobile-first)
- **Tablet**: 640px - 1024px (2-column grids)
- **Desktop**: 1024px+ (full layouts)
- **Large**: 1280px+ (max container width)

### Mobile Behavior
- Navigation: Sticky but hamburger menu on mobile
- Grid: Single column on mobile, multi-column on desktop
- Images: Scale down, don't shrink
- Forms: Full-width inputs
- Tables: Accordion display on mobile (via CSS)

### Testing Breakpoints
Use Chrome DevTools device toolbar:
- iPhone SE (375px)
- iPad (768px)
- Desktop (1024px+)

---

## Performance Characteristics

### Page Load Budget
- **Target**: < 2 seconds on 4G
- **Current**: ~300KB HTML/CSS/JS (uncompressed)
- **Optimizations**: 
  - Minified CSS & JS
  - Compressed images
  - Lazy loading for images (native)

### Lighthouse Targets
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

### Key Metrics
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.5s

---

## SEO Strategy

### Page Metadata
- **Title**: 60 characters, keyword-rich
- **Meta Description**: 160 characters, compelling
- **Open Graph**: og:title, og:description, og:type, og:url
- **Canonical**: Implicit (single page)

### Structured Data (Optional)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Optify",
  "description": "...",
  "url": "https://optify.io"
}
```

### Keywords
Target: industrial process optimization, supervisory optimizer, process drift detection, edge control, local digital twin

### Link Building
- Encourage industrial tech blogs to link
- Submit to relevant directories
- Guest content on industry publications

---

## Security Considerations

### HTTPS
- Enforced on all platforms
- Auto-renewal of certificates

### Headers
```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### Form Security
- CSRF token (if backend required)
- Email validation
- Rate limiting on backend
- No sensitive data in URL

### Dependencies
- Minimal external dependencies
- Regular npm audit
- No user input in DOM (XSS prevention)

---

## Accessibility (WCAG 2.1 AA)

### Color Contrast
- Text: 4.5:1 minimum (normal text)
- Buttons: 3:1 minimum (large text)

### Keyboard Navigation
- All interactive elements focusable
- Focus visible style (2px outline)
- Escape key closes menus
- Tab order logical

### Screen Readers
- Semantic HTML5 elements
- ARIA labels where needed
- `sr-only` class for hidden text
- Image alt attributes

### Responsive Text
- Base font size: 16px
- Line height: 1.5 (relaxed)
- No tiny text (< 12px)

---

## Future Enhancements

### Phase 1 (Low Priority)
- Add case study pages
- Blog section for technical articles
- FAQ accordion section
- Video testimonials

### Phase 2 (Medium Priority)
- E-book download with email capture
- Interactive demo calculator
- Webinar registration form
- Multilingual support (i18n)

### Phase 3 (High Priority)
- Headless CMS integration (Contentful, Strapi)
- API documentation portal
- Customer success stories
- Advanced analytics (attribution modeling)

### Phase 4 (Strategic)
- Personalization engine
- A/B testing framework
- Chatbot for pre-sales qualification
- Native mobile apps

---

## Maintenance Checklist

### Monthly
- [ ] Verify all links work
- [ ] Check analytics trends
- [ ] Review form submissions
- [ ] Scan for broken images

### Quarterly
- [ ] Update dependencies (npm)
- [ ] Run Lighthouse audit
- [ ] Check search console for errors
- [ ] Review and respond to feedback

### Annually
- [ ] Full accessibility audit
- [ ] Security scan (npm audit, OWASP ZAP)
- [ ] Refresh brand assets/images
- [ ] Competitive analysis
- [ ] Update copy as needed

---

## Contact & Support

- **Primary Contact**: validation@optify.io
- **Technical Issues**: GitHub Issues
- **Feature Requests**: GitHub Discussions
- **Security Concerns**: Email security@optify.io

---

**Document Last Updated**: June 10, 2026  
**Version**: 1.0.0  
**Maintainer**: Optify Engineering Team
