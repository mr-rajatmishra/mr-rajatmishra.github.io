# GitHub Pages User Site Setup Guide

## 🎯 Goal: Deploy to mr-rajatmishra.github.io

### ✅ Configuration Complete
I've already configured your project for user GitHub Pages deployment:

**1. Updated package.json:**
- Added `"homepage": "https://mr-rajatmishra.github.io"`
- Deployment scripts are ready

**2. Updated vite.config.ts:**
- Set `base: "/"` for user site deployment
- Correct paths for root-level hosting

### 🚀 Deployment Steps

#### Option 1: Create Dedicated User Repository (Recommended)
1. **Create new repository** on GitHub named exactly: `mr-rajatmishra.github.io`
2. **Push your code** to this new repository:

```bash
# If starting fresh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/mr-rajatmishra/mr-rajatmishra.github.io.git
git push -u origin main

# Or if moving from current repo
git remote set-url origin https://github.com/mr-rajatmishra/mr-rajatmishra.github.io.git
git push origin main
```

3. **Deploy:**
```bash
npm run deploy
```

4. **Enable GitHub Pages:**
- Go to repository Settings → Pages
- Source: Deploy from a branch
- Branch: main (or gh-pages if using gh-pages)
- Your site will be live at: https://mr-rajatmishra.github.io

#### Option 2: Use Current Repository
1. **Rename current repository** to `mr-rajatmishra.github.io`
2. **Enable GitHub Pages** from repository settings
3. **Deploy** using existing scripts

### 🔧 Test Your Build
Before deploying, test locally:

```bash
npm run build
npm run preview
```

### 📁 Important Notes
- **User sites** require repository name: `username.github.io`
- **No base path** needed in vite.config.ts (set to "/")
- **Automatic deployment** when pushing to main branch
- **Custom domain** can be added later if needed

### 🌐 Final URL
Your site will be available at: **https://mr-rajatmishra.github.io**

### 🐛 Troubleshooting
- **404 errors**: Check repository name matches exactly
- **Blank page**: Check console for path errors
- **Assets not loading**: Verify base path is "/"
- **Build fails**: Check for any path-related errors

Ready to deploy! 🎉
