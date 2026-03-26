import { useEffect, useRef, useState } from 'react'
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
    skills: ['SolidWorks', 'Onshape', 'AutoCAD', 'CATIA', 'Fusion 360', 'GD&T', 'Technical Drawing', 'Sheet Metal Design', 'KiCAD'],
  },
  {
    label: 'Analysis & Simulation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    skills: ['Ansys FEA', 'SolidWorks FEA', 'SolidWorks Flow Simulation', 'MATLAB', 'Lotus Shark', 'Static Analysis', 'Dynamic Analysis', 'Hand Calculations', 'Tolerance Stack-Up'],
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
    skills: ['3D Printing (FDM)', 'SLA 3D Printing', 'CNC Milling', 'Lathe', 'Waterjet', 'Welding (MIG/TIG)', 'Sheet Metal', 'Epoxy Coating', 'Soldering', 'PCB Assembly'],
  },
  {
    label: 'Programming',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: ['Python', 'C++', 'MATLAB', 'Arduino', 'G-Code', 'OpenCV', 'PyQt5', 'ESP-NOW', 'Serial Communication', 'Git'],
  },
  {
    label: 'Tools & Methods',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    skills: ['Excel / Spreadsheet Modeling', 'Technical Writing', 'GD&T', 'DFM / DFA', 'Root Cause Analysis', 'DFMEA', 'Prototyping', 'BOM Management', 'Presentation Skills', 'Trade Show Demos'],
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
    skills: ['Team Management', 'Project Planning', 'Stakeholder Communication', 'Mentorship', 'Technical Presentations', 'Technical Team Captain', 'Pit Boss', 'Cross-functional Collaboration', 'Scheduling', 'Budget Management'],
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
]

// ─── Radar / Spider Chart ───────────────────────────────────────────────────────

// All 5 charts share the same 6 axis angles so the polygon morphs cleanly between them.
const ANGLES = [-90, -30, 30, 90, 150, 210]

const radarCharts = [
  {
    title: 'Core Software',
    axes: [
      { label: 'SolidWorks',   pct: 95, angle: ANGLES[0] },
      { label: 'Ansys FEA',    pct: 80, angle: ANGLES[1] },
      { label: 'Onshape',      pct: 78, angle: ANGLES[2] },
      { label: 'Fusion 360',   pct: 72, angle: ANGLES[3] },
      { label: 'MATLAB',       pct: 65, angle: ANGLES[4] },
      { label: 'Python',       pct: 70, angle: ANGLES[5] },
    ],
  },
  {
    title: 'Design & Analysis',
    axes: [
      { label: 'Mech. Design',  pct: 92, angle: ANGLES[0] },
      { label: 'FEA Analysis',  pct: 82, angle: ANGLES[1] },
      { label: 'GD&T',          pct: 85, angle: ANGLES[2] },
      { label: 'DFM / DFA',     pct: 78, angle: ANGLES[3] },
      { label: 'Flow Sim',      pct: 70, angle: ANGLES[4] },
      { label: 'Tech Drawing',  pct: 80, angle: ANGLES[5] },
    ],
  },
  {
    title: 'Fabrication',
    axes: [
      { label: '3D Printing',  pct: 90, angle: ANGLES[0] },
      { label: 'CNC Milling',  pct: 80, angle: ANGLES[1] },
      { label: 'Lathe',        pct: 75, angle: ANGLES[2] },
      { label: 'Welding',      pct: 68, angle: ANGLES[3] },
      { label: 'Waterjet',     pct: 72, angle: ANGLES[4] },
      { label: 'Sheet Metal',  pct: 68, angle: ANGLES[5] },
    ],
  },
  {
    title: 'Programming',
    axes: [
      { label: 'Python',   pct: 70, angle: ANGLES[0] },
      { label: 'C++',      pct: 62, angle: ANGLES[1] },
      { label: 'Arduino',  pct: 72, angle: ANGLES[2] },
      { label: 'G-Code',   pct: 65, angle: ANGLES[3] },
      { label: 'OpenCV',   pct: 55, angle: ANGLES[4] },
      { label: 'ESP-NOW',  pct: 58, angle: ANGLES[5] },
    ],
  },
  {
    title: 'Leadership',
    axes: [
      { label: 'Team Mgmt',    pct: 85, angle: ANGLES[0] },
      { label: 'Presenting',   pct: 88, angle: ANGLES[1] },
      { label: 'Planning',     pct: 82, angle: ANGLES[2] },
      { label: 'Mentorship',   pct: 80, angle: ANGLES[3] },
      { label: 'Stakeholders', pct: 78, angle: ANGLES[4] },
      { label: 'Tech Writing', pct: 76, angle: ANGLES[5] },
    ],
  },
]

