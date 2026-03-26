import { Link } from 'react-router-dom'
import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import Gallery from '../../components/Gallery'
import StickyTOC from '../../components/StickyTOC'
import InProgressBadge from '../../components/InProgressBadge'

const toc = [
  { id: 'intro',       label: 'Introduction' },
  { id: 'designs',     label: 'Designs'      },
]

const subprojects = [
  {
    title: 'Master Sketch',
    description: 'Double wishbone suspension geometry calculator. Defines roll and pitch instantaneous centers to determine control arm mounting positions and arm lengths.',
    to: '/team/longhorn-baja/master-sketch',
    inProgress: false,
  },
  {
    title: 'Control Arms',
    description: 'Front and rear control arm design and FEA analysis. Geometry derived directly from master sketch hardpoint locations.',
    to: '/team/longhorn-baja/control-arms',
    inProgress: true,
  },
  {
    title: 'Rear Hubs — Laminated Manufacturing',
    description: 'Rear hub design using laminated manufacturing techniques to achieve precise geometry and minimize unsprung weight.',
    to: '/team/longhorn-baja/rear-hubs',
    inProgress: true,
  },
  {
    title: 'Front Hubs — Laminated Manufacturing',
    description: 'Front hub design accommodating steering geometry and master sketch hardpoint requirements, built with laminated manufacturing.',
    to: '/team/longhorn-baja/front-hubs',
    inProgress: true,
  },
]

const gallery = [
  { src: '/images/car mastersketch v2.png', alt: 'Longhorn Baja vehicle' },
  { src: '/images/Baja Mastersketch v1.png', alt: 'Master sketch V1' },
]

export default function LonghornBaja() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
        backTo="/team"
        backLabel="Team Projects"
        tag="SAE Baja · Austin, TX"
        title="SAE Longhorn Baja 25'–26' Vehicle"
        heroImage="/images/car mastersketch v2.png"
        software={['SolidWorks CAD', 'SolidWorks FEA', 'Lotus Shark']}
        roles={['Co-Founder', 'Co-Captain', 'Vehicle Dynamics Lead']}
        inProgress
      >

        {/* ── Introduction ── */}
        <div id="intro">
          <ScrollReveal>
            <div className="project-section">
              <h3>Introduction</h3>
              <p>
                Longhorn Baja is a student engineering team based in Austin, TX, designing and building
                single-seater off-road cars to compete at the SAE Baja competition. The 25'–26' vehicle
                is the team's first full competition car, targeting the SAE Baja Competition in Ohio.
              </p>
              <p>
                <a href="https://longhornbaja.wixsite.com/longhornbaja" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-light)' }}>
                  Visit the Team Website →
                </a>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="project-section">
              <h3>Role</h3>
              <p>
                As Co-Founder, Co-Captain, and Vehicle Dynamics Lead, the work spans team leadership and
                technical ownership of suspension geometry and overall vehicle integration. This includes
                defining critical dimensions and performance targets for the brakes, steering, and all
                unsprung components to meet competition handling requirements.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Designs ── */}
        <div id="designs">
          <div className="section-marker">
            <div className="section-marker-inner">Designs</div>
          </div>
          <ScrollReveal>
            <div className="project-section">
              <h3>Design Sub-Projects</h3>
              <p>
                The vehicle is broken into focused design efforts. Each sub-project below documents a
                specific system or component developed for the 25'–26' car.
              </p>
            </div>
          </ScrollReveal>

          <div className="baja-subprojects-grid">
            {subprojects.map((p, i) => (
              <ScrollReveal key={p.title} delay={(i % 2) + 1}>
                <Link to={p.to} className="baja-sub-card">
                  <div className="baja-sub-card-title-row">
                    <span className="baja-sub-card-title">{p.title}</span>
                    {p.inProgress && <InProgressBadge />}
                  </div>
                  <p className="baja-sub-card-desc">{p.description}</p>
                  <span className="baja-sub-card-cta">View Project →</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <Gallery images={gallery} />
        </ScrollReveal>

      </DetailPage>
    </>
  )
}
