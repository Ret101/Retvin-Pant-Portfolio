// Runs after `vite build`.
// GitHub Pages only serves real files, so a deep link like /baja would otherwise hit 404.html
// (HTTP 404, which Google won't index). For every route in App.jsx this writes dist/<route>/index.html
// with its own canonical URL, then regenerates dist/sitemap.xml from the same route list.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const SITE = 'https://ret101.github.io/Retvin-Pant-Portfolio'
const dist = 'dist'

const app = readFileSync('src/App.jsx', 'utf8')
const routes = [...app.matchAll(/<Route path="([^"]+)"/g)].map(m => m[1])

const html = readFileSync(join(dist, 'index.html'), 'utf8')
const homeUrl = `${SITE}/`

for (const route of routes) {
  if (route === '/') continue
  const url = `${SITE}${route}/`
  const page = html
    .replace(`<link rel="canonical" href="${homeUrl}" />`, `<link rel="canonical" href="${url}" />`)
    .replace(`<meta property="og:url" content="${homeUrl}" />`, `<meta property="og:url" content="${url}" />`)
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

console.log(`postbuild: wrote ${routes.length - 1} route pages and a ${routes.length}-URL sitemap`)
