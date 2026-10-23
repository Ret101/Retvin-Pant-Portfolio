import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'
import HeroCarousel from '../components/HeroCarousel'
import img from '../img'

// Width / height of each logo's artwork, so every logo can be drawn at the same visual area
// (wide wordmarks get wider and shorter, square marks get taller) instead of one fixed box.
const LOGO_ASPECT = {
  [img('/images/boeing-logo.svg')]: 4.30,
  [img('/images/tesla-logo.svg')]: 1.00,
  [img('/images/nasa-logo.svg')]: 1.20,
  [img('/images/daikin-logo.svg')]: 4.64,
  [img('/images/SAE_International_logo.svg')]: 1.62,
  [img('/images/sidi lab logo.png')]: 1.00,
  [img('/images/lbr-logo-trimmed.png')]: 3.70,
  [img('/images/radlab-trimmed.png')]: 5.02,
  [img('/images/guadaloop.png')]: 1.00,
  [img('/images/sparx engineering logo.png')]: 1.00,
  [img('/images/pearadox.png')]: 0.87,
}

// Artwork with built-in whitespace or very thin strokes reads small at equal area, so nudge it up
const LOGO_SCALE = {
  [img('/images/nasa-logo.svg')]: 1.3,
  [img('/images/boeing-logo.svg')]: 1.15,
  [img('/images/sparx engineering logo.png')]: 1.25,
}

function logoSize(src, area, maxW, maxH) {
  const a = LOGO_ASPECT[src] ?? 1
  const k = LOGO_SCALE[src] ?? 1
  let w = Math.sqrt(area * a) * k
  let h = w / a
  if (w > maxW) { w = maxW; h = w / a }
  if (h > maxH) { h = maxH; w = h * a }
  return { width: Math.round(w), height: Math.round(h) }
}

const companies = [
  {
    name: 'Boeing',
    role: 'Intern',
    logo: img('/images/boeing-logo.svg'),
    // Navy wordmark would disappear on the dark card, render it white
    filter: 'brightness(0) invert(1)',
  },
  {
    name: 'Tesla',
    role: 'Intern',
    logo: img('/images/tesla-logo.svg'),
    filter: 'none',
  },
  {
    name: 'NASA JSC',
    role: 'Intern',
    logo: img('/images/nasa-logo.svg'),
    filter: 'none',
  },
  {
    name: 'Daikin',
    role: 'Intern',
    logo: img('/images/daikin-logo.svg'),
    // Near-black lettering would disappear on the dark card, render it white
    filter: 'brightness(0) invert(1)',
  },
  {
    name: 'UT SiDi Lab',
    role: 'Researcher',
    logo: img('/images/sidi lab logo.png'),
    filter: 'none',
  },
  {
    name: 'SAE Longhorn Baja',
    role: 'Co-Captain',
    logo: img('/images/lbr-logo-trimmed.png'),
    filter: 'none',
  },
]

