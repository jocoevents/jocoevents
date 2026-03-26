# JoCo Events

This site is built with React + Vite and is configured to deploy to GitHub Pages.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In GitHub, open **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow manually from the Actions tab).

The workflow file is at `.github/workflows/deploy.yml`.

## Important repo-name setting

The Vite base path is configured in `vite.config.js`:

- `const repoName = 'jocoevents'`

If your GitHub repository name is different, update this value to match the repo name exactly so assets load correctly on Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```
