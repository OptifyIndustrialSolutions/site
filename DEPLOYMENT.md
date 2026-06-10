# Deployment Guide

## GitHub Pages (Recommended)

### Step 1: Repository Setup

The website is in the `docs/` folder which is compatible with GitHub Pages' build configuration.

### Step 2: Enable GitHub Pages

1. Go to repository **Settings**
2. Scroll to **Pages** section
3. Under "Build and deployment":
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` and `/docs` folder
   - Click **Save**

4. GitHub will deploy automatically. Your site appears at:
   ```
   https://optify-io.github.io/website_review/
   ```

### Step 3: Custom Domain (Optional)

1. Create a `CNAME` file in `docs/` folder with your domain:
   ```
   optify.io
   ```

2. Update your domain's DNS records:
   - Add `CNAME` record pointing to `optify-io.github.io`
   - Or add `A` records pointing to GitHub Pages IP addresses

3. GitHub Pages will auto-renew HTTPS certificate

### GitHub Pages Configuration

The `docs/_config.yml` file controls Jekyll build settings:

```yaml
title: Optify | Supervisory Optimization for Industrial Process Drift
description: Bounded supervisory optimization for industrial process drift.
url: "https://optify.io"  # Update this
baseurl: ""               # Leave empty for root domain
```

---

## Netlify

### Step 1: Connect Repository

1. Log in to [Netlify](https://www.netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Connect your GitHub repository
4. Select `main` branch

### Step 2: Build Settings

Set build configuration:
- **Base directory**: `docs`
- **Build command**: (leave empty - static site)
- **Publish directory**: `docs`

### Step 3: Deploy

Click **Deploy site**. Netlify will:
- Generate a random subdomain (e.g., `optify-landing-abc123.netlify.app`)
- Monitor for changes and auto-deploy on push
- Provide free HTTPS

### Custom Domain on Netlify

1. Go to **Site settings** → **Domain management**
2. Add custom domain
3. Update DNS records as instructed
4. Netlify auto-provisions SSL

---

## Vercel

### Step 1: Import Project

1. Log in to [Vercel](https://vercel.com)
2. Click **New Project** → **Import Git Repository**
3. Select the repository

### Step 2: Configure

- **Framework Preset**: Other (static)
- **Root Directory**: `docs`
- **Build Command**: (leave empty)
- **Output Directory**: (leave empty)

### Step 3: Deploy

Click **Deploy**. Your site appears at `optify-io.vercel.app`

---

## AWS S3 + CloudFront

### Step 1: Create S3 Bucket

```bash
aws s3 mb s3://optify-landing-page
```

### Step 2: Enable Static Website Hosting

```bash
aws s3api put-bucket-website \
  --bucket optify-landing-page \
  --website-configuration file://website.json
```

Where `website.json` contains:
```json
{
  "IndexDocument": {"Suffix": "index.html"},
  "ErrorDocument": {"Key": "index.html"}
}
```

### Step 3: Upload Files

```bash
aws s3 sync docs/ s3://optify-landing-page --delete
```

### Step 4: CloudFront Distribution

```bash
aws cloudfront create-distribution --distribution-config file://cloudfront-config.json
```

### Step 5: Custom Domain

Point your domain's DNS to CloudFront distribution domain name.

---

## Azure Static Web Apps

### Step 1: Create Static Web App

```bash
az staticwebapp create \
  --name optify-landing \
  --resource-group optify-rg \
  --repo-url https://github.com/optify-io/website_review \
  --repo-token <github-token> \
  --location "eastus" \
  --branch main \
  --app-location docs
```

### Step 2: GitHub Actions

Azure automatically creates a GitHub Actions workflow for CI/CD.

### Step 3: Custom Domain

Add custom domain in Azure portal under Static Web App settings.

---

## Docker Deployment

### Dockerfile

```dockerfile
FROM nginx:alpine

COPY docs/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### Build & Run

```bash
docker build -t optify-landing .
docker run -p 8080:80 optify-landing
```

Visit: `http://localhost:8080`

### Deploy to Docker Hub

```bash
docker tag optify-landing:latest optify-io/optify-landing:latest
docker push optify-io/optify-landing:latest
```

---

## Environment Variables

For any deployment requiring environment variables, create `.env` file:

```
REACT_APP_ANALYTICS_ID=GA_ID
REACT_APP_API_ENDPOINT=https://api.optify.io
REACT_APP_FORM_ENDPOINT=/api/validation-request
```

Update values in deployed version.

---

## Performance Optimization Pre-Deployment

### 1. Image Optimization

```bash
# Compress all images
find assets/images -name "*.png" -o -name "*.jpg" | while read img; do
  optipng "$img" 2>/dev/null || jpegoptim "$img" 2>/dev/null
done
```

### 2. Minify CSS/JS

```bash
npm install -g cssnano terser
cssnano css/*.css > css/all.min.css
terser js/*.js > js/all.min.js
```

### 3. Run Lighthouse Audit

```bash
npm install -g lighthouse
lighthouse https://your-domain.com --view
```

---

## Monitoring & Maintenance

### Set Up Monitoring

1. **Google Analytics**: Track user behavior, conversions
2. **Sentry**: Monitor errors and exceptions
3. **StatusPage**: Public status dashboard
4. **Uptime Robot**: Monitor site availability

### Regular Updates

- [ ] Check for broken links (monthly)
- [ ] Update outdated dependencies (quarterly)
- [ ] Review analytics (monthly)
- [ ] Update privacy policy if needed
- [ ] Refresh screenshots/visuals (annually)

### Security

- [ ] Enable HTTPS (all platforms support)
- [ ] Use security headers (HSTS, CSP, X-Frame-Options)
- [ ] Regular security audits (npm audit, OWASP ZAP)
- [ ] Keep dependencies updated

---

## Troubleshooting Deployments

| Issue | Solution |
|-------|----------|
| 404 errors on routes | Ensure `index.html` is root, check base path in config |
| Styles not loading | Verify CSS paths are absolute (`/css/` not `css/`) |
| JavaScript errors | Check console, verify module paths |
| Images broken | Confirm image paths use `/assets/` prefix |
| Form not submitting | Verify backend endpoint is accessible and CORS enabled |
| Site slow | Check image sizes, minify CSS/JS, enable caching headers |

---

## Rollback Procedure

### GitHub Pages
```bash
git revert <commit-hash>
git push origin main
```

### Netlify
- Go to **Deploys** → Select previous deployment → **Restore**

### Vercel
- Go to **Deployments** → Previous deployment → **Promote to Production**

---

## Cost Estimation

| Platform | Cost | Best For |
|----------|------|----------|
| GitHub Pages | Free | Open source, public projects |
| Netlify | Free tier available | Startups, small projects |
| Vercel | Free tier available | Next.js, modern frameworks |
| AWS S3 | ~$0.50/month | Enterprise, high traffic |
| Azure | Free tier available | Microsoft stack integration |

---

For technical support or deployment questions, contact: **validation@optify.io**
