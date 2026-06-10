# Quick Start Guide

## For Developers

### 1. Clone the Repository
```bash
git clone https://github.com/optify-io/website_review.git
cd website_review
```

### 2. Navigate to Docs Folder
```bash
cd docs
```

### 3. Start Local Server

**Option A: Python (Built-in)**
```bash
python -m http.server 8000
# Visit: http://localhost:8000
```

**Option B: Node.js**
```bash
npm install
npm start
# Visit: http://localhost:8000
```

**Option C: VS Code Live Server**
- Install Live Server extension
- Right-click `index.html` → "Open with Live Server"

### 4. Make Changes

- **Copy/Content**: Edit `config/content.js`
- **Styling**: Modify CSS files in `css/` folder
- **JavaScript**: Update modules in `js/` folder
- **HTML Structure**: Edit `index.html`

### 5. Test Locally

- Desktop: Full browser window
- Mobile: Browser DevTools (Cmd+Shift+I) → Toggle device toolbar
- Performance: Lighthouse in DevTools
- Accessibility: axe DevTools browser extension

### 6. Deploy to GitHub Pages

```bash
git add docs/
git commit -m "Update landing page"
git push origin main
```

Your site will be live at: `https://optify-io.github.io/website_review/`

---

## For Content Editors

### Editing Copy Without Code

All website text is in: **`config/content.js`**

Find the section you want to edit (e.g., `hero`, `problem`, `architecture`), update the text, and refresh the browser. Changes are instant.

### Adding a New Section

1. Add content object in `config/content.js`
2. Create new `<section>` in `index.html`
3. Add navigation link
4. Add CSS styling if needed

### Form Responses

Contact form submissions go to: `/api/validation-request`

**To set up email notifications:**
1. Create a backend endpoint or use Formspree/Basin/Zapier
2. Update endpoint URL in `js/form.js`
3. Test with a test submission

---

## Common Tasks

### Change Colors

Edit `css/variables.css`:
```css
--color-accent-primary: #003d73;  /* Change this to new color */
--color-state-success: #2d7a3e;   /* Or this, etc. */
```

### Change Fonts

Edit `css/variables.css`:
```css
--font-family-sans: 'Your Font', sans-serif;
```

### Add an Image

1. Place image in `assets/images/`
2. Reference in HTML: `<img src="/assets/images/your-image.png" alt="Description">`

### Change Form Fields

Edit `config/content.js` → `contact.fields` array

### Update Navigation Menu

Edit `config/content.js` → `navigation.items` array

---

## Performance Checklist

- [ ] Lighthouse score 90+ (DevTools → Lighthouse)
- [ ] All images compressed (<100KB each)
- [ ] No unused CSS
- [ ] No console errors
- [ ] Mobile responsive (test at 375px, 768px, 1024px)
- [ ] Form submission works
- [ ] Analytics tracking fires

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Styles not loading | Clear browser cache (Cmd+Shift+Delete) or hard refresh (Cmd+Shift+R) |
| Images not showing | Check path starts with `/assets/` not `assets/` |
| Form not submitting | Check backend endpoint URL in `js/form.js` and network tab in DevTools |
| Mobile menu broken | Check hamburger state in `navigation.js` |
| Analytics not tracking | Replace `GA_ID` with actual Google Analytics ID |

---

## Resources

- **Brand Guidelines**: `.github/instructions/meta_prompt.instructions.md`
- **Full Documentation**: `README.md`
- **CSS Architecture**: `css/` folder comments
- **JavaScript Modules**: `js/` folder docstrings
- **Content Structure**: `config/content.js` comments

---

## Support

- **Questions?** Email: validation@optify.io
- **Bug Reports**: Create GitHub issue
- **Feature Requests**: Start a GitHub discussion

---

Happy building! 🏭
