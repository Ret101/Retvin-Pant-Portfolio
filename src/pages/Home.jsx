import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'
import HeroCarousel from '../components/HeroCarousel'

const companies = [
  {
    name: 'NASA JSC',
    role: 'Intern',
    logo: 'https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo@2x.png',
    filter: 'none',
  },
  {
    name: 'SPARX Engineering',
    role: 'Intern',
    logo: '/images/sparx engineering logo.png',
    filter: 'none',
  },
  {
    name: 'SAE at UT Austin',
    role: 'Chapter Chair',
    logo: 'https://sae-static-content-prod.cl.sae.org/logos/svg/sae.svg',
    filter: 'brightness(0) invert(1)',
  },
  {
    name: 'UT SiDi Lab',
    role: 'Researcher',
    logo: '/images/sidi lab logo.png',
    filter: 'none',
  },
  {
    name: 'SAE Longhorn Baja',
    role: 'Co-Captain',
    logo: '/images/lbr-logo.png',
    filter: 'none',
  },
]

const timelineEntries = [
  {
    date: 'Summer 2026',
    org: 'Daikin',
    role: 'Automation Engineering Intern',
    tag: 'Internship',
    to: null,
  },
  {
    date: '2026 – Present',
    org: 'SAE at UT Austin',
    role: 'Chapter Chair',
    tag: 'Leadership',
    to: null,
  },
  {
    date: '2025 – Present',
    org: 'Longhorn Baja Racing',
    role: 'Co-Founder · Co-Captain · Vehicle Dynamics Lead',
    tag: 'Student Org',
    to: '/team/longhorn-baja',
  },
  {
    date: 'Summer 2025',
    org: 'Robotics, Automation and Design Lab',
    role: 'Research Intern',
    tag: 'Internship',
    to: null,
  },
  {
    date: '2024 – Present',
    org: 'UT Austin SiDi Lab',
    role: 'Undergraduate Research Assistant',
    tag: 'Research',
    to: '/industry/swarm-heated-bed',
  },
  {
    date: 'Summer 2024',
    org: 'NASA Johnson Space Center',
    role: 'Mechanical Engineering Intern',
    tag: 'Internship',
    to: '/industry/spring-steel-wheel',
  },
  {
    date: 'Summer 2023',
    org: 'SPARX Engineering',
    role: 'Mechanical Engineering Intern',
    tag: 'Internship',
    to: '/industry/candy-sorter',
  },
  {
    date: '2022 – 2024',
    org: 'Texas Guadaloop',
    role: 'Vehicle Dynamics Engineer',
    tag: 'Student Org',
    to: '/team/guadaloop',
  },
  {
    date: '2021 – 2024',
    org: 'FRC Team 5414',
    role: 'Technical Team Captain',
    tag: 'Robotics',
    to: '/team/frc-robots',
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
                src="/images/RAD_2496.jpg"
                alt="Retvin Pant"
                className="hero-photo"
              />
              <div className="hero-name">Retvin Pant</div>
              <div className="hero-title">Mechanical Engineering Student</div>
              <div className="hero-school">University of Texas at Austin</div>
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
                I Build It.
              </h1>
              <p className="hero-bio-text">
                I'm Retvin Pant, a mechanical engineering student at the University of Texas at Austin
                building real systems — from 6DOF robotic printers to vehicle subsystems and hardware
                prototypes. Check out my projects and resume to see what I've been working on.
              </p>
              <div className="hero-bio-actions">
                <a
                  href="https://d2b0d7e8-68b9-42c1-892a-1d906e88c17d.filesusr.com/ugd/073043_4edf17ac796c4659ac687ca0df9b1d6b.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  <div className="cta-card-title">Industry<br />Experience</div>
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
                        style={{ filter: c.filter || 'none' }}
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
                  <div className="zz-date">{entry.date}</div>
                  <div className="zz-org">{entry.org}</div>
                  <div className="zz-role">{entry.role}</div>
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
