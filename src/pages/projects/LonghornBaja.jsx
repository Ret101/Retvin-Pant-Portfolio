import ScrollReveal from '../../components/ScrollReveal'
import Gallery from '../../components/Gallery'
import DocSlider from '../../components/DocSlider'
import StatRow from '../../components/StatRow'
import ProjectCard from '../../components/ProjectCard'
import StickyTOC from '../../components/StickyTOC'
import img from '../../img'

const toc = [
  { id: 'overview',              label: 'Overview'              },
  { id: 'engineering-constraints', label: 'Engineering Constraints' },
  { id: 'geometry-simulation',   label: 'Geometry & Simulation' },
  { id: 'system-integration',    label: 'System Integration'    },
  { id: 'performance-targets',   label: 'Performance Targets'   },
  { id: 'vehicle-25-26',         label: "25'–26' Vehicle"       },
  { id: 'vehicle-26-27',         label: "26'–27' Vehicle"       },
]

const teamStats = [
  { value: 'Co-Founder', label: 'Team Role' },
  { value: 'Co-Captain', label: 'Leadership' },
  { value: 'Vehicle Dynamics Lead', label: 'Technical Lead' },
]

const subprojects25 = [
  {
    image: img('/images/Front Control Arm Render.png'),
    title: 'Control Arms',
    description: 'Load-path optimized suspension links sized against max cornering, bump, and combined load cases. Geometry fixed by master sketch; structural cross-section driven by FEA.',
    to: '/baja/control-arms',
    inProgress: true,
  },
  {
    image: img('/images/rear hub machined image.jpg'),
    title: 'Rear Hubs',
    description: 'Drive torque transmission with laminated spline manufacturing, eliminating broach and wire EDM constraints while meeting the axle interface and unsprung mass targets.',
    to: '/baja/rear-hubs',
    inProgress: true,
  },
  {
    image: img('/images/Front Hub.png'),
    title: 'Front Hub',
    description: 'FEA-driven unsprung mass design packaging wheel bearing, brake rotor, and steering knuckle interface within master sketch hardpoints.',
    to: null,
    inProgress: false,
    comingSoon: true,
  },
  {
    image: img('/images/car mastersketch v2.png'),
    title: 'Vehicle Master Sketch',
    description: 'Single source of truth for all suspension hardpoints. Defines roll and pitch instantaneous centers, camber curves, and packaging constraints that every downstream component is built from.',
    to: '/baja/master-sketch',
    inProgress: false,
  },
]

const gallery = [
  { src: img('/images/Car render 25-26 clear background.png'), alt: '25-26 competition car render' },
  { src: img('/images/car mastersketch v3.png'), alt: 'Master sketch V3' },
  { src: img('/images/car mastersketch v2.png'), alt: 'Master sketch V2' },
  { src: img('/images/Baja Mastersketch v1.png'), alt: 'Master sketch V1' },
  { src: img('/images/Front Control Arms.png'), alt: 'Front control arms CAD' },
  { src: img('/images/Rear Control Arms.png'), alt: 'Rear control arms CAD' },
  { src: img('/images/Rear Hub.png'), alt: 'Rear hub CAD' },
  { src: img('/images/rear hub machined image.jpg'), alt: 'Rear hub machined part' },
  { src: img('/images/rear hub manufacturing.jpg'), alt: 'Rear hub manufacturing' },
  { src: img('/images/lotusimage.png'), alt: 'Lotus Shark kinematics view 1' },
  { src: img('/images/imagelotus2.png'), alt: 'Lotus Shark kinematics view 2' },
]

