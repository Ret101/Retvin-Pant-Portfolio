# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

- **Recruiters and hiring managers** for mechanical and product design roles. They skim the home page in under a minute, want to know who Retvin is, where he has worked, and how to get the resume or make contact.
- **Engineers and technical interviewers** who open the project pages to judge depth: load cases, FEA, kinematics, material choices, manufacturing decisions and what was learned.

## Product Purpose

A personal engineering portfolio for Retvin Pant, a Mechanical Engineering student at UT Austin (Minor in Business, graduating December 2027). It exists to land mechanical and product design roles. Success: a recruiter downloads the resume or reaches out; an engineer finishes a project page convinced the work is real and the reasoning is sound.

## Positioning

Hardware designed from concept through competition and actually built: lunar rover wheels at NASA JSC, race car suspension he set the hardpoints for at Longhorn Baja Racing (which he co-founded), automation tooling at Daikin. The proof is photographs of real fabricated parts, FEA, design documents and kinematic data, not renders alone.

## Operating Context

- Deployed as a static Vite + React SPA on GitHub Pages under `/Retvin-Pant-Portfolio/`, with a postbuild script that writes per-route HTML and a sitemap.
- Visitors arrive from a resume link, LinkedIn, or a search for his name.
- Project pages are long case studies with a sticky table of contents, spec tiles, embedded PDFs (DocSlider), galleries and CAD embeds.

## Capabilities and Constraints

- Routes and URLs must stay stable (SEO, links already shared).
- Daikin work is under NDA: limited information, marked as such.
- TEES RAD Lab Roboball is restricted: no details shown.
- Some projects are in progress (Baja, heated bed).
- Resume served as `public/resume.pdf`.

## Brand Commitments

- Dark theme.
- Steel-blue accent (#4682b4 family) stays as the primary accent.
- Baja orange (Longhorn Baja Racing car #185) may be used as a secondary colour.
- Name: Retvin Pant. Contact: retvinpant@gmail.com, GitHub Ret101, LinkedIn retvin-pant. No phone number.

## Evidence on Hand

- Real photographs of built hardware and teams in `public/images/` (Baja car, control arms, rear hubs, CV axles, spring steel wheel, candy sorter, FRC robots, battlebot, skateboard, UR5E extruder, heated bed), Baja gallery set, Daikin renders, two short MP4 clips of trailing arms.
- Design documents and FEA PDFs in `public/documents/`.
- Company/org logos for the experience timeline.
- No testimonials, quotes, or press. None may be invented.

## Product Principles

1. Built hardware first: show the real part before the render.
2. Two speeds: the home page answers who/where/what in seconds; project pages reward reading.
3. Engineering reasoning is the content: numbers, load cases and decisions are shown, never hidden behind decoration.
4. Honest about limits: NDA and restricted work is labelled, never padded.
