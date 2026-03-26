# Retvin Pant — Portfolio

Personal portfolio website for Retvin Pant, Mechanical Engineering student at UT Austin.

## Stack

- **React 18** + **Vite**
- **React Router v6** (HashRouter — works on GitHub Pages out of the box)
- Custom CSS with CSS variables (dark mode, glassmorphism, bento grid)
- Google Fonts: Space Grotesk + Inter

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Production Build

```bash
npm run build
npm run preview   # preview the built output locally
```

## GitHub Pages Deployment

This project deploys automatically via GitHub Actions on every push to `main`.

### One-time setup:
1. Push this repository to GitHub (e.g. `https://github.com/Ret101/portfolio`)
2. Go to **Settings → Pages**
3. Set **Source** to **GitHub Actions**
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` handles the rest

The site will be live at `https://ret101.github.io/portfolio/` (or your custom domain).

> **Note:** The `vite.config.js` has `base: '/'`. If your repo is at a subpath
> (e.g. `github.com/Ret101/portfolio`), update `base` to `'/portfolio/'` and update
> the `hostname` in the sitemap plugin to match.

## Replacing CAD Embeds

Throughout the project detail pages there are placeholder sections marked with a dashed steel-blue border:

```
[Part Name] — CAD Viewer
```

Replace each placeholder's `<CADEmbed title="..." />` component with an actual `<iframe>`:

```jsx
// Before
<CADEmbed title="Motor Mount" />

// After
<iframe
  src="https://cad.onshape.com/documents/YOUR_DOC_ID/..."
  width="100%"
  height="500px"
  allowFullScreen
/>
```

## SEO

- Full Open Graph + Twitter Card meta tags in `index.html`
- JSON-LD Person structured data
- Auto-generated `sitemap.xml` via `vite-plugin-sitemap` on build
- `robots.txt` in `public/`
- Update `hostname` in `vite.config.js` to your actual deployed URL
