import { Link, useLocation } from 'react-router-dom'
import { projectSequence, featuredProjects } from '../data/projects'

export default function ProjectNav() {
  const path = useLocation().pathname.replace(/\/$/, '') || '/'
  const n = projectSequence.length
  const idx = projectSequence.findIndex(p => p.to === path)

  // Pages outside the sequence (e.g. Front Hubs) still get a Next link into it
  const prev = idx >= 0 ? projectSequence[(idx - 1 + n) % n] : null
  const next = idx >= 0 ? projectSequence[(idx + 1) % n] : projectSequence[0]

  const skip = new Set([path, prev?.to, next?.to])
  const others = featuredProjects
    .filter(to => !skip.has(to))
    .slice(0, 3)
    .map(to => projectSequence.find(p => p.to === to))

  return (
    <nav className="project-nav" aria-label="More projects">
      <div className="project-nav-label">Keep Exploring</div>

      <div className="project-nav-prevnext">
        {prev && (
          <Link to={prev.to} className="project-nav-step">
            <span className="project-nav-dir">← Previous</span>
            <span className="project-nav-title">{prev.title}</span>
          </Link>
        )}
        <Link to={next.to} className="project-nav-step project-nav-next">
          <span className="project-nav-dir">Next →</span>
          <span className="project-nav-title">{next.title}</span>
        </Link>
      </div>

      <div className="project-nav-label" style={{ marginTop: 36 }}>Other Projects</div>
      <div className="project-nav-grid">
        {others.map(p => (
          <Link key={p.to} to={p.to} className="project-nav-card">
            <div className="project-nav-thumb">
              <img src={p.image} alt={p.title} loading="lazy" />
            </div>
            <div className="project-nav-card-body">
              <span className="project-nav-tag">{p.tag}</span>
              <span className="project-nav-card-title">{p.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  )
}
