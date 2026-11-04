import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import img from '../img'
import { projectSequence } from '../data/projects'
import { industry, research, team, personal } from '../data/listings'

const bajaStrip = ['DSC05823', 'DSC05599', 'DSC05747', 'DSC05613', 'DSC05785', 'DSC05886', 'DSC05825', 'DSC05979', 'DSC05812', 'DSC06079']
  .map(f => ({ src: img(`/images/baja-gallery/${f}.webp`) }))

// One linked photo per project
const asProjects = list => list.filter(p => p.to).map(p => ({ src: p.image, to: p.to, label: p.title }))
const listingStrips = {
  '/industry': asProjects([...industry, ...research]),
  '/team': asProjects(team),
  '/personal': asProjects(personal),
}
const allProjects = asProjects(projectSequence.filter((p, i, a) => a.findIndex(q => q.image === p.image) === i))

// Images in the page body that are figures of the project (not cards, logos or other links)
const SKIP = 'a img, .doc-slider img, .doc-card img, .project-nav img, .frc-robot-card img, .logo-tile img, .record-logo img, .pit-edu img, .footer img'

// The strip above "Get in touch" changes with the page: a project's own photos on its page,
// that section's projects on a listing page, every project on the home page.
function useStrip() {
  const { pathname } = useLocation()
  const path = pathname.replace(/\/$/, '') || '/'
  const [harvested, setHarvested] = useState(null)

  const fixed =
    path === '/baja' || path === '/baja/gallery' ? bajaStrip :
    listingStrips[path] ? listingStrips[path] :
    path === '/' || path === '/skills' ? allProjects : null

  useEffect(() => {
    setHarvested(null)
    if (fixed) return
    // Project page: wait for it to render (pages load lazily), then take its own photos
    let tries = 0
    const id = setInterval(() => {
      const main = document.querySelector('main .detail-main') || document.querySelector('main')
      const imgs = main ? [...main.querySelectorAll('img')].filter(el => !el.matches(SKIP)) : []
      if (imgs.length || ++tries > 40) {
        clearInterval(id)
        const seen = new Set()
        const list = []
        for (const el of imgs) {
          const src = el.getAttribute('src')
          if (src && !seen.has(src)) { seen.add(src); list.push({ src }) }
          if (list.length === 10) break
        }
        setHarvested(list.length >= 3 ? list : allProjects)
      }
    }, 60)
    return () => clearInterval(id)
  }, [path])

  return (fixed || harvested || []).slice(0, 10)
}

export default function Footer() {
  const strip = useStrip()
  const linked = strip.some(x => x.to)
  return (
    <footer className="footer">
      {strip.length > 0 && (
        <div className="footer-strip" aria-label={linked ? 'Projects' : undefined} aria-hidden={linked ? undefined : 'true'}>
          <ul className="footer-strip-track" style={{ '--n': strip.length }}>
            {strip.map((x, i) => (
              <li key={x.src + i}>
                {x.to
                  ? <Link to={x.to} className="footer-strip-link" title={x.label}><img src={x.src} alt={x.label} loading="lazy" /></Link>
                  : <img src={x.src} alt="" loading="lazy" />}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="container">
        <h2 className="footer-heading">Get in touch</h2>
        <ul className="contact-bar">
          <li>
            <a href="mailto:retvinpant@gmail.com?subject=Hello%20Retvin">
              <span className="contact-label">Email</span>
              <span className="contact-value">retvinpant@gmail.com</span>
            </a>
          </li>
          <li>
            <a href="http://www.linkedin.com/in/retvin-pant" target="_blank" rel="noopener noreferrer">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">in/retvin-pant <FiArrowUpRight aria-hidden="true" /></span>
            </a>
          </li>
          <li>
            <a href={img('/resume.pdf')} download="Resume_Retvin_Pant.pdf" className="contact-primary">
              <span className="contact-label">Resume</span>
              <span className="contact-value">Download the PDF</span>
            </a>
          </li>
        </ul>

        <div className="footer-board">
          <p className="footer-wordmark" aria-hidden="true">Retvin Pant</p>
          <div className="footer-meta">
            <nav aria-label="Footer">
              <Link to="/industry">Industry &amp; Research</Link>
              <Link to="/baja">Baja</Link>
              <Link to="/team">Team</Link>
              <Link to="/personal">Personal</Link>
              <Link to="/skills">Skills</Link>
              <a href="https://github.com/Ret101" target="_blank" rel="noopener noreferrer">GitHub</a>
            </nav>
            <p>© {new Date().getFullYear()} Retvin Pant · Mechanical Engineering, University of Texas at Austin</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
