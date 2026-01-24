# GitHub Pages Deployment Guide

## Quick Start (5 minutes)

### Step 1: Prepare Your Repository

1. **Create a new GitHub repository**
   - Go to https://github.com/new
   - Name it something like: `portfolio` or `your-username.github.io`
   - Keep it public (required for free GitHub Pages)
   - Don't initialize with README (we already have one)

### Step 2: Push Your Code

Open terminal in `/app/frontend` directory and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under "Source", the GitHub Action will automatically deploy
4. Wait 2-3 minutes for the first deployment
5. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Alternative: Manual Deployment (Without GitHub Actions)

If you prefer not to use GitHub Actions:

### 1. Install gh-pages package

```bash
cd /app/frontend
yarn add -D gh-pages
```

### 2. Update package.json

Add these lines to your `package.json`:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
  }
}
```

### 3. Deploy

```bash
yarn deploy
```

This will:
- Build your project
- Create a `gh-pages` branch
- Push the built files to that branch
- Your site will be live in ~2 minutes

## Using Custom Domain (Optional)

### 1. Buy a domain (e.g., from Namecheap, GoDaddy, or Cloudflare)

### 2. Add DNS records at your domain provider:

For apex domain (yourdomain.com):
```
Type: A
Host: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

For www subdomain:
```
Type: CNAME
Host: www
Value: YOUR_USERNAME.github.io
```

### 3. Add custom domain in GitHub

1. Go to Settings → Pages
2. Enter your domain in "Custom domain"
3. Click Save
4. Wait for DNS check to complete

### 4. Update deploy.yml

In `.github/workflows/deploy.yml`, uncomment and add your domain:
```yaml
cname: yourdomain.com
```

## Updating Your Live Site

Every time you push to the `main` branch, GitHub Actions will automatically rebuild and redeploy your site.

To update:
```bash
git add .
git commit -m "Updated project details"
git push
```

Wait 2-3 minutes and your changes will be live!

## Troubleshooting

### Issue: Site shows 404
**Solution**: 
- Check if GitHub Pages is enabled in Settings → Pages
- Ensure the source is set to "GitHub Actions" or "gh-pages branch"
- Wait a few minutes for deployment to complete

### Issue: Blank page or assets not loading
**Solution**:
- Make sure `homepage` in package.json matches your GitHub Pages URL
- Rebuild and redeploy:
  ```bash
  yarn build
  yarn deploy
  ```

### Issue: GitHub Actions failing
**Solution**:
- Check the Actions tab in your repository for error details
- Ensure all dependencies are in package.json
- Verify the workflow file is in `.github/workflows/deploy.yml`

### Issue: Changes not showing up
**Solution**:
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check GitHub Actions to ensure deployment succeeded
- Wait a few minutes for CDN to update

## Updating Content

### Update CV/Resume
Simply replace `/app/frontend/public/jeffrey-hamlin-vinod-cv.pdf` with your new CV and deploy.

### Update Projects
Edit `/app/frontend/src/components/Projects.js` to add new projects or update existing ones.

### Update Skills
Edit `/app/frontend/src/components/Skills.js` to add new skills.

## Performance Tips

1. **Optimize images**: Use compressed images (JPG for photos, PNG for graphics)
2. **Enable caching**: GitHub Pages automatically handles this
3. **Use Lighthouse**: Check performance in Chrome DevTools
4. **Minimize bundle size**: Remove unused dependencies

## Security Best Practices

1. **Never commit sensitive data**: API keys, passwords, etc.
2. **Use environment variables**: For any API integrations
3. **Keep dependencies updated**: Run `yarn upgrade` regularly
4. **Enable HTTPS**: Always enforced on GitHub Pages

## Support

For issues:
1. Check GitHub Pages documentation: https://docs.github.com/pages
2. Check repository Actions tab for deployment logs
3. Verify all files are committed and pushed

---

**Note**: This is a static site, so you don't need a backend server. Everything runs in the browser!
