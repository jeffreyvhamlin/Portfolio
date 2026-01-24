# Jeffrey Hamlin Vinod - Portfolio

A modern, accessible portfolio website showcasing data science, machine learning, and software development projects.

## Features

✨ **Modern Design**
- Monochrome color scheme with emerald/teal green accents
- Dark/Light mode toggle with localStorage persistence
- Smooth scroll animations and transitions
- Fully responsive design

🎯 **Accessibility**
- WCAG compliant color contrast
- Keyboard navigation support
- ARIA labels and semantic HTML
- Focus indicators
- Screen reader friendly

📱 **Sections**
- Hero with profile photo and CTAs
- About with Education, Achievements, Interests
- Technical Skills (categorized)
- Featured Projects with impact metrics
- Experience & Leadership (tabbed interface)
- Contact form and information
- Downloadable CV/Resume

## Technologies Used

- **Frontend**: React 19, Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Deployment**: GitHub Pages compatible (static site)

## Local Development

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

## Updating Your CV/Resume

To update your CV that visitors can download:

1. Replace the file at `/app/frontend/public/jeffrey-hamlin-vinod-cv.pdf` with your updated CV
2. Keep the same filename, or update it in `Hero.js` (line ~39)
3. No code changes needed - just replace the file!

## Updating Content

### Personal Information
Edit `/app/frontend/src/components/Hero.js` for:
- Name, title, description
- Social links (LinkedIn, GitHub, Email)

### About Section
Edit `/app/frontend/src/components/About.js` for:
- Education details
- Achievements
- Interests
- Bio text

### Skills
Edit `/app/frontend/src/components/Skills.js` to modify skill categories and items

### Projects
Edit `/app/frontend/src/components/Projects.js` to:
- Add/remove featured projects
- Update project links (set `link` and `github` properties)
- Modify impact metrics
- Change descriptions

### Experience
Edit `/app/frontend/src/components/Experience.js` for:
- Work experience
- Workshops
- Leadership roles

### Contact
Edit `/app/frontend/src/components/Contact.js` for:
- Email, phone, location
- Social media links

## Deploying to GitHub Pages

### Method 1: Using GitHub Actions (Recommended)

1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

3. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: |
          cd frontend
          yarn install
          
      - name: Build
        run: |
          cd frontend
          yarn build
        env:
          PUBLIC_URL: /YOUR_REPO_NAME
          
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./frontend/build
```

4. Go to repository Settings → Pages → Source → Select "gh-pages" branch

### Method 2: Manual Deployment

1. Build your project:
```bash
cd frontend
yarn build
```

2. Install gh-pages:
```bash
yarn add -D gh-pages
```

3. Add to `package.json`:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
  }
}
```

4. Deploy:
```bash
yarn deploy
```

## Environment Variables

This is a static site with no backend required. All data is hardcoded in components.

If you plan to add a backend later:
- Create `/app/frontend/.env`
- Add `REACT_APP_BACKEND_URL=your_backend_url`

## Color Customization

The portfolio uses a monochrome + emerald green color scheme.

To change colors, update `/app/frontend/src/index.css`:
- **Primary (Emerald)**: `#064e3b` (dark), `#059669` (medium), `#10b981` (light)
- **Secondary (Teal)**: `#0f766e` (dark), `#14b8a6` (medium)
- **Monochrome**: Various grays and black/white

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Jeffrey Hamlin Vinod. All rights reserved.

## Contact

- **Email**: jeffreyvhamlin@gmail.com
- **LinkedIn**: [jeffrey-hamlin-v](https://www.linkedin.com/in/jeffrey-hamlin-v)
- **Location**: Dublin, Ireland

---

Built with ❤️ using React, Tailwind CSS, and Shadcn UI