const timelineEntries = [
  {
    date: 'Summer 2027',
    org: 'Boeing',
    role: 'Incoming Structures Engineering Intern · International Space Station',
    tag: 'Incoming',
    to: null,
    logo: img('/images/boeing-logo.svg'),
  },
  {
    date: 'Winter / Spring 2027',
    org: 'Tesla',
    role: 'Incoming Automation Engineering Intern',
    tag: 'Incoming',
    to: null,
    logo: img('/images/tesla-logo.svg'),
  },
  {
    date: 'Summer 2026',
    org: 'Daikin',
    role: 'Automation Engineering Intern · Material Handling & Tooling Design',
    tag: 'Internship',
    to: '/industry/daikin',
    logo: img('/images/daikin-logo.svg'),
  },
  {
    date: '2026 – Present',
    org: 'SAE at UT Austin',
    role: 'Chapter Chair',
    tag: 'Leadership',
    to: null,
    logo: img('/images/SAE_International_logo.svg'),
  },
  {
    date: '2025 – Present',
    org: 'Longhorn Baja Racing',
    role: 'Co-Founder · Co-Captain · Vehicle Dynamics Lead · Suspension Design',
    tag: 'Student Org',
    to: '/baja',
    logo: img('/images/lbr-logo-trimmed.png'),
  },
  {
    date: 'Summer 2025',
    org: 'Robotics, Automation and Design Lab',
    role: 'Research Intern',
    tag: 'Internship',
    to: null,
    logo: img('/images/radlab-trimmed.png'),
  },
  {
    date: 'Spring – Fall 2025',
    org: 'Texas Guadaloop',
    role: 'Vehicle Dynamics Engineer',
    tag: 'Student Org',
    to: '/team/guadaloop',
    logo: img('/images/guadaloop.png'),
  },
  {
    date: '2024 – Present',
    org: 'UT Austin SiDi Lab',
    role: 'Undergraduate Research Assistant',
    tag: 'Research',
    to: '/industry/swarm-heated-bed',
    logo: img('/images/sidi lab logo.png'),
  },
  {
    date: 'Summer 2024',
    org: 'NASA Johnson Space Center',
    role: 'Mechanical Engineering Intern · Wheel & Hub Design',
    tag: 'Internship',
    to: '/industry/spring-steel-wheel',
    logo: img('/images/nasa-logo.svg'),
  },
  {
    date: 'Aug 2023 – June 2024',
    org: 'SPARX Engineering',
    role: 'Mechanical Engineering Intern',
    tag: 'Internship',
    to: '/industry/candy-sorter',
    logo: img('/images/sparx engineering logo.png'),
  },
  {
    date: '2021 – 2024',
    org: 'FRC Team 5414',
    role: 'Technical Team Captain',
    tag: 'Robotics',
    to: '/team/frc-robots',
    logo: img('/images/pearadox.png'),
  },
]

