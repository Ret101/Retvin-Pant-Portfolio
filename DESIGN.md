# Design

The system as built on the `redesign` branch (November 2026). Tokens live in `:root` at the top of `src/index.css`; the bento/glass layer is the block headed "Bento + glass" further down. Product context is in `PRODUCT.md`.

## World

A pit board on a dark field: the facts a visitor must read in a second (name, role, what's next, page titles, key numbers) are set on square **plates**, white with black type, or orange for what is live or coming next. Around them, content sits in rounded **bento tiles**; **frosted glass** is used only where something moves behind it (the home hero over its rotating project photos, and the nav bar).

## Colour

| Token | Value | Use |
|---|---|---|
| `--board` | `#0b0c0e` | Page ground |
| `--board-2` / `-3` / `-4` | `#15171a` / `#1f2226` / `#2a2e33` | Tile, hover and control surfaces, one step each |
| `--ink` | `#f2f2f0` | Text, and the white plates |
| `--ink-soft` | `#b3b8be` | Secondary text (9.6:1 on the board) |
| `--ink-on-plate` | `#0b0c0e` | Text on plates and on blue or orange fills |
| `--blue` | `#4682b4` | The primary action (resume button); board-black text on it |
| `--blue-text` | `#7fb0dc` | Links on the board (8:1) |
| `--orange` | `#f26a1b` | "Next" and live states, result tags, project counts, the timeline spine |
| `--burnt` | `#bf5700` | UT burnt orange: the Baja section on the home page, always with white text (4.8:1) |

Rules: one action colour (blue). Orange marks what's next or live, plus Baja. Surfaces are separated by a tone step, not by outlines.

## Type

One face: **Schibsted Grotesk** (400, 600, 800), loaded from Google Fonts.

| Step | Size | Use |
|---|---|---|
| `--step-display` | 56–120px | Name and page titles, 800, tracking −0.04 to −0.05em |
| `--step-head` | 32–64px | Section headings |
| `--step-lead` | 20–26px | Lead paragraphs, plate labels, card titles |
| `--step-body` | 17–19px | Running text, 1.5–1.6 leading |
| `--step-small` | 14–15px | Meta, captions, labels (never below 13px) |

Headings are title case for page and section names. Use tabular figures only for dates and counters; big spec numbers use proportional figures.

## Plates

- `.plate`: white fill, black 800 type, square corners, set 6px apart (`--slot`).
- `.plate-next`: orange fill. Used for "Next: Tesla, then Boeing" and "Looking for…".
- `.plate-line`: a wrapped title gets one plate per line (`box-decoration-break: clone`). The heading's line height (1.42) leaves a gap so plates don't cover descenders.
- Plates and buttons stay square. Everything else is rounded.

## Shape and surfaces

| Token | Radius | Use |
|---|---|---|
| `--r-tile` | 22px | Bento panels, hero tiles, the Baja section, project header photos |
| `--r-card` | 18px | Cards, logo tiles, decision and lesson blocks, contact tiles |
| `--r-media` | 14px | Photos, videos and figures inside content |
| `--r-small` | 10px | Thumbnails, small controls, rows |

Glass (`.glass`): `rgba(20,22,26,0.52)` with `blur(22px) saturate(150%)` and a 1px inner highlight. It's used only over moving imagery. Without backdrop-filter support it falls back to an 88% solid fill.

## Layout

- One container, max 1440px, with equal outer margins (`--margin`, 20–48px).
- The home hero fits one screen: its type scales with viewport height as well as width.
- Project pages: a split header (plated title beside a large rounded photo, with a soft blur of that photo behind), then the content beside a sticky sidebar. The sidebar holds skills, roles and the section line, which fills orange as you read.
- The section between two tiles is 14px. Major sections get larger breaks.

## Motion

Easing `--ease-out` `cubic-bezier(0.23, 1, 0.32, 1)` for all entrances and presses.

- **Home load:** the plates slot in from above, about 70ms apart, finishing in under a second.
- **Scroll:** blocks rise 24px and fade in once. A scroll safety net reveals anything a fast scroll skipped.
- **Press:** buttons, cards and tiles scale to 0.97–0.99 when pressed. Hover effects only apply on devices with a mouse.
- **Page change:** the new page fades up over 220ms with no exit wait. Navigation jumps (never glides) to the top.
- **Reduced motion:** content is visible by default, autoplay loops show controls instead, and the hero photos hold still.

## Components to reuse

- `ProjectCard`: a card with photo, title, an optional result line (orange square marker), meta, description and link.
- `DetailPage`: the shared project template. It handles the header, the sidebar with section line, click-to-enlarge images and prev/next.
- `Gallery` / `Lightbox`: the viewer box is sized to the image, so clicking outside it closes.
- The home timeline: two orange spines, one for the career sequence (Next, then internships) and one for teams, which ran alongside it. Hollow rings mean "still ahead".

## Not part of the system

These exist in the build but should not spread to new work:
- Some older project pages still carry inline font sizes and colours. New sections should use the classes above.
- "Robust" in the Daikin write-up is a stock phrase the copy check flags; it's the owner's text, so it was left alone.
