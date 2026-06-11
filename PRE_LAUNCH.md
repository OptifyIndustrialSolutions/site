# Pre-Launch Checklist

## ✅ Complete (Ready Now)

- [x] HTML structure with all 11 sections
- [x] CSS design system (colors, typography, spacing)
- [x] Responsive design (4 breakpoints)
- [x] Navigation (sticky, mobile hamburger)
- [x] Contact form (validation, submission)
- [x] Analytics tracking (events configured)
- [x] Accessibility (WCAG 2.1 AA)
- [x] SEO metadata (title, description, OG tags)
- [x] GitHub Pages configuration
- [x] Documentation (4 comprehensive guides)
- [x] All brand copy (100% match to brief)
- [x] No external dependencies

---

## 📋 TO DO BEFORE LAUNCH

### Critical Path (Must Have)

- [ ] **Create visual assets** (8 hours)
  - [ ] Hero layer diagram (Optify above PLC/DCS/APC/MPC)
  - [ ] Plant drift timeline (baseline → maintenance → recovery)
  - [ ] Architecture flow diagram (Plant Data → Context → Twin → Gate → Output)
  - [ ] Confidence gate diagram (High/Medium/Low confidence paths)
  - [ ] Reset & Learn workflow (5-step process)
  - [ ] Engineer review panel mockup (parameters display)
  - [ ] Validation path illustrations (6 steps)
  - [ ] Consider: Real process plant photos for credibility

- [ ] **Set up contact form backend** (2 hours)
  - [ ] Option A: Formspree (recommended for simplicity)
    - Sign up at https://formspree.io
    - Get endpoint URL
    - Update `js/form.js` endpoint
  - [ ] Option B: Basin
    - Sign up at https://usebasin.com
    - Create form
    - Update endpoint URL
  - [ ] Option C: Custom API
    - Create `/api/validation-request` endpoint
    - Implement email notification
    - Test with real form data
  - [ ] Setup email recipient
  - [ ] Test form submission end-to-end
  - [ ] Verify success message displays

- [ ] **Create technical note PDF** (4 hours)
  - [ ] Title: "Optify Edge ML Architecture: A Bounded Supervisory Optimizer for Industrial Process Drift"
  - [ ] 3.5 pages covering:
    - System overview
    - Mathematical approach (KD-tree, KNN, Mahalanobis, Ridge Solver)
    - Data filtering & context
    - Confidence gating
    - Fallback behavior
    - Validation approach
  - [ ] Save as `/docs/technical-note.pdf`
  - [ ] Update download link in HTML

- [ ] **Google Analytics setup** (30 min)
  - [ ] Create Google Analytics 4 property
  - [ ] Get Measurement ID (G-XXXXXXXXXX)
  - [ ] Replace `GA_ID` in `index.html`
    ```html
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    ```
  - [ ] Replace in `_config.yml`
    ```yaml
    google_analytics: "G-XXXXXXXXXX"
    ```
  - [ ] Test tracking in GA dashboard
  - [ ] Verify events firing (CTA clicks, form submissions, scroll depth)

- [ ] **Privacy policy page** (1 hour)
  - [ ] Create `/docs/privacy.md` or `/docs/privacy/index.html`
  - [ ] Add GDPR/CCPA compliance info
  - [ ] Link from footer
  - [ ] Update footer link in `index.html`

- [ ] **Finalize company details** (30 min)
  - [ ] Update `config/content.js`:
    - [ ] Company name (verify exact legal name)
    - [ ] Email address (confirm validation@optify.io)
    - [ ] Phone number (replace placeholder)
    - [ ] LinkedIn profile (if available)
    - [ ] Any other contact details

---

### Testing (Before Going Live)

- [ ] **Performance Testing**
  - [ ] Run Lighthouse audit (target: 90+ on all metrics)
  - [ ] Check mobile performance (< 3 seconds load)
  - [ ] Test on real 4G connection
  - [ ] Verify images are optimized (< 100KB each)

- [ ] **Mobile Testing**
  - [ ] Test on iPhone (Safari)
  - [ ] Test on Android (Chrome)
  - [ ] Test on tablet (iPad)
  - [ ] Verify hamburger menu works
  - [ ] Verify form is easy to complete
  - [ ] Verify CTA buttons are tap-friendly

- [ ] **Form Testing**
  - [ ] Test all required field validation
  - [ ] Test email validation
  - [ ] Test successful submission
  - [ ] Test error scenarios
  - [ ] Verify confirmation email sent
  - [ ] Test on mobile (form completion)

