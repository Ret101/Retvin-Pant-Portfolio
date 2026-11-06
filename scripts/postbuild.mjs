// Runs after `vite build`.
// GitHub Pages only serves real files, so a deep link like /baja would otherwise hit 404.html
// (HTTP 404, which Google won't index). For every route in App.jsx this writes dist/<route>/index.html
// with its own canonical URL, title, description and link-preview image, then regenerates
// dist/sitemap.xml from the same route list.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import sharp from 'sharp'

const SITE = 'https://ret101.github.io/Retvin-Pant-Portfolio'
const dist = 'dist'

const app = readFileSync('src/App.jsx', 'utf8')
const routes = [...app.matchAll(/<Route path="([^"]+)"/g)].map(m => m[1]).filter(r => r !== '*')

// Per-page preview text and image. Project pages read theirs from src/data/projects.js
// (title, blurb, image), so a new project gets a proper preview without touching this file.
const meta = {
  '/industry': { title: 'Industry and Research', description: 'Hardware Retvin Pant designed in internships at Daikin, NASA Johnson Space Center and SPARX Engineering, and in UT Austin research labs.', image: '/images/Daikin/full-cell-cropped.webp' },
  '/team': { title: 'Team Projects', description: 'Longhorn Baja Racing, a Guadaloop hyperloop bogie, FRC competition robots and a robotics road case.', image: '/images/brownout robot frc.jpg' },
  '/personal': { title: 'Personal Projects', description: 'An electric skateboard and a beetleweight combat robot, designed and built on my own.', image: '/images/battlebot.jpg' },
  '/skills': { title: 'Skills', description: 'CAD, analysis, manufacturing, programming and design-process skills, each linked to a project where it was used.', image: '/images/og-image.jpg' },
  '/baja/gallery': { title: 'Longhorn Baja season gallery', description: 'Shop nights, testing days and the people who built car 185, Longhorn Baja Racing’s first car.', image: '/images/home/DSC05988.webp' },
  '/baja/front-hubs': { title: 'Front Hubs', description: 'Longhorn Baja front hub: bearing and hub press-fit into the upright, Ansys FEA, and a redesign to a solid hub after a missed fillet left 0.02 in of material.', image: '/images/front-hub/upright-hub-assembly.webp' },
  '/team/frc-robots/additional': { title: 'Additional FRC designs', description: 'Other mechanisms designed for FRC Team 5414.', image: '/images/additional robot design.png' },
}
const projects = readFileSync('src/data/projects.js', 'utf8')
for (const line of projects.split('\n')) {
  const to = line.match(/to: '([^']+)'/)?.[1]
  const title = line.match(/title: '([^']+)'/)?.[1]
  const blurb = line.match(/blurb: '([^']+)'/)?.[1]
  const image = line.match(/image: img\('([^']+)'\)/)?.[1]
  if (to && title && !meta[to]) meta[to] = { title, description: blurb, image }
}

const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const abs = path => `${SITE}${encodeURI(path)}`

const html = readFileSync(join(dist, 'index.html'), 'utf8')
const homeUrl = `${SITE}/`

function withMeta(page, { url, title, description, image }) {
  const t = esc(`${title} | Retvin Pant`)
  let out = page
    .replace(`<link rel="canonical" href="${homeUrl}" />`, `<link rel="canonical" href="${url}" />`)
    .replace(`<meta property="og:url" content="${homeUrl}" />`, `<meta property="og:url" content="${url}" />`)
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${t}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${t}`)
  if (description) {
    const d = esc(description)
    out = out
      .replace(/(<meta name="description" content=")[^"]*/, `$1${d}`)
      .replace(/(<meta property="og:description" content=")[^"]*/, `$1${d}`)
      .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${d}`)
  }
  if (image) {
    out = out
      .replace(/(<meta property="og:image" content=")[^"]*/, `$1${abs(image)}`)
      .replace(/(<meta name="twitter:image" content=")[^"]*/, `$1${abs(image)}`)
      // project photos are not 1200x630; let the platform measure them
      .replace(/\s*<meta property="og:image:width" content="1200" \/>\s*<meta property="og:image:height" content="630" \/>/, image.endsWith('og-image.jpg') ? '$&' : '')
  }
  return out
}

// LinkedIn and some chat apps skip WebP previews, so give those pages a JPG copy
mkdirSync(join(dist, 'images', 'og'), { recursive: true })
for (const [route, m] of Object.entries(meta)) {
  if (!m.image?.endsWith('.webp')) continue
  const out = `/images/og/${route.slice(1).replace(/\//g, '-')}.jpg`
  await sharp(join('public', m.image)).resize({ width: 1200, withoutEnlargement: true }).flatten({ background: '#f2f0ec' }).jpeg({ quality: 82 }).toFile(join(dist, out))
  m.image = out
}

let described = 0
for (const route of routes) {
  if (route === '/') continue
  const url = `${SITE}${route}/`
  const m = meta[route]
  if (m) described++
  const page = withMeta(html, { url, title: m?.title ?? 'Retvin Pant', description: m?.description, image: m?.image })
  mkdirSync(join(dist, route), { recursive: true })
  writeFileSync(join(dist, route, 'index.html'), page)
}

const today = new Date().toISOString().slice(0, 10)
const entries = routes.map(route => {
  const depth = route === '/' ? 0 : route.split('/').length - 1
  const priority = ['1.0', '0.8', '0.6'][Math.min(depth, 2)]
  const loc = route === '/' ? homeUrl : `${SITE}${route}/`
  return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`
})
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`
)

console.log(`postbuild: wrote ${routes.length - 1} route pages (${described} with their own preview) and a ${routes.length}-URL sitemap`)
