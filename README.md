# Retvin Pant — Mechanical Engineering Portfolio

Personal portfolio website for Retvin Pant, Mechanical Engineering student (Minor in Business) at the University of Texas at Austin, graduating December 2027. Built to showcase industry experience, research, team projects, and personal engineering work.

Live site: **[ret101.github.io/Retvin-Pant-Portfolio](https://ret101.github.io/Retvin-Pant-Portfolio/)**

---

## About

This portfolio covers engineering work across internships, research labs, student organizations, and personal projects, including:

- **Boeing**: Incoming Loads & Dynamics Engineering Intern, International Space Station (Summer 2027)
- **Daikin**: Automation Engineering Intern (Summer 2026), heat exchanger automated manufacturing cell
- **NASA Johnson Space Center**: Spring steel wheel and universal hub for the Microchariot lunar rover
- **SPARX Engineering**: Autonomous multi-stage candy sorting machine (SweetSifter)
- **UT Austin SiDi Lab**: Swarm manufacturing research, hotswappable heated bed and UR5E extruder end effector
- **Robotics, Automation and Design Lab**: RoboBall II & III prototype development (Summer 2025)
- **Longhorn Baja Racing**: Co-founded UT Austin's SAE Baja team; Co-Captain and Vehicle Dynamics Lead
- **Texas Guadaloop**: Hyperloop pod bogie system and FEA
- **FRC Team 5414**: Technical Team Captain; designed Rooty, Ringo, and Brownout competition robots
- **Electric Skateboard**: Custom-built personal project, 12 mph, ~$250
- **Beetleweight Battlebot**: 3 lb combat robot, Texas Roborumble, 3-2-0

---

## A note on AI use

AI tools were used to help develop and build this website. All of the engineering work, projects, results, and written content shown on the site are my own.

---

## Features

- Cinematic hero carousel and bento-grid hero with profile, bio, and navigation cards
- Experience timeline with organization logos, linking to project pages
- Industry & Research page split into internship work and university lab research
- Project hub pages (Longhorn Baja, FRC) with cards linking to detailed subsystem pages
- Detail pages with cinematic headers, analysis tables, document viewers, videos, and image galleries
- Longhorn Baja season photo gallery and downloadable Design Review Briefing
- Sticky table of contents on long detail pages
- Scroll reveal and page transition animations
- Fully responsive: mobile, tablet, desktop

---

## Stack

- **React 18** + **Vite**
- **React Router v6** with real URLs (`/baja`, `/industry/daikin`, ...)
- Route-level code splitting with `React.lazy`, so each page loads only when visited
- **Framer Motion** for page and scroll animations
- Custom CSS with CSS variables (dark theme)
- Google Fonts: Space Grotesk + Inter
- Deployed via **GitHub Actions** to **GitHub Pages**

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173/Retvin-Pant-Portfolio/](http://localhost:5173/Retvin-Pant-Portfolio/).

## Production Build

```bash
npm run build
npm run preview
```

`npm run build` runs `vite build`, then `scripts/postbuild.mjs`. The postbuild step writes a copy of the page for every route in `src/App.jsx` (so deep links return a real page instead of GitHub Pages' 404) and regenerates `sitemap.xml` from the same route list.

## Season Gallery Images

Original photos go in `public/images/Baja 2025-2026 Images For Gallery/` (not committed). Run:

```bash
python make_baja_gallery.py
```

This writes compressed full-size and thumbnail WebP images to `public/images/baja-gallery/` and updates `src/data/bajaGallery.json`.

## Deployment

Deploys automatically via GitHub Actions on every push to `main`. The workflow in `.github/workflows/deploy.yml` installs dependencies, builds, and publishes the `dist/` folder to GitHub Pages.

**One-time setup:**
1. Go to **Settings → Pages** in the GitHub repo
2. Set **Source** to **GitHub Actions**
3. Push to `main`; the rest is automatic