const CX = 220, CY = 220, MAX_R = 155
const toRad = deg => (deg * Math.PI) / 180

function pt(angleDeg, fraction) {
  return {
    x: CX + MAX_R * fraction * Math.cos(toRad(angleDeg)),
    y: CY + MAX_R * fraction * Math.sin(toRad(angleDeg)),
  }
}

function axesToPts(axes, scale = 1) {
  return axes.map(a => {
    const p = pt(a.angle, (a.pct / 100) * scale)
    return `${p.x.toFixed(2)},${p.y.toFixed(2)}`
  }).join(' ')
}

function gridPts(axes, level) {
  return axes.map(a => {
    const p = pt(a.angle, level)
    return `${p.x.toFixed(2)},${p.y.toFixed(2)}`
  }).join(' ')
}

const GRID_LEVELS = [0.25, 0.5, 0.75, 1.0]
const LABEL_SCALE = 1.22

function labelAnchor(angle) {
  if (Math.abs(angle) === 90) return 'middle'
  if (angle > -75 && angle < 75) return 'start'
  return 'end'
}
function labelBaseline(angle) {
  if (angle === -90) return 'auto'
  if (angle === 90) return 'hanging'
  return 'middle'
}

function RadarChartSlideshow() {
  const polygonRef   = useRef(null)
  const containerRef = useRef(null)
  const didAnimate   = useRef(false)
  const animating    = useRef(false)

  const [activeChart, setActiveChart] = useState(0)
  const [labelVisible, setLabelVisible] = useState(true)
  const [hovered, setHovered] = useState(null)

  const currentAxes = radarCharts[activeChart].axes

  // Initial scroll-in animation (chart 0 only)
  useEffect(() => {
    if (polygonRef.current) {
      polygonRef.current.setAttribute('points', Array(6).fill(`${CX},${CY}`).join(' '))
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !didAnimate.current) {
        didAnimate.current = true
        const start = performance.now()
        const tick = (now) => {
          const t    = Math.min((now - start) / 800, 1)
          const ease = 1 - Math.pow(1 - t, 3)
          if (polygonRef.current) {
            polygonRef.current.setAttribute('points', axesToPts(radarCharts[0].axes, ease))
          }
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.25 })

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const goTo = (newIdx) => {
    if (animating.current || newIdx === activeChart) return
    animating.current = true
    setHovered(null)
    setLabelVisible(false)

    const fromAxes = radarCharts[activeChart].axes
    const toAxes   = radarCharts[newIdx].axes

    setTimeout(() => {
      setActiveChart(newIdx) // labels swap while invisible

      const start = performance.now()
      const dur   = 550

      const tick = (now) => {
        const t = Math.min((now - start) / dur, 1)
        // ease in-out cubic
        const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2

        const pts = fromAxes.map((fa, i) => {
          const ta    = toAxes[i]
          const interp = fa.pct + (ta.pct - fa.pct) * e
          const p     = pt(fa.angle, interp / 100)
          return `${p.x.toFixed(2)},${p.y.toFixed(2)}`
        }).join(' ')

        if (polygonRef.current) polygonRef.current.setAttribute('points', pts)

        if (t < 1) {
          requestAnimationFrame(tick)
        } else {
          setLabelVisible(true)
          animating.current = false
        }
      }

      requestAnimationFrame(tick)
    }, 180) // wait for label CSS fade
  }

  const n = radarCharts.length

  return (
    <div ref={containerRef} className="radar-wrap">

      {/* Chart title + navigation */}
      <div className="radar-nav-row">
        <button className="radar-nav-arrow" onClick={() => goTo((activeChart - 1 + n) % n)} aria-label="Previous chart">‹</button>
        <span className={`radar-chart-title${labelVisible ? '' : ' fading'}`}>
          {radarCharts[activeChart].title}
        </span>
        <button className="radar-nav-arrow" onClick={() => goTo((activeChart + 1) % n)} aria-label="Next chart">›</button>
      </div>

      {/* SVG */}
      <svg viewBox="0 0 440 440" className="radar-svg" aria-hidden="true">
        {/* Grid rings */}
        {GRID_LEVELS.map(level => (
          <polygon key={level} className="radar-grid-ring" points={gridPts(currentAxes, level)} />
        ))}

        {/* Axis spokes */}
        {currentAxes.map(a => {
          const end = pt(a.angle, 1)
          return (
            <line key={a.label} className="radar-axis-line"
              x1={CX} y1={CY} x2={end.x.toFixed(2)} y2={end.y.toFixed(2)} />
          )
        })}

        {/* Animated fill polygon */}
        <polygon ref={polygonRef} className="radar-fill-poly"
          points={Array(6).fill(`${CX},${CY}`).join(' ')} />

        {/* Data dots */}
        <g className={labelVisible ? '' : 'radar-group-fading'}>
          {currentAxes.map((a, i) => {
            const p = pt(a.angle, a.pct / 100)
            return (
              <circle key={a.label}
                className={`radar-dot${hovered === i ? ' radar-dot-active' : ''}`}
                cx={p.x.toFixed(2)} cy={p.y.toFixed(2)}
                r={hovered === i ? 7 : 5}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)} />
            )
          })}
        </g>

        {/* Axis labels */}
        <g className={labelVisible ? '' : 'radar-group-fading'}>
          {currentAxes.map(a => {
            const lp = pt(a.angle, LABEL_SCALE)
            return (
              <text key={a.label} className="radar-label"
                x={lp.x.toFixed(2)} y={lp.y.toFixed(2)}
                textAnchor={labelAnchor(a.angle)}
                dominantBaseline={labelBaseline(a.angle)}>
                {a.label}
              </text>
            )
          })}
        </g>

        {/* Hover tooltip */}
        {hovered !== null && (() => {
          const a  = currentAxes[hovered]
          const p  = pt(a.angle, a.pct / 100)
          const tx = p.x, ty = p.y - 22
          return (
            <g pointerEvents="none">
              <rect x={tx - 54} y={ty - 14} width={108} height={22} rx={5} className="radar-tooltip-bg" />
              <text x={tx} y={ty - 3} textAnchor="middle" className="radar-tooltip-text">
                {a.label}: {a.pct}%
              </text>
            </g>
          )
        })()}
      </svg>

      {/* Dot pagination */}
      <div className="radar-nav-dots">
        {radarCharts.map((c, i) => (
          <button key={i} className={`radar-nav-dot${i === activeChart ? ' active' : ''}`}
            onClick={() => goTo(i)} aria-label={c.title} />
        ))}
      </div>

      {/* Legend */}
      <div className={`radar-legend${labelVisible ? '' : ' radar-legend-fading'}`}>
        {currentAxes.map((a, i) => (
          <div key={a.label}
            className={`radar-legend-item${hovered === i ? ' active' : ''}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}>
            <span className="radar-legend-dot" />
            <span className="radar-legend-label">{a.label}</span>
            <span className="radar-legend-pct">{a.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  )
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
        {skills.map(s => (
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
            </div>
          </ScrollReveal>

          {/* Radar Slideshow */}
          <ScrollReveal>
            <div className="card radar-card">
              <div className="skills-highlights-label">Core Proficiencies</div>
              <RadarChartSlideshow />
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