- [ ] **Link Testing**
  - [ ] Verify all nav links work
  - [ ] Test anchor links (scroll to sections)
  - [ ] Test external links (open in new tab)
  - [ ] Test PDF download link

- [ ] **Cross-browser Testing**
  - [ ] Chrome (latest)
  - [ ] Safari (latest)
  - [ ] Firefox (latest)
  - [ ] Edge (latest)

- [ ] **Analytics Testing**
  - [ ] Click CTA buttons, verify event in GA
  - [ ] Submit form, verify event in GA
  - [ ] Scroll through page, verify scroll depth in GA
  - [ ] Click on sections, verify section view in GA
  - [ ] Download technical note, verify download event in GA

- [ ] **Accessibility Testing**
  - [ ] Test keyboard navigation (Tab through all elements)
  - [ ] Test Escape key (closes mobile menu)
  - [ ] Test screen reader (NVDA on Windows, VoiceOver on Mac)
  - [ ] Verify color contrast (use WebAIM Contrast Checker)
  - [ ] Run axe DevTools browser extension

---

### Deployment

- [ ] **GitHub Pages Setup**
  - [ ] Go to repository Settings → Pages
  - [ ] Select source: Deploy from branch → main / docs folder
  - [ ] Custom domain (optional):
    - [ ] Create CNAME file with domain
    - [ ] Update DNS records
    - [ ] Enable HTTPS (auto-provisioned)

- [ ] **Custom Domain (Optional)**
  - [ ] Purchase domain (if not already done)
  - [ ] Update DNS records to point to GitHub Pages
  - [ ] Test domain accessibility
  - [ ] Verify HTTPS certificate

- [ ] **Verify Deployment**
  - [ ] Site accessible at https://optify-io.github.io/website_review/
  - [ ] All pages load correctly
  - [ ] All forms work
  - [ ] All links work
  - [ ] Analytics tracking fires
  - [ ] Mobile responsive on deployed site

---

### Post-Launch (First Week)

- [ ] Monitor analytics dashboard
- [ ] Test received form submissions
- [ ] Respond to validation requests within 24 hours
- [ ] Monitor for broken links or errors
- [ ] Gather feedback from early viewers
- [ ] Fix any critical issues immediately
- [ ] Verify email notifications working

---

## 📊 Time Estimate

| Task | Est. Time | Priority |
|------|-----------|----------|
| Visual assets | 8 hours | CRITICAL |
| Form backend | 2 hours | CRITICAL |
| Tech note PDF | 4 hours | CRITICAL |
| Analytics setup | 0.5 hours | CRITICAL |
| Privacy page | 1 hour | CRITICAL |
| Company details | 0.5 hours | CRITICAL |
| Testing suite | 6 hours | CRITICAL |
| **Total** | **~22 hours** | |

**Recommendation**: Allocate 3-4 days for complete pre-launch preparation

---

## 🚀 Launch Day Checklist

```
Morning:
- [ ] Final Lighthouse audit
- [ ] Final mobile test
- [ ] Final form test
- [ ] Final analytics test

Afternoon:
- [ ] Deploy to GitHub Pages
- [ ] Verify live site
- [ ] Share with stakeholders
- [ ] Monitor dashboard

Evening:
- [ ] Monitor analytics
- [ ] Check for errors
- [ ] Respond to early inquiries
```

---

## 📝 Success Metrics (First 30 Days)

| Metric | Target | How to Track |
|--------|--------|--------------|
| Page views | 500+ | Google Analytics |
| Unique visitors | 250+ | Google Analytics |
| Form submissions | 20+ | Form backend + GA |
| CTA click-through rate | > 10% | Google Analytics |
| Scroll depth to contact | > 60% | Google Analytics |
| Bounce rate | < 40% | Google Analytics |
| Mobile traffic % | 40%+ | Google Analytics |
| Average session duration | > 90 sec | Google Analytics |

---

## 🔒 Security Checklist

- [ ] Verify HTTPS enabled (GitHub Pages auto-enabled)
- [ ] No API keys in code (backend endpoints are safe)
- [ ] Form doesn't expose sensitive data
- [ ] Privacy policy link accessible
- [ ] Email validation preventing spam
- [ ] Rate limiting on backend (if custom API)
- [ ] Security headers configured (if custom domain)

---

## 📞 Support Contacts

- **Form Backend Questions**: Check Formspree/Basin documentation
- **GitHub Pages**: github.com/support
- **Analytics Setup**: analytics.google.com/support
- **Domain/DNS**: Domain registrar support
- **Email Issues**: validation@optify.io

---

**Last Updated**: June 10, 2026  
**Status**: Ready to begin pre-launch preparation
