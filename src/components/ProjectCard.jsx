import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import ScrollReveal from './ScrollReveal'
import InProgressBadge from './InProgressBadge'
import ComingSoonBadge from './ComingSoonBadge'
import RestrictedBadge from './RestrictedBadge'

// A project as a card: the picture on top, the words beneath, the whole card is the link.
export default function ProjectCard({ image, tag, title, description, result, to, delay = 0, inProgress, comingSoon, restricted, restrictedLabel, imageStyle }) {
  const inner = (
    <article className="project-card">
      <div className="project-card-media">
        <img src={image} alt={title} style={imageStyle} loading="lazy" />
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        {result && <p className="project-card-result">{result}</p>}
        {(tag || inProgress || comingSoon || restricted) && (
          <p className="project-card-meta">
            {tag && <span>{tag}</span>}
            {inProgress && <InProgressBadge />}
            {comingSoon && <ComingSoonBadge />}
            {restricted && <RestrictedBadge label={restrictedLabel} />}
          </p>
        )}
        {description && <p className="project-card-desc">{description}</p>}
        {to && <span className="project-card-link">Read the case study <FiArrowRight aria-hidden="true" /></span>}
        {restricted && !to && <span className="project-card-note">Details withheld</span>}
      </div>
    </article>
  )

  return (
    <ScrollReveal delay={delay}>
      {to ? <Link to={to} className="project-card-anchor">{inner}</Link> : inner}
    </ScrollReveal>
  )
}
