import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'
import { FiDownload, FiArrowDown, FiArrowUpRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import HeroBackdrop, { slides, useSlide } from '../components/HeroBackdrop'
import ScrollReveal from '../components/ScrollReveal'
import { projectSequence, startHere } from '../data/projects'
import { industry, research, team, personal } from '../data/listings'
import img from '../img'

const categories = [
  { to: '/industry', title: 'Industry & Research', count: industry.length + research.length, image: img('/images/spring steel wheel.jpg') },
  { to: '/team', title: 'Team Projects', count: team.length, image: img('/images/brownout robot frc.jpg') },
  { to: '/personal', title: 'Personal Projects', count: personal.length, image: img('/images/battlebot.jpg') },
]

const logos = [
  { name: 'Boeing', role: 'Incoming intern', logo: '/images/boeing-logo.svg', invert: true, row: 'Boeing' },
  { name: 'Tesla', role: 'Incoming intern', logo: '/images/tesla-logo.svg', row: 'Tesla' },
  { name: 'Daikin', role: 'Intern', logo: '/images/daikin-logo.svg', invert: true, to: '/industry/daikin' },
  { name: 'NASA JSC', role: 'Intern', logo: '/images/nasa-logo.svg', to: '/industry/spring-steel-wheel' },
  { name: 'UT SiDi Lab', role: 'Researcher', logo: '/images/sidi lab logo.png', to: '/industry/swarm-heated-bed' },
  { name: 'Longhorn Baja', role: 'Co-Captain', logo: '/images/lbr-logo-trimmed.png', to: '/baja' },
]

const rowId = org => 'exp-' + org.toLowerCase().replace(/[^a-z0-9]+/g, '-')

// Glide to an experience row and flash it so the eye lands on it
function showRow(org, reduceMotion) {
  const el = document.getElementById(rowId(org))
  if (!el) return
  el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' })
  el.classList.remove('is-flash')
  void el.offsetWidth
  el.classList.add('is-flash')
}

const groups = ['Industry & Research', 'Longhorn Baja Racing', 'Team Projects', 'Personal']

const record = [
  {
    group: 'Next',
    rows: [
      { org: 'Boeing', role: 'Structures Engineering Intern, International Space Station', date: 'Summer 2027', logo: '/images/boeing-logo.svg', next: true },
      { org: 'Tesla', role: 'Automation Engineering Intern', date: 'Winter–Spring 2027', logo: '/images/tesla-logo.svg', next: true },
    ],
  },
  {
    group: 'Internships and research',
    rows: [
      { org: 'Daikin', role: 'Automation Engineering Intern, material handling and tooling design', date: 'Summer 2026', logo: '/images/daikin-logo.svg', to: '/industry/daikin' },
      { org: 'Robotics, Automation and Design Lab', role: 'Research Intern', date: 'Summer 2025', logo: '/images/radlab-trimmed.png' },
      { org: 'UT Austin SiDi Lab', role: 'Undergraduate Research Assistant', date: '2024–now', logo: '/images/sidi lab logo.png', to: '/industry/swarm-heated-bed' },
      { org: 'NASA Johnson Space Center', role: 'Mechanical Engineering Intern, wheel and hub design', date: 'Summer 2024', logo: '/images/nasa-logo.svg', to: '/industry/spring-steel-wheel' },
      { org: 'SPARX Engineering', role: 'Mechanical Engineering Intern', date: '2023–2024', logo: '/images/sparx engineering logo.png', to: '/industry/candy-sorter' },
    ],
  },
  {
    group: 'Teams and leadership',
    rows: [
      { org: 'SAE at UT Austin', role: 'Chapter Chair', date: '2026–now', logo: '/images/SAE_International_logo.svg' },
      { org: 'Longhorn Baja Racing', role: 'Co-Founder, Co-Captain, Vehicle Dynamics Lead', date: '2025–now', logo: '/images/lbr-logo-trimmed.png', to: '/baja' },
      { org: 'Texas Guadaloop', role: 'Vehicle Dynamics Engineer', date: '2025', logo: '/images/guadaloop.png', to: '/team/guadaloop' },
      { org: 'FRC Team 5414', role: 'Technical Team Captain', date: '2021–2024', logo: '/images/pearadox.png', to: '/team/frc-robots' },
    ],
  },
]

const stats = [
  { value: String(record.find(g => g.group === 'Internships and research').rows.length + record.find(g => g.group === 'Next').rows.length), label: 'internships and research roles, including Tesla and Boeing' },
  { value: '3', label: 'teams led: Baja co-captain, SAE chapter chair, FRC technical captain' },
  { value: String(projectSequence.length), label: 'projects documented, each with the reasoning behind it' },
]

const bajaFrames = ['DSC05747', 'DSC05821', 'DSC05807', 'DSC05843', 'DSC05825', 'DSC05899', 'DSC05774', 'DSC05988']

function WorkIndex() {
  const [active, setActive] = useState(projectSequence[0].to)
  const current = projectSequence.find(p => p.to === active) ?? projectSequence[0]

  return (
    <div className="work-index">
      <div className="work-list">
        {groups.map(g => (
          <ScrollReveal key={g} className="work-group">
            <h3 className="work-group-title">{g}</h3>
            <ul>
              {projectSequence.filter(p => p.group === g).map(p => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className={`work-row${p.to === active ? ' is-active' : ''}`}
                    onMouseEnter={() => setActive(p.to)}
                    onFocus={() => setActive(p.to)}
                  >
                    <img className="work-row-thumb" src={p.image} alt="" loading="lazy" />
                    <span className="work-row-title">{p.title}</span>
                    <span className="work-row-tag">{p.tag}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        ))}
      </div>

      <div className="work-preview" aria-hidden="true">
        <div className="work-preview-frame">
          {projectSequence.map(p => (
            <img
              key={p.to}
              src={p.image}
              alt=""
              loading="lazy"
              className={p.to === current.to ? 'is-shown' : ''}
            />
          ))}
        </div>
        <p className="work-preview-caption">
          <strong>{current.title}.</strong> {current.blurb}
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  const reduceMotion = useReducedMotion()
  const [slide, setSlide] = useSlide()
  return (
    <div className="home">
      {/* First screen: the board, in front of the work rotating behind it */}
      <section className="pit-hero">
        <HeroBackdrop current={slide} />
        <div className="container hero-bento">
          <figure className="glass bento-photo">
            <img
              src={img('/images/profile-baja.webp')}
              alt="Retvin Pant sitting on the roll cage of Longhorn Baja car 185"
              width="800"
              height="800"
              fetchpriority="high"
            />
          </figure>

          <div className="glass bento-intro pit-board">
            <h1 className="pit-name">
              <span className="plate">Retvin</span> <span className="plate">Pant</span>
            </h1>
            <div className="plate-row">
              <span className="plate plate-mid">Mechanical + product design</span>
              <span className="plate plate-mid plate-next">Next: Tesla, then Boeing</span>
            </div>
            <p className="pit-lead">
              I'm Retvin Pant, a mechanical engineering student at UT Austin who designs hardware from
              concept to competition, from lunar rover wheels to race car suspension. My analysis and
              manufacturing experience means I design parts that survive their loads and can actually be
              built. Most recently at Daikin, I designed four material-handling systems and the robot
              tooling for an automated heat exchanger manufacturing cell.
            </p>
            <div className="pit-edu">
              <img src={img('/images/ut austin logo.png')} alt="" width="44" height="44" />
              <p>
                <strong>B.S. Mechanical Engineering, UT Austin</strong>
                <span>Minor in Business · 2024 to December 2027</span>
              </p>
            </div>
            <div className="pit-actions">
              <a href={img('/resume.pdf')} download="Resume_Retvin_Pant.pdf" className="btn btn-primary">
                <FiDownload aria-hidden="true" /> Download resume
              </a>
              <a
                href="#work"
                className="text-link"
                onClick={e => {
                  e.preventDefault()
                  document.getElementById('work')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
                }}
              >
                See the work <FiArrowDown aria-hidden="true" />
              </a>
              <span className="pit-social">
                <a href="https://github.com/Ret101" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
                <a href="http://www.linkedin.com/in/retvin-pant" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              </span>
            </div>
          </div>

          <nav className="bento-tiles" aria-label="Project categories">
            {categories.map(c => (
              <Link key={c.to} to={c.to} className="glass bento-tile">
                <img src={c.image} alt="" loading="lazy" />
                <span className="bento-tile-text">
                  <span className="bento-tile-title">{c.title}</span>
                  <span className="bento-tile-count">{c.count} projects</span>
                </span>
                <FiArrowUpRight className="bento-tile-arrow" aria-hidden="true" />
              </Link>
            ))}
          </nav>
        </div>
        <div className="pit-slides container">
          <Link to={slides[slide].to} className="pit-slide-label">{slides[slide].label}</Link>
          <div className="pit-dots">
            {slides.map((s, i) => (
              <button
                key={s.src}
                className={i === slide ? 'is-on' : ''}
                onClick={() => setSlide(i)}
                aria-label={`Show ${s.label}`}
                aria-pressed={i === slide}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Where I have worked, at a glance */}
      <section className="container logo-strip-section" aria-label="Companies and teams">
        <ul className="logo-strip">
          {logos.map(l => {
            const inner = (
              <>
                <span className="logo-tile-mark"><img src={img(l.logo)} alt="" style={l.invert ? { filter: 'brightness(0) invert(1)' } : undefined} loading="lazy" /></span>
                <span className="logo-tile-name">{l.name}</span>
                <span className="logo-tile-role">{l.role}</span>
                <FiArrowUpRight className="logo-tile-arrow" aria-hidden="true" />
              </>
            )
            return (
              <li key={l.name}>
                {l.to
                  ? <Link to={l.to} className="logo-tile" aria-label={`${l.name}, ${l.role}: open the project`}>{inner}</Link>
                  : (
                    <a
                      href={`#${rowId(l.row)}`}
                      className="logo-tile"
                      aria-label={`${l.name}, ${l.role}: see it in Where I have worked`}
                      onClick={e => { e.preventDefault(); showRow(l.row, reduceMotion) }}
                    >
                      {inner}
                    </a>
                  )}
              </li>
            )
          })}
        </ul>
      </section>

      {/* Start here: the three projects to read first */}
      <section className="section container" aria-labelledby="start-here">
        <h2 id="start-here" className="start-here-title">Start with these</h2>
        <div className="start-here">
          {startHere.map((to, i) => {
            const p = projectSequence.find(x => x.to === to)
            return (
              <ScrollReveal key={to} delay={i + 1} className="start-card-wrap">
                <Link to={to} className="start-card">
                  <span className="start-card-media"><img src={p.image} alt="" loading="lazy" /></span>
                  <span className="start-card-body">
                    <span className="start-card-tag">{p.tag}</span>
                    <span className="start-card-title">{p.title}</span>
                    <span className="start-card-result">{p.result}</span>
                    <span className="start-card-link">Read the case study <FiArrowUpRight aria-hidden="true" /></span>
                  </span>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      {/* The work */}
      <section id="work" className="section container">
        <div className="bento-panel">
        <ScrollReveal className="section-head">
          <h2>The work</h2>
          <p>All eighteen projects, each with the reasoning behind it and what I would change next time.</p>
        </ScrollReveal>
        <WorkIndex />
        </div>
      </section>

      {/* Baja: the orange field */}
      <section className="section container">
       <div className="baja-field">
        <div className="baja-field-inner">
          <ScrollReveal className="baja-copy">
            <h2>Longhorn Baja Racing</h2>
            <p>
              In 2025 I co-founded UT Austin's Baja SAE team. As Co-Captain and Vehicle Dynamics Lead I
              set the vehicle architecture: the suspension hardpoints, the kinematic targets, and how
              every subsystem packages around them. Car 185 was the team's first car, designed with
              no earlier car to start from. It passed technical inspection and finished 65th of 83.
            </p>
            <div className="baja-actions">
              <Link to="/baja" className="btn btn-ink">Read the Baja story</Link>
              <Link to="/baja/gallery" className="text-link text-link-ink">
                Season photos <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal className="baja-video" delay={1}>
            <video
              src={img('/images/home/trailing-arm-loop.mp4')}
              poster={img('/images/home/trailing-arm-loop.jpg')}
              autoPlay={!reduceMotion}
              controls={!!reduceMotion}
              muted
              loop
              playsInline
              aria-label="Rear trailing arm cycling through its suspension travel on the bench"
            />
            <p className="baja-video-caption">The rear trailing arm I designed, cycled through its travel on the bench.</p>
          </ScrollReveal>
        </div>
        <ul className="baja-strip" aria-label="Car 185 photos">
          {bajaFrames.map(f => (
            <li key={f}>
              <img src={img(`/images/baja-gallery/${f}.webp`)} alt="Longhorn Baja car 185" loading="lazy" />
            </li>
          ))}
        </ul>
       </div>
      </section>

      {/* The record */}
      <section className="section container">
        <div className="bento-panel record">
        <ScrollReveal className="record-head">
          <h2>Where I have worked</h2>
          <p>Internships, research labs and the teams I have led, newest first. Rows with an arrow open the project.</p>
        </ScrollReveal>
        <div className="record-list">
          {/* One line for the career sequence (Next, then internships); teams ran alongside, so they get their own */}
          {[record.slice(0, 2), record.slice(2)].map((track, t) => (
            <div key={t} className="record-track">
            {track.map(({ group, rows }) => (
              <ScrollReveal key={group} className="record-group">
                <h3 className={group === 'Next' ? 'record-group-title is-next' : 'record-group-title'}>{group}</h3>
                <ul>
                  {rows.map(r => {
                    const inner = (
                      <>
                        <span className="record-logo"><img src={img(r.logo)} alt="" loading="lazy" /></span>
                        <span className="record-text">
                          <span className="record-org">{r.org}{r.to && <FiArrowUpRight aria-hidden="true" />}</span>
                          <span className="record-role">{r.role}</span>
                        </span>
                        <span className="record-date">{r.date}</span>
                      </>
                    )
                    return (
                      <li key={r.org} id={rowId(r.org)}>
                        {r.to
                          ? <Link to={r.to} className="record-row is-link">{inner}</Link>
                          : <div className="record-row">{inner}</div>}
                      </li>
                    )
                  })}
                </ul>
              </ScrollReveal>
            ))}
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* About */}
      <section className="section container about">
        <ScrollReveal className="about-photo bento-panel">
          <img src={img('/images/home/DSC05599.webp')} alt="Retvin working on the chassis of Longhorn Baja car 185 at competition" width="1100" height="1650" loading="lazy" />
        </ScrollReveal>
        <ScrollReveal className="about-copy bento-panel" delay={1}>
          <h2>About</h2>
          <p className="about-lead">
            I started as technical captain of FRC Team 5414, building competition robots. In 2025 I
            co-founded Longhorn Baja Racing at UT Austin and set the suspension geometry for its first
            car. Along the way, internships at SPARX, NASA and Daikin taught me to design for the load
            case and the machine shop at the same time.
          </p>

          <ul className="about-stats">
            {stats.map(s => (
              <li key={s.label}>
                <span className="plate about-stat-value">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </li>
            ))}
          </ul>

          <p className="about-seeking">
            <span className="plate plate-mid plate-next">Looking for mechanical and product design roles</span>
          </p>
          <div className="about-school">
            <img src={img('/images/ut austin logo.png')} alt="" width="52" height="52" />
            <p>
              <strong>B.S. Mechanical Engineering</strong>
              <span>The University of Texas at Austin · Minor in Business</span>
            </p>
            <span className="about-grad">
              <span className="about-grad-label">Graduating</span>
              <span className="plate about-grad-date">Dec 2027</span>
            </span>
          </div>

          <div className="about-links">
            <a href={img('/resume.pdf')} download="Resume_Retvin_Pant.pdf" className="btn btn-primary">
              <FiDownload aria-hidden="true" /> Download resume
            </a>
            <Link to="/skills" className="text-link">Tools and skills <FiArrowUpRight aria-hidden="true" /></Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
