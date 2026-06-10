# Optify Landing Page

A modular, GitHub Pages-compatible website for Optify—a bounded supervisory optimizer for industrial process drift.

## Project Structure

```
docs/
├── index.html                 # Main landing page
├── _config.yml               # GitHub Pages configuration
├── css/
│   ├── variables.css         # Design tokens & color palette
│   ├── base.css              # Global typography & resets
│   ├── layout.css            # Grid, flexbox, spacing utilities
│   └── components.css        # Button, card, form, accordion styles
├── js/
│   ├── main.js               # Entry point & initialization
│   ├── navigation.js         # Mobile menu & smooth scroll
│   ├── form.js               # Form validation & submission
│   └── analytics.js          # Event tracking & analytics
├── config/
│   └── content.js            # Centralized copy & configuration
├── components/               # (Reserved for modular HTML components)
├── assets/
│   ├── images/               # Placeholder for images
│   └── svg/                  # Placeholder for inline SVGs
└── README.md                 # This file
```

## Brand Guidelines

- **Tone**: Industrial, clean, technical, conservative, high-trust
- **Colors**: Off-white backgrounds, dark text, deep industrial blue accents
- **Language**: Use "Bounded", "Supervisory", "Inspectable", "Advisory", "Physics-informed"
- **Avoid**: "Revolutionary", "AI-powered", "Self-healing", "Autonomous"
- **Primary CTA**: "Request an Engineering Validation" (not "Book a Demo")

See `.github/instructions/meta_prompt.instructions.md` for complete brand guidelines.

## Key Sections

1. **Hero** - Immediate positioning as serious, bounded, compatible with existing automation
2. **Problem** - Why optimization fails after plant changes (commissioning vs real-world)
3. **What Optify Does** - Four key capabilities (drift detection, inspectable math, advisory trims, reset & learn)
4. **Contained Deployment** - Safety guardrails and confidence gates
5. **Architecture** - Edge-resident, context-aware system design
6. **Maintenance Handling** - Disciplined re-baselining, not blind self-tuning
7. **Engineering Visibility** - Transparent, auditable parameters
8. **Existing Control Systems** - Works WITH PLC/DCS/APC/MPC, not against them
9. **Validation Path** - 6-step bounded deployment process
10. **Contact/CTA** - Form for engineering validation requests

## Styling System

### CSS Architecture

**Variables** (`variables.css`)
- Color palette (primary, secondary, accent, states)
- Typography scales (font sizes, weights, line heights)
- Spacing scale (consistent with multiples of 4px)
- Responsive breakpoints
- Shadows, borders, transitions

**Base** (`base.css`)
- Global resets and typography
- Form element styling
- Link colors and states
- Accessibility features (focus states, sr-only)

**Layout** (`layout.css`)
- Container widths and padding
- Grid and flex utilities
- Spacing utilities (mt, mb, px, py, etc.)
- Text alignment and visibility utilities

**Components** (`components.css`)
- Navigation bar (sticky, mobile hamburger)
- Buttons (primary, secondary, small, block)
- Cards with hover states
- Highlight boxes
- Checklists with checkmarks
- Parameter tables
- Forms with validation states
- Steps/workflow indicators
- Accordions
- Footer styling

### Responsive Design

- **Mobile-first** approach with breakpoints at 640px, 768px, 1024px, 1280px
- **Navigation**: Sticky on desktop, hamburger menu on mobile
- **Grid**: 4 columns desktop → 2 columns tablet → 1 column mobile
- **Performance**: CSS only, no heavy animation libraries

## JavaScript Modules

### `main.js`
- Entry point for app initialization
- Scroll spy for navigation highlighting
- Error handling and logging

### `navigation.js`
- Mobile menu toggle and close behavior
- Keyboard navigation (Escape key)
- Smooth scroll to sections
- Active nav item highlighting

### `form.js`
- Form validation (required fields, email format)
- Form submission with loading state
- Error/success messaging
- Analytics event tracking

### `analytics.js`
- Page view tracking
- CTA click tracking
- Section view tracking
- Scroll depth tracking (25%, 50%, 75%, 100%)
- Link click events

