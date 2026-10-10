import { Link } from 'react-router-dom'
import { FiDownload } from 'react-icons/fi'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import ProjectCard from '../../components/ProjectCard'
import StickyTOC from '../../components/StickyTOC'
import img from '../../img'

const toc = [
  { id: 'overview',                label: 'Overview'                },
  { id: 'leadership',              label: 'Leadership'              },
  { id: 'vehicle-25-26',           label: "25'–26' Vehicle"         },
  { id: 'design-philosophy',       label: 'Design Philosophy'       },
  { id: 'engineering-constraints', label: 'Engineering Constraints' },
  { id: 'geometry-simulation',     label: 'Geometry & Simulation'   },
  { id: 'system-integration',      label: 'Integration & Targets'   },
  { id: 'parts',                   label: 'Parts I Worked On'       },
  { id: 'season-results',          label: 'Season Results'          },
  { id: 'drb',                     label: 'Design Review'           },
  { id: 'vehicle-26-27',           label: "26'–27' Vehicle"         },
]

const teamStats = [
  { value: 'Co-Founder', label: 'Team Role' },
  { value: 'Co-Captain', label: 'Leadership' },
  { value: 'Vehicle Dynamics Lead', label: 'Technical Lead' },
]

const philosophy = [
  { title: 'Rule Compliance', text: 'Design to margin, leaving more than 1 in and 3° of tolerance on Baja SAE rules, with at least two mock tech reviews built into design and fabrication.' },
  { title: 'Manufacturability', text: 'Use OEM components and subsystems where possible, minimize custom CNC parts, and keep manufacturing modular to suit a non-permanent workspace.' },
  { title: 'Durability', text: 'Minimum factor of safety above 2 on all critical components under 5–7 g of load, prioritizing durability over weight.' },
  { title: 'Serviceability', text: 'Critical outboard components easy to reach and replace, fewer fastener sizes, and quick fasteners wherever possible.' },
]

const constraints = [
  { title: 'Spec Engine', text: 'Every team runs the same competition-mandated engine, so performance comes from chassis and dynamics, not horsepower.' },
  { title: 'No Legacy Vehicle', text: 'All geometry derived from first principles, with no previous car to reference.' },
  { title: 'Competition Durability', text: 'Suspension must survive endurance, impact, and service loads.' },
  { title: 'Cross-Team Packaging', text: 'Steering, drivetrain, and chassis share common hardpoints with no margin for error.' },
]

const specGroups = [
  {
    title: 'Vehicle',
    specs: [
      ['Wheelbase', '72.5 in'],
      ['Track Width (F/R)', '56.77 in'],
      ['Wheel Travel', '12 in'],
    ],
  },
]

const goals2627 = [
  { tag: 'Packaging', title: 'Same Chassis, Tighter Packaging', text: 'With a limited budget, the chassis carries over. The focus shifts to packaging: how close and compact every system can sit in the car, as groundwork for future 4WD development.' },
  { tag: 'Suspension & Dynamics', title: 'Ride Height, Steering, and Weight', text: 'Revise the suspension for ride height and steering interferences, and fix the weight issues found on the first car.' },
  { tag: 'Manufacturing', title: 'Better DFM and DFA', text: 'Design suspension and dynamics parts to be easier to make and assemble, using off-the-shelf parts where applicable.' },
  { tag: 'Durability', title: 'Two Competitions, Five Months of Testing', text: 'Parts sized to survive both Williamsport and Michigan 2027 plus roughly five months of testing.' },
]

const seasonResults = [
  { value: '65th / 83', label: 'Overall Finish' },
  { value: 'Passed', label: 'Technical Inspection' },
  { value: 'Passed', label: 'Dynamic Brake Check' },
  { value: '3 Laps', label: 'Endurance Completed' },
]

const subprojects25 = [
  {
    image: img('/images/Trailing Arm Images/WhatsApp Image 2026-10-03 at 5.46.39 PM (6).jpeg'),
    title: 'Control Arms',
    description: 'Load-path optimized suspension links sized against max cornering, bump, and combined load cases. Geometry fixed by master sketch; structural cross-section driven by FEA.',
    to: '/baja/control-arms',
  },
  {
    image: img('/images/rear hub machined image.jpg'),
    title: 'Rear Hubs',
    description: 'Drive torque transmission with laminated spline manufacturing, eliminating broach and wire EDM constraints while meeting the axle interface and unsprung mass targets.',
    to: '/baja/rear-hubs',
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
    image: img('/images/CV Axle Modification.jpeg'),
    title: 'Modified CV Axles',
    description: 'Stock CV axles were too short and narrowed the rear track. Extended them with machined press-fit sleeves and welded joints, keeping the shaft coaxial and restoring the designed track width.',
    to: '/baja/cv-axles',
  },
  {
    image: img('/images/car mastersketch v2.png'),
    title: 'Vehicle Master Sketch',
    description: 'Single source of truth for all suspension hardpoints. Defines roll and pitch instantaneous centers, camber curves, and packaging constraints that every downstream component is built from.',
    to: '/baja/master-sketch',
    inProgress: false,
  },
]

