import { Link } from 'react-router-dom'
import { PillGroup } from './PillBadge'
import InProgressBadge from './InProgressBadge'
export default function DetailPage({ backTo, backLabel, tag, title, heroImage, software, roles, inProgress, children }) {
  return (
    <div className="project-detail">

      {heroImage ? (
        <div className="cinematic-header">
          <div className="cinematic-header-bg" style={{ backgroundImage: `url('${heroImage}')` }} />
          <div className="cinematic-header-overlay" />
          <div className="container cinematic-header-content">
            <Link to={backTo} className="project-detail-back">← {backLabel}</Link>
            <div className="cinematic-header-meta">
              {tag && <span className="cinematic-header-tag">{tag}</span>}
              {inProgress && <InProgressBadge />}
            </div>
            <h1 className="cinematic-header-title">{title}</h1>
            {software && software.length > 0 && (
              <div className="pill-group cinematic-header-pills">
                {software.slice(0, 6).map(s => <span key={s} className="pill">{s}</span>)}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="container" style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: 0 }}>
          <Link to={backTo} className="project-detail-back">← {backLabel}</Link>
          <div className="project-detail-header">
            {tag && <div className="project-detail-tag">{tag}</div>}
            <h1 className="project-detail-title">{title}</h1>
            {inProgress && <InProgressBadge />}
          </div>
        </div>
      )}

      <div className="container project-detail-body">
        <div className="detail-layout">
          <div>
            {children}
          </div>
          <aside className="detail-sidebar">
            {software && software.length > 0 && (
              <div className="sidebar-card">
                <h4>Software &amp; Skills</h4>
                <PillGroup items={software} />
              </div>
            )}
            {roles && roles.length > 0 && (
              <div className="sidebar-card">
                <h4>Roles</h4>
                <PillGroup items={roles} />
              </div>
            )}
            <Link to={backTo} className="btn btn-outline" style={{ textAlign: 'center', justifyContent: 'center' }}>
              ← Back to {backLabel}
            </Link>
          </aside>
        </div>
      </div>

    </div>
  )
}
