import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import InProgressBadge from './InProgressBadge'
import ProjectNav from './ProjectNav'
import ImageZoom from './ImageZoom'

// heroStyle was written for a CSS background; carry its intent over to an <img>
function heroImgStyle(s = {}) {
  const out = {}
  if (s.backgroundPosition) out.objectPosition = s.backgroundPosition
  if (s.backgroundColor) { out.background = s.backgroundColor; out.objectFit = s.backgroundSize === 'cover' ? 'cover' : 'contain' }
  return out
}

export default function DetailPage({ backTo, backLabel, tag, title, heroImage, heroStyle, software, roles, inProgress, children }) {
  const mainRef = useRef(null)
  return (
    <div className="project-detail">
      {heroImage && <div className="detail-backdrop" aria-hidden="true" style={{ backgroundImage: `url('${heroImage}')` }} />}
      <header className={`detail-head container${heroImage ? '' : ' no-media'}`}>
        <div className="detail-head-copy">
          <h1 className={`detail-title${title.length > 18 ? ' is-long' : ''}${title.length > 40 ? ' is-longer' : ''}`}><span className="plate plate-line">{title}</span></h1>
          {tag && <p className="detail-tag">{tag}</p>}
          <div className="detail-head-actions">
            {inProgress && <InProgressBadge />}
            <Link to={backTo} className="project-detail-back"><FiArrowLeft aria-hidden="true" /> {backLabel}</Link>
          </div>
        </div>
        {heroImage && (
          <figure className="detail-head-media">
            <img src={heroImage} alt={title} style={heroImgStyle(heroStyle)} fetchpriority="high" />
          </figure>
        )}
      </header>

      <div className="container project-detail-body">
        <div className="detail-layout">
          <div className="detail-main" ref={mainRef}>
            {children}
          </div>
          <ImageZoom containerRef={mainRef} deps={[title]} />
          <aside className="detail-sidebar">
            {software && software.length > 0 && (
              <div className="sidebar-block">
                <h2>Software and skills</h2>
                <p>{software.join(', ')}</p>
              </div>
            )}
            {roles && roles.length > 0 && (
              <div className="sidebar-block">
                <h2>Roles</h2>
                <p>{roles.join(', ')}</p>
              </div>
            )}
            <div id="toc-slot" />
          </aside>
        </div>
        <ProjectNav />
      </div>
    </div>
  )
}