export default function Home() {
  return (
    <div className="page-wrapper">
      <section className="hero-section">
        <HeroCarousel />
        <div className="container hero-section-content">
          <div className="hero-grid bento-grid">

            {/* Profile card */}
            <ScrollReveal className="hero-profile card" delay={1}>
              <img
                src={img('/images/profile-baja.webp')}
                alt="Retvin Pant"
                className="hero-photo"
              />
              <div className="hero-name">Retvin Pant</div>
              <div className="hero-title">Mechanical Engineering Student</div>
              <div className="hero-education">
                <img
                  src={img('/images/ut austin logo.png')}
                  alt="UT Austin"
                  className="hero-edu-logo"
                />
                <div className="hero-edu-text">
                  <span className="hero-edu-degree">B.S. Mechanical Engineering</span>
                  <span className="hero-edu-minor">Minor in Business</span>
                  <span className="hero-edu-years">2024 – December 2027</span>
                </div>
              </div>
              <div className="hero-social-links">
                <a href="https://github.com/Ret101" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FiGithub />
                </a>
                <a href="http://www.linkedin.com/in/retvin-pant" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
              </div>
            </ScrollReveal>

            {/* Bio card */}
            <ScrollReveal className="hero-bio card" delay={2}>
              <div className="hero-bio-label">Portfolio</div>
              <h1 className="hero-bio-heading">
                From Rovers<br />
                to <span style={{ color: 'var(--accent)' }}>Race Cars</span>,<br />
                I Design It.
              </h1>
              <div className="hero-bio-chips">
                <span className="hero-bio-chip">ME + Business · UT Austin · Dec 2027</span>
                <span className="hero-bio-chip">Incoming Tesla Automation Engineering Intern</span>
                <span className="hero-bio-chip">Incoming Boeing Structures Intern</span>
                <span className="hero-bio-chip">Seeking Mechanical / Product Design roles</span>
              </div>
              <p className="hero-bio-text">
                I'm Retvin Pant, a mechanical engineering student at UT Austin who designs hardware from
                concept to competition, from lunar rover wheels to race car suspension. My analysis and
                manufacturing experience means I design parts that survive their loads and can actually be built.
              </p>
              <div className="hero-bio-actions">
                <a
                  href={img('/resume.pdf')}
                  download="Resume_Retvin_Pant.pdf"
                  className="btn btn-primary"
                >
                  <FiDownload size={14} />
                  Download Resume
                </a>
                <Link to="/industry" className="btn btn-outline">View Work</Link>
              </div>
            </ScrollReveal>

            {/* CTA cards */}
            <ScrollReveal delay={3} className="hero-cta-industry">
              <Link to="/industry" className="card-link" style={{ height: '100%', display: 'block' }}>
                <div className="cta-card card" style={{ height: '100%' }}>
                  <div className="cta-card-number">01</div>
                  <div className="cta-card-title">Industry &<br />Research</div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={4} className="hero-cta-team">
              <Link to="/team" className="card-link" style={{ height: '100%', display: 'block' }}>
                <div className="cta-card card" style={{ height: '100%' }}>
                  <div className="cta-card-number">02</div>
                  <div className="cta-card-title">Team<br />Projects</div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={5} className="hero-cta-personal">
              <Link to="/personal" className="card-link" style={{ height: '100%', display: 'block' }}>
                <div className="cta-card card" style={{ height: '100%' }}>
                  <div className="cta-card-number">03</div>
                  <div className="cta-card-title">Personal<br />Projects</div>
                </div>
              </Link>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Company logos strip */}

      <section style={{ padding: '64px 0 64px' }}>
        <div className="container">
          <ScrollReveal>
            <div className="company-strip">
              {companies.map((c, i) => (
                <div key={c.name} className="company-badge">
                  <div className="company-logo-wrap">
                    {c.logo ? (
                      <img
                        src={c.logo}
                        alt={c.name}
                        className="company-logo-img"
                        style={{ filter: c.filter || 'none', ...logoSize(c.logo, 1900, 120, 44) }}
                        loading="lazy"
                      />
                    ) : (
                      <div className="company-logo-initials">{c.initials}</div>
                    )}
                  </div>
                  <div className="company-badge-name">{c.name}</div>
                  <div className="company-badge-role">{c.role}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience Timeline */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header" style={{ marginBottom: 48 }}>
              <h2><span className="section-title-accent">Experience</span></h2>
              <div className="section-header-bar" />
            </div>
          </ScrollReveal>

          <div className="zz-timeline">
            <div className="zz-spine" />
            {timelineEntries.map((entry, i) => {
              const isLeft = i % 2 === 0
              const inner = (
                <div className={`zz-card card${entry.to ? ' zz-card-link' : ''}`}>
                  <div className="zz-card-top">
                    <span className="pill">{entry.tag}</span>
                    {entry.to && <span className="zz-arrow">→</span>}
                  </div>
                  <div className="zz-card-main">
                    <div className="zz-logo">
                      {entry.logo
                        ? <img src={entry.logo} alt={`${entry.org} logo`} style={logoSize(entry.logo, 850, 76, 34)} loading="lazy" />
                        : <span className="zz-logo-initials">{entry.initials}</span>}
                    </div>
                    <div className="zz-card-text">
                      <div className="zz-date">{entry.date}</div>
                      <div className="zz-org">{entry.org}</div>
                      <div className="zz-role">{entry.role}</div>
                    </div>
                  </div>
                </div>
              )
              return (
                <ScrollReveal key={entry.org + entry.date} delay={(i % 3) + 1} className={`zz-entry ${isLeft ? 'zz-left' : 'zz-right'}`}>
                  {isLeft ? (
                    <>
                      <div className="zz-side">
                        {entry.to ? <Link to={entry.to} className="card-link">{inner}</Link> : inner}
                      </div>
                      <div className="zz-dot-col"><div className="zz-dot" /></div>
                      <div className="zz-side" />
                    </>
                  ) : (
                    <>
                      <div className="zz-side" />
                      <div className="zz-dot-col"><div className="zz-dot" /></div>
                      <div className="zz-side">
                        {entry.to ? <Link to={entry.to} className="card-link">{inner}</Link> : inner}
                      </div>
                    </>
                  )}
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
