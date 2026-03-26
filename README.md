# Retvin Pant — Mechanical Engineering Portfolio

Personal portfolio website for Retvin Pant, Mechanical Engineering student at the University of Texas at Austin. Built to showcase industry experience, team projects, and personal engineering work.

Live site: **[ret101.github.io/Retvin-Pant-Portfolio](https://ret101.github.io/Retvin-Pant-Portfolio/)**

---

## About

This portfolio covers engineering work across internships, student organizations, and personal projects — including:

- **NASA Johnson Space Center** — Spring steel wheel and universal hub for the Microchariot lunar rover
- **SPARX Engineering** — Autonomous multi-stage candy sorting machine (SweetSifter)
- **UT Austin SiDi Lab** — Swarm manufacturing research: hotswappable heated bed and 6-DOF extruder end effector
- **Daikin** — Upcoming automation engineering internship (Summer 2026)
- **Robotics, Automation and Design Lab** — RoboBall II & III prototype development (Summer 2025)
- **Longhorn Baja Racing** — Co-founded UT Austin's SAE Baja team; Vehicle Dynamics Lead
- **Texas Guadaloop** — Hyperloop pod bogie system and FEA
- **FRC Team 5414** — Technical Team Captain; designed Rooty, Ringo, and Brownout competition robots
- **Electric Skateboard** — Custom-built personal project, 12 mph, ~$250
- **Beetleweight Battlebot** — 3 lb combat robot, Texas Roborumble, 3-2-0

---

## Features

- Cinematic hero carousel on the home page with project images
- Zigzag experience timeline linking to project pages
- Bento-grid hero layout with profile, bio, and navigation cards
- Company logo strip (NASA, SPARX, SAE, SiDi Lab, Longhorn Baja)
- Project hub pages with image cards linking to detailed subpages (Baja, FRC)
- Per-project detail pages with cinematic headers, subsystem breakdowns, image galleries, and embedded Fusion 360 / Onshape CAD viewers
- Sticky table of contents on long detail pages
- Scroll reveal animations throughout
- Page transition animations
- Fully responsive — mobile, tablet, desktop
- Dark theme with glassmorphism accents

---

## Stack

- **React 18** + **Vite**
- **React Router v6**
- **Framer Motion** — page and scroll animations
- Custom CSS with CSS variables (dark theme, glassmorphism, bento grid)
- Google Fonts: Space Grotesk + Inter
- Deployed via **GitHub Actions** to **GitHub Pages**

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

Deploys automatically via GitHub Actions on every push to `main`. The workflow in `.github/workflows/deploy.yml` installs dependencies, builds with Vite, and publishes the `dist/` folder to GitHub Pages.

**One-time setup:**
1. Go to **Settings → Pages** in the GitHub repo
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the rest is automatic

The site is live at `https://ret101.github.io/Retvin-Pant-Portfolio/`.