export default function LonghornBaja() {
  return (
    <div className="page-wrapper">
      <StickyTOC sections={toc} />

      {/* ── Hero ── */}
      <div className="cinematic-header" style={{ height: 'clamp(320px, 70vh, 760px)' }}>
        {/* Portrait photo in a wide header: blurred copy fills the sides, sharp copy shows the whole jump */}
        <div className="cinematic-header-bg" style={{ backgroundImage: `url('${img('/images/baja sae hero image.jpeg')}')`, backgroundPosition: 'center 60%', filter: 'blur(28px) brightness(0.45)' }} />
        <div
          className="cinematic-header-bg"
          style={{
            backgroundImage: `url('${img('/images/baja sae hero image.jpeg')}')`,
            backgroundColor: 'transparent',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center 61%',
            filter: 'brightness(0.8)',
            // Sized to the photo at ~2.6x header height, centred, edges faded into the blur
            left: '50%',
            right: 'auto',
            aspectRatio: '1.75',
            transform: 'translateX(-50%)',
            maskImage: 'linear-gradient(to right, transparent, #000 18%, #000 82%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, #000 18%, #000 82%, transparent)',
          }}
        />
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
      <section id="overview" className="projects-section" style={{ paddingTop: 40, paddingBottom: 0 }}>
        <div className="container">
          <ScrollReveal>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 16, maxWidth: 700, fontSize: '0.95rem', lineHeight: 1.75 }}>
              I co-founded Longhorn Baja Racing and serve as Co-Captain and Vehicle Dynamics &amp; Vehicle
              Systems Lead. For the team's first competition vehicle I was responsible for end-to-end vehicle
              architecture: suspension geometry, kinematic targets, and cross-team packaging and integration
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
            <div id="leadership" className="project-section" style={{ marginBottom: 0 }}>
              <h3 style={{ fontSize: '1.6rem' }}>Leadership &amp; Team Development</h3>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.92rem' }}>
                <li>Co-founded the team and, as Co-Captain, led it through its first full design cycle to its first competition</li>
                <li>Worked with UT Austin administration to establish the new team and support its operations as a student organization</li>
                <li>Led CAD trainings to bring new members up to speed on the team's design tools and workflow</li>
                <li>Guided design development across subsystems, reviewing designs as they progressed from concept to manufacturing</li>
                <li>Led the team's progress on the Design Review Briefing (DRB) submitted for competition</li>
                <li>Owned cross-team packaging and integration for all subsystems, coordinating chassis, drivetrain, steering, and hubs</li>
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
                  <li><strong style={{ color: 'var(--text-primary)' }}>Powertrain:</strong> Kohler engine with CVT, competition-mandated</li>
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

          <ScrollReveal>
            <div id="design-philosophy" className="project-section">
              <h3 style={{ fontSize: '1.6rem' }}>Design Philosophy</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 760 }}>
                As a first-year team, the 25'–26' car was designed around four priorities, in order.
              </p>
              <div className="lessons-grid">
                {philosophy.map((c, i) => (
                  <div key={c.title} className="lesson-card">
                    <span className="lesson-card-tag">{`Priority ${i + 1}`}</span>
                    <h4 className="lesson-card-title">{c.title}</h4>
                    <p>{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div id="engineering-constraints" className="project-section">
              <h3 style={{ fontSize: '1.6rem' }}>Engineering Constraints</h3>
              <div className="lessons-grid">
                {constraints.map(c => (
                  <div key={c.title} className="lesson-card">
                    <h4 className="lesson-card-title">{c.title}</h4>
                    <p>{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div id="geometry-simulation" className="project-section">
              <h3 style={{ fontSize: '1.6rem' }}>Geometry &amp; Simulation</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 760 }}>
                I defined the front and rear suspension hardpoints from first principles and kept them in a
                single master sketch, the source of truth for suspension, steering, and chassis interfaces.
                Kinematics were validated in Lotus Shark over multiple design cycles before geometry was
                released to subsystem designers. The kinematic results and spring rates are on the{' '}
                <Link to="/baja/control-arms" style={{ color: 'var(--accent-light)' }}>Control Arms</Link> page.
              </p>
              {specGroups.map(g => (
                <div key={g.title} className="spec-group">
                  <div className="spec-group-title">{g.title}</div>
                  <div className="spec-grid">
                    {g.specs.map(([label, value]) => (
                      <div key={label} className="spec-tile">
                        <div className="spec-tile-value">{value}</div>
                        <div className="spec-tile-label">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div id="system-integration" className="project-section">
              <h3 style={{ fontSize: '1.6rem' }}>Integration &amp; Targets</h3>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.92rem' }}>
                <li>Led cross-team packaging and integration for all subsystems</li>
                <li>Set braking, steering response, and per-corner unsprung mass targets, and translated them into subsystem design specs</li>
                <li>Defined shared hardpoints and interface boundaries across chassis, drivetrain, steering, and hubs</li>
                <li>Resolved conflicts between suspension travel, drivetrain routing, and chassis packaging as the design iterated</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div id="parts" className="project-section" style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: '1.6rem' }}>Parts I Worked On</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 760 }}>
                Subsystem components I designed, analyzed, or developed for the 25'–26' car.
              </p>
            </div>
          </ScrollReveal>

          <div className="project-grid">
            {subprojects25.map((p, i) => (
              <ProjectCard key={p.title} {...p} delay={(i % 3) + 1} />
            ))}
          </div>

          <ScrollReveal>
            <div id="season-results" className="project-section" style={{ marginTop: 64 }}>
              <h3 style={{ fontSize: '1.6rem' }}>Season Results</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 760 }}>
                As a first-year team, the main goal at competition was to pass technical inspection, which
                we did. The car also passed the dynamic brake check and finished 65th overall out of 83 teams.
              </p>
              <StatRow stats={seasonResults} />
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 760, marginTop: 20 }}>
                We then competed in the endurance race, where the driveshaft (a separate part from the
                extended CV axles) fell out of the rear differential multiple times. We still completed 3
                full laps.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div id="drb" className="doc-card card">
              <a href={img('/documents/Longhorn-Baja-185-DRB.pdf')} target="_blank" rel="noopener noreferrer" className="doc-card-preview">
                <img src={img('/images/drb-cover.webp')} alt="2026 Baja SAE Design Review Briefing title slide, car 185" loading="lazy" />
              </a>
              <div className="doc-card-body">
                <span className="doc-card-tag">Competition Document · PDF · 74 slides</span>
                <h3 className="doc-card-title">Design Review Briefing (DRB)</h3>
                <p className="doc-card-desc">
                  The team's 2026 Baja SAE design review for car #185, presenting the full vehicle design
                  across every subsystem to the competition judges. I led the team's progress on the DRB.
                </p>
                <div className="doc-card-actions">
                  <a href={img('/documents/Longhorn-Baja-185-DRB.pdf')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View DRB
                  </a>
                  <a href={img('/documents/Longhorn-Baja-185-DRB.pdf')} download="Longhorn-Baja-185-DRB.pdf" className="btn btn-outline">
                    <FiDownload size={14} />
                    Download
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
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
            <div className="project-section">
              <h3>An Evolution of the First Car</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 760 }}>
                The 26'–27' car is an improvement on the 25'–26' car rather than a clean-sheet design. With
                money limited, the chassis stays the same and the effort goes into packaging, refinement, and
                durability.
              </p>
              <div className="lessons-grid">
                <div className="lesson-card lesson-card-key">
                  <span className="lesson-card-tag">Main Goal</span>
                  <h4 className="lesson-card-title">Test, and Learn as Much as Possible</h4>
                  <p>
                    Testing is the priority this season: run the car hard and learn as much as possible to feed
                    future iterations.
                  </p>
                </div>
                {goals2627.map(g => (
                  <div key={g.title} className="lesson-card">
                    <span className="lesson-card-tag">{g.tag}</span>
                    <h4 className="lesson-card-title">{g.title}</h4>
                    <p>{g.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Season Photo Gallery link ── */}
      <section className="projects-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ScrollReveal>
            <Link to="/baja/gallery" className="gallery-banner">
              <img src={img('/images/baja-gallery/DSC05988.webp')} alt="Longhorn Baja Racing team with the 25'–26' car" className="gallery-banner-img" loading="lazy" />
              <div className="gallery-banner-overlay" />
              <div className="gallery-banner-content">
                <span className="gallery-banner-tag">25'–26' Season · Photos</span>
                <h3 className="gallery-banner-title">Memories from the Season</h3>
                <span className="gallery-banner-link">View Gallery →</span>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}
