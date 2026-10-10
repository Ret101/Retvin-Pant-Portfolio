import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

// ─── Skill Category Data ────────────────────────────────────────────────────────

const skillCategories = [
  {
    label: 'CAD & Design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    skills: ['SolidWorks', 'Onshape', 'AutoCAD', 'CATIA', 'Fusion 360', 'GD&T', 'Technical Drawing', 'Sheet Metal Design', 'Press-Fit Design', 'KiCAD'],
  },
  {
    label: 'Analysis & Simulation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    skills: ['Ansys FEA', 'SolidWorks FEA', 'Lotus Shark', 'Suspension Kinematics', 'Weld Design & Analysis', 'Free-Body / Load Path Analysis', 'Hand Calculations', 'Tolerance Stack-Up'],
  },
  {
    label: 'Manufacturing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93A10 10 0 0 0 4.93 19.07M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"/>
        <line x1="12" y1="2" x2="12" y2="4"/>
        <line x1="12" y1="20" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="4" y2="12"/>
        <line x1="20" y1="12" x2="22" y2="12"/>
      </svg>
    ),
    skills: ['3D Printing (FDM)', 'SLA 3D Printing', 'CNC Milling', 'Lathe', 'Waterjet', 'Sheet Metal', 'Epoxy Coating', 'Soldering', 'PCB Assembly'],
  },
  {
    label: 'Programming',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: ['Python', 'MATLAB', 'Arduino', 'G-Code', 'OpenCV', 'PyQt5', 'FANUC RoboGuide', 'ESP-NOW', 'Serial Communication', 'Git'],
  },
  {
    label: 'Tools & Methods',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    skills: ['Excel / Spreadsheet Modeling', 'Technical Writing', 'DFM / DFA', 'Root Cause Analysis', 'DFMEA', 'Prototyping', 'BOM Management', 'Trade Show Demos'],
  },
  {
    label: 'Leadership',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    skills: ['Team Management', 'Project Planning', 'Stakeholder Communication', 'Mentorship', 'Technical Presentations', 'Cross-functional Collaboration', 'Scheduling', 'Budget Management'],
  },
]

const tools = [
  { name: 'SolidWorks' },
  { name: 'Ansys'      },
  { name: 'Python'     },
  { name: 'MATLAB'     },
  { name: 'Onshape'    },
  { name: 'Arduino'    },
  { name: 'Fusion 360' },
  { name: 'Git'        },
  { name: 'OpenCV'     },
  { name: 'G-Code'     },
  { name: 'FANUC RoboGuide' },
  { name: 'AutoCAD'    },
]

// Skills that link to a project page where they were actually used
const skillProof = {
  'Lotus Shark':                  '/baja/control-arms',
  'Suspension Kinematics':        '/baja/master-sketch',
  'Ansys FEA':                    '/baja/rear-hubs',
  'Weld Design & Analysis':       '/baja/cv-axles',
  'Press-Fit Design':             '/baja/cv-axles',
  'Hand Calculations':            '/baja/cv-axles',
  'FANUC RoboGuide':              '/industry/daikin',
  'Excel / Spreadsheet Modeling': '/industry/daikin',
  'OpenCV':                       '/industry/candy-sorter',
  'PyQt5':                        '/industry/candy-sorter',
  'ESP-NOW':                      '/personal/electric-skateboard',
}

// ─── Skill Card ────────────────────────────────────────────────────────────────

function SkillCard({ label, icon, skills }) {
  const handlePillClick = (e) => {
    const el = e.currentTarget
    el.classList.remove('pill-pulse')
    void el.offsetWidth
    el.classList.add('pill-pulse')
    el.addEventListener('animationend', () => el.classList.remove('pill-pulse'), { once: true })
  }

  return (
    <div className="skills-cat-card-v2">
      <div className="skills-cat-header-v2">
        <span className="skills-cat-icon-v2">{icon}</span>
        <span className="skills-cat-label-v2">{label}</span>
      </div>
      <div className="pill-group skills-pill-group">
        {skills.map(s => skillProof[s] ? (
          <Link key={s} to={skillProof[s]} className="skill-pill skill-pill-link" title="See where I used this">
            {s}
          </Link>
        ) : (
          <span key={s} className="skill-pill" onClick={handlePillClick}>{s}</span>
        ))}
      </div>
    </div>
  )
}

// ─── Typewriter Hook ───────────────────────────────────────────────────────────

function useTypewriter(text, speed = 18) {
  const ref       = useRef(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.textContent = ''

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true
        let i = 0
        const interval = setInterval(() => {
          if (i < text.length) { el.textContent += text[i]; i++ }
          else clearInterval(interval)
        }, speed)
      }
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [text, speed])

  return ref
}

// ─── Page ──────────────────────────────────────────────────────────────────────

const SUBTITLE = "A snapshot of the tools, software, and methods I've built proficiency in across coursework, research, and hands-on engineering projects."

export default function Skills() {
  const subtitleRef = useTypewriter(SUBTITLE)

  return (
    <div className="page-wrapper">
      <section className="projects-section">
        <div className="container">

          {/* Header */}
          <ScrollReveal>
            <div className="skills-header-block">
              <h2 className="skills-heading"><span className="section-title-accent">Skills</span></h2>
              <div className="skills-underline-bar" />
              <p ref={subtitleRef} className="skills-subtitle-tw" aria-label={SUBTITLE}>&nbsp;</p>
              <p className="skills-proof-note">Highlighted skills link to a project where I used them.</p>
            </div>
          </ScrollReveal>

          {/* Marquee */}
          <ScrollReveal>
            <div className="skills-marquee-section">
              <div className="skills-marquee-label">Tools I Use</div>
              <div className="marquee-outer">
                <div className="marquee-track">
                  {[...tools, ...tools].map((t, i) => (
                    <div key={i} className="marquee-badge">
                      <span className="marquee-badge-dot" />
                      <span className="marquee-badge-name">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Category Cards */}
          <div className="skills-grid">
            {skillCategories.map((cat, i) => (
              <ScrollReveal key={cat.label} delay={(i % 3) + 1}>
                <SkillCard {...cat} />
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}
