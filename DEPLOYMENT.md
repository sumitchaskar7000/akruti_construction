# Deployment Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite settings
5. Deploy!

**Build Settings:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Add new site from Git
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Update `vite.config.ts`:
   ```ts
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```
4. Run: `npm run deploy`

## Environment Variables

Create a `.env` file for environment-specific variables:

```env
VITE_API_URL=https://api.yourdomain.com
VITE_WHATSAPP_NUMBER=+911234567890
```

## Custom Domain

1. Add your domain in your hosting platform
2. Update DNS records as instructed
3. Enable HTTPS (usually automatic)

## SEO Checklist

- [ ] Update meta tags in `index.html`
- [ ] Add Google Analytics tracking code
- [ ] Add Google Search Console verification
- [ ] Create and submit sitemap.xml
- [ ] Add structured data (JSON-LD)
- [ ] Optimize images (use WebP format)
- [ ] Add alt text to all images
- [ ] Test with Google Lighthouse

## Performance Optimization

1. **Image Optimization**
   - Use WebP format
   - Compress images before uploading
   - Use lazy loading (already implemented)

2. **Code Splitting**
   - Already handled by Vite
   - Consider route-based code splitting for large pages

3. **Caching**
   - Configure cache headers in hosting platform
   - Use CDN for static assets

## Analytics Setup

### Google Analytics 4

Add to `index.html` before closing `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Form Backend Integration

The lead form currently shows an alert. To integrate with a backend:

1. **Option 1: Serverless Function (Vercel/Netlify)**
   - Create API route
   - Update `LeadForm.tsx` to call the API

2. **Option 2: Third-party Service**
   - Use Formspree, FormSubmit, or similar
   - Update form action URL

3. **Option 3: Custom Backend**
   - Create REST API endpoint
   - Handle CORS if needed
   - Update form submission logic

## Troubleshooting

### Build Errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version (should be 16+)

### Routing Issues
- Ensure hosting platform supports SPA routing
- Configure redirects: all routes → `index.html`

### Images Not Loading
- Check image paths (should start with `/images/`)
- Ensure images are in `public/images/` directory
- Use relative paths from public folder



