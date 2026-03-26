import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'
import InProgressBadge from './InProgressBadge'
import ComingSoonBadge from './ComingSoonBadge'

export default function ProjectCard({ image, tag, title, description, to, delay = 0, inProgress, comingSoon }) {
  const inner = (
    <div className="card project-card" style={{ cursor: to ? 'pointer' : 'default' }}>
      <div className="project-card-img-wrap">
        <img src={image} alt={title} className="project-card-img" loading="lazy" />
        {to && (
          <div className="project-card-overlay">
            <div className="project-card-overlay-title">{title}</div>
            {description && <p className="project-card-overlay-desc">{description}</p>}
            <span className="project-card-overlay-cta">Explore →</span>
          </div>
        )}
      </div>
      <div className="project-card-body">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          {tag && <div className="project-card-tag">{tag}</div>}
          {inProgress && <InProgressBadge />}
          {comingSoon && <ComingSoonBadge />}
        </div>
        <h3 className="project-card-title">{title}</h3>
        {description && <p className="project-card-desc">{description}</p>}
        {to && (
          <div className="project-card-footer">
            <span className="project-card-link">View Project →</span>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <ScrollReveal delay={delay}>
      {to ? <Link to={to} style={{ display: 'block', height: '100%', textDecoration: 'none', color: 'inherit' }}>{inner}</Link> : inner}
    </ScrollReveal>
  )
}