export default function LonghornBaja() {
  return (
    <div className="page-wrapper">
      <StickyTOC sections={toc} />

      {/* ── Hero ── */}
      <div className="cinematic-header">
        <div className="cinematic-header-bg" style={{ backgroundImage: `url('${img('/images/Car Render.webp')}')`, backgroundSize: '150%', backgroundPosition: 'center 55%' }} />
        <div className="cinematic-header-overlay" />
        <div className="container cinematic-header-content">
          <div className="cinematic-header-meta">
            <span className="cinematic-header-tag">SAE Baja · Austin, TX</span>
          </div>
          <h1 className="cinematic-header-title">Longhorn Baja Racing</h1>
          <div className="pill-group cinematic-header-pills">
            {['SolidWorks CAD', 'SolidWorks FEA', 'Lotus Shark'].map(s => <span key={s} className="pill">{s}</span>)}
          </div>
        </div>
      </div>

      {/* ── Team Overview ── */}
      <section id="overview" className="projects-section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <ScrollReveal>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 16, maxWidth: 700, fontSize: '0.95rem', lineHeight: 1.75 }}>
              Co-founded Longhorn Baja Racing and serve as Co-Captain and Vehicle Dynamics &amp; Vehicle
              Systems Lead for the team's first competition vehicle, responsible for end-to-end vehicle
              architecture including suspension geometry, kinematic targets, and system-level integration
              across all subsystems.
            </p>
            <p style={{ marginBottom: 40 }}>
              <a href="https://longhornbajaracing.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-light)', fontSize: '0.9rem' }}>
                Visit the Team Website →
              </a>
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <StatRow stats={teamStats} />
          </ScrollReveal>


          <ScrollReveal>
            <div id="engineering-constraints" className="project-section">
              <h3 style={{ fontSize: '1.6rem' }}>Engineering Constraints</h3>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.92rem' }}>
                <li><strong style={{ color: 'var(--text-primary)' }}>10 HP power limit:</strong> performance comes from chassis and dynamics, not horsepower</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>No legacy vehicle:</strong> all geometry derived from first principles, no baseline to reference</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Competition durability:</strong> suspension must survive endurance, impact, and service loads</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Cross-team packaging:</strong> steering, drivetrain, and chassis share common hardpoints with no margin for error</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div id="geometry-simulation" className="project-section">
              <h3 style={{ fontSize: '1.6rem' }}>Geometry &amp; Simulation</h3>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.92rem' }}>
                <li>Defined front and rear suspension hardpoints from first principles, targeting 12 in of wheel travel (jounce/rebound) and a −3° to +1° camber range, establishing the geometric foundation that all downstream subsystem design was built on.</li>
                <li>A master sketch was maintained as the single source of truth for suspension, steering, and chassis interface geometry, constraining wheelbase (95.2 in), track width (56.77 in front/rear), and critical packaging envelopes for steering, brake, and drivetrain integration.</li>
                <li>Kinematic performance was iteratively validated in Lotus Shark across multiple design cycles, resulting in −0.339°/in front camber gain, −0.724°/in rear camber gain, approximately −1.35°/in front caster change through bump, and motion ratios of 2.4215:1 (front) and 2.2287:1 (rear) prior to releasing geometry to subsystem designers.</li>
                <li>Subsystem implementation of control arms, uprights, and steering components was guided through tightly defined geometric and kinematic constraints, including a static caster of 8.15° and a steering system architecture built around a 16.4 in rack with a 1.5 in pinion input.</li>
                <li>System-level convergence was ensured through continuous integration of suspension geometry with chassis, drivetrain, and controls architecture, resolving packaging and interface constraints across an 8 ft turning radius envelope, 1 in plunge travel allowance, and a 60/40 front-rear brake bias target.</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div id="system-integration" className="project-section">
              <h3 style={{ fontSize: '1.6rem' }}>System Integration</h3>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.92rem' }}>
                <li>Coordinated cross-subsystem interface constraints across chassis, drivetrain, steering, and hub design to ensure compatibility with suspension kinematics and packaging envelopes</li>
                <li>Resolved geometric and mechanical conflicts between suspension travel, drivetrain routing, and chassis constraints during iterative vehicle development</li>
                <li>Defined shared hardpoints and interface boundaries to maintain system-wide consistency across independently developed subsystems</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div id="performance-targets" className="project-section">
              <h3 style={{ fontSize: '1.6rem' }}>Performance Targets</h3>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.92rem' }}>
                <li>Defined braking, steering response, and unsprung mass targets per corner based on competition performance objectives</li>
                <li>Translated vehicle-level requirements into subsystem-level design specifications for suspension and steering architecture, ensuring system-wide consistency with integration constraints</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 25–26 Vehicle ── */}
      <section id="vehicle-25-26" className="projects-section" style={{ paddingTop: 48 }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-marker" style={{ marginBottom: 16 }}>
              <div className="section-marker-inner">25'–26' Vehicle</div>
            </div>
          </ScrollReveal>

          {/* Overview: text left, floating render right */}
          <ScrollReveal>
            <div style={{ display: 'flex', gap: 48, alignItems: 'center', marginBottom: 56, flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 320px', minWidth: 0 }}>
                <h3 style={{ marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.06em' }}>First Competition Car</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: 20 }}>
                  The 25'–26' car is Longhorn Baja's first full competition vehicle, designed from scratch
                  targeting the SAE Baja competition in Ohio. Every hardpoint, load case, and design
                  target was derived from first principles with no prior baseline to build from.
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: 12 }}>
                  Vehicle architecture and subsystem layout defined under system-level integration constraints to ensure compatibility across all major design domains.
                </p>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.9rem' }}>
                  <li><strong style={{ color: 'var(--text-primary)' }}>Chassis:</strong> Custom welded steel spaceframe</li>
                  <li><strong style={{ color: 'var(--text-primary)' }}>Dynamics:</strong> Double wishbone front, semi-trailing arm rear, custom hubs and uprights</li>
                  <li><strong style={{ color: 'var(--text-primary)' }}>Powertrain:</strong> 10HP Briggs &amp; Stratton engine with CVT, competition-mandated</li>
                  <li><strong style={{ color: 'var(--text-primary)' }}>Electronics:</strong> Custom wiring harness, sensor integration, and power distribution</li>
                  <li><strong style={{ color: 'var(--text-primary)' }}>Software:</strong> Driver-facing GUI for real-time vehicle data monitoring</li>
                  <li><strong style={{ color: 'var(--text-primary)' }}>Ergonomics:</strong> Driver fitment, seating position, and control placement designed to competition rules</li>
                </ul>
              </div>
              <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={img('/images/Car render 25-26 clear background.png')}
                  alt="Longhorn Baja 25-26 car render"
                  style={{ width: '100%', maxWidth: 500 }}
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>

          <div className="project-grid">
            {subprojects25.map((p, i) => (
              <ProjectCard key={p.title} {...p} delay={(i % 3) + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 26–27 Vehicle ── */}
      <section id="vehicle-26-27" className="projects-section" style={{ paddingTop: 48 }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-marker" style={{ marginBottom: 32 }}>
              <div className="section-marker-inner">26'–27' Vehicle, Next Season</div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="project-section" style={{ maxWidth: 680 }}>
              <h3>26'–27' Season Overview</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                The 26'–27' car builds on lessons learned from the 25'–26' build cycle. With the team's
                first full design process complete, the next season targets refinement: tighter suspension
                geometry based on real competition data, improved manufacturing tolerances from laminated
                hub experience, and reduced unsprung mass across all corners. Design will begin following
                the 25'–26' competition.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontStyle: 'italic', marginTop: 8 }}>
                Project pages coming as the design cycle begins.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <DocSlider
              title="26'–27' Design Goals Meeting"
              images={Array.from({ length: 13 }, (_, i) => ({
                src: img(`/images/pdf-2027-design-goals/page-${String(i + 1).padStart(2, '0')}.jpg`),
                alt: `Design goals meeting, page ${i + 1}`,
              }))}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="projects-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Gallery images={gallery} />
        </div>
      </section>

    </div>
  )
}