## Configuration

All page content is managed in `config/content.js`:
- Site metadata (title, description, URL, contact)
- Navigation menu items
- All section headlines and body copy
- Form fields and validation rules
- Footer information

**Benefit**: Change copy once, update everywhere. Facilitates CMS integration later.

## Development

### Local Testing

```bash
# Option 1: Simple HTTP server (Python 3)
python -m http.server 8000

# Option 2: Node.js
npx http-server docs

# Then visit: http://localhost:8000/docs/
```

### Performance Targets

- Page load: <2 seconds on desktop
- Mobile responsive: All breakpoints tested
- Lighthouse score: 90+
- No heavy animation libraries
- Compressed images and minimal JS

### Google Analytics Setup

1. Create a Google Analytics account
2. Replace `GA_ID` in:
   - `index.html` (gtag script)
   - `_config.yml` (google_analytics)

### Form Backend Integration

The contact form in `form.js` sends POST to `/api/validation-request`. 

**Update the endpoint in `js/form.js`:**
```javascript
const endpoint = '/api/validation-request'; // Change this
```

Expected response:
```json
{
  "success": true,
  "message": "Custom success message (optional)"
}
```

## Deployment

### GitHub Pages (Recommended)

1. Push code to `main` branch in `website_review` repository
2. Go to **Settings → Pages → Build and deployment**
3. Set **Source** to `Deploy from a branch`
4. Set **Branch** to `main` / `docs` folder
5. Site publishes to `https://username.github.io/website_review/`

### Custom Domain

1. Add `CNAME` file in `docs/` with your domain
2. Update DNS records to point to GitHub Pages
3. Enable HTTPS in repository settings

### Alternative: Netlify, Vercel, or Static Hosting

Since this is a static site, it can be deployed anywhere that serves HTML:
- **Netlify**: Connect Git repo, auto-deploys on push
- **Vercel**: Similar workflow to Netlify
- **AWS S3 + CloudFront**: Scalable static hosting
- **Azure Static Web Apps**: Microsoft's offering

## SEO & Metadata

- **Title**: "Optify | Supervisory Optimization for Industrial Process Drift"
- **Meta Description**: Updated in `index.html` and `_config.yml`
- **Open Graph**: Social media preview tags included
- **Keywords**: Industrial process optimization, supervisory optimizer, drift detection, etc.
- **Sitemap**: Auto-generated by Jekyll (if using plugins)

## Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Focus visible styles
- Keyboard navigation (Tab, Enter, Escape)
- Color contrast meets WCAG AA standards
- Screen reader friendly (sr-only class)

## Future Enhancements

1. **Component Library**: Extract reusable HTML into modular templates
2. **SVG Diagrams**: Replace placeholder rectangles with custom visualizations
3. **Image Optimization**: Add hero image, process photos, architecture diagrams
4. **Dynamic Content**: Connect to headless CMS (Contentful, Strapi, etc.)
5. **A/B Testing**: Experiment with CTA placement, copy variations
6. **Multi-language**: i18n support for international audiences
7. **Blog Section**: Case studies and technical documentation
8. **API Documentation**: OpenAPI/Swagger for technical integration

## Maintenance

### Updating Copy

Edit `config/content.js` and the changes automatically reflect across all sections.

### Adding New Sections

1. Create new `<section>` in `index.html` with unique ID
2. Add navigation link
3. Add corresponding styles in `components.css` if needed
4. Add content object in `config/content.js` (optional)

### Adding New Styles

- **Global tokens?** Update `variables.css`
- **Typography rule?** Add to `base.css`
- **Layout pattern?** Add utility to `layout.css`
- **Component?** Add to `components.css`

## Support & Questions

- **Email**: validation@optify.io
- **Documentation**: See `.github/instructions/meta_prompt.instructions.md`
- **Technical Note**: PDF available at `/technical-note.pdf` (to be added)

---

**Last Updated**: 2026-06-10  
**Version**: 1.0.0  
**License**: Internal Use
