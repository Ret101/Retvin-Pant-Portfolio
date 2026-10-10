import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import img from '../img'

const industry = [
  {
    image: img('/images/Daikin/Full Cell (2).webp'),
    title: 'Heat Exchanger Automated Manufacturing Cell',
    description: 'Daikin: robotic cell for heat exchanger forming and bending, covering cell layout, robot integration, material handling, and end-of-arm tooling.',
    to: '/industry/daikin',
    tag: 'Daikin · Summer 2026',
    restricted: true,
    restrictedLabel: 'Limited Information',
    // Transparent-background render sitting low in the frame, crop toward the bottom over off-white
    imageStyle: { objectPosition: 'center bottom', background: '#f2f0ec' },
  },
  {
    image: img('/images/spring steel wheel.jpg'),
    title: 'Spring Steel Wheel',
    description: 'NASA Johnson Space Center: spring steel wheel prototype and universal hub for Microchariot lunar rover testing.',
    to: '/industry/spring-steel-wheel',
    tag: 'NASA JSC · Summer 2024',
  },
  {
    image: img('/images/sweetsifter.jpg'),
    title: 'Automated Candy Sorter',
    description: 'SPARX Engineering: autonomous multi-stage self-sorting machine with ~90% accuracy, showcased at trade shows.',
    to: '/industry/candy-sorter',
    tag: 'SPARX · 2023 – 2024',
  },
]

const research = [
  {
    image: img('/images/heated bed crossbar bending failure.jpg'),
    title: 'Swarm Manufacturing, Hotswappable Heated Bed',
    description: 'UT SiDi Lab: custom resistive PCB heated bed with scissor-lift mechanism for Swarm 3D manufacturing.',
    to: '/industry/swarm-heated-bed',
    tag: 'UT SiDi Lab · 2024 – Present',
    imageStyle: { objectPosition: 'center 62%' },
    inProgress: true,
  },
  {
    image: img('/images/UR5E.jpg'),
    title: 'Swarm Manufacturing, Extruder',
    description: 'UT SiDi Lab: custom extruder design for the UR5E robotic arm converted into a 3D printer.',
    to: '/industry/swarm-extruder',
    tag: 'UT SiDi Lab · Fall 2024',
  },
  {
    image: img('/images/roboball.jpg'),
    title: 'Roboball',
    description: 'TEES RAD Lab: engineering prototype developed during a summer research internship.',
    to: null,
    tag: 'TEES RAD Lab · Summer 2025',
    restricted: true,
  },
]

function Section({ title, intro, items }) {
  return (
    <>
      <ScrollReveal>
        <div className="section-header">
          <h2><span className="section-title-accent">{title}</span></h2>
          <div className="section-header-bar" />
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 40, maxWidth: 600, fontSize: '0.95rem' }}>
          {intro}
        </p>
      </ScrollReveal>

      <div className="project-grid">
        {items.map((p, i) => (
          <ProjectCard key={p.title} {...p} delay={(i % 3) + 1} />
        ))}
      </div>
    </>
  )
}

export default function IndustryExperience() {
  return (
    <div className="page-wrapper">
      <section className="projects-section">
        <div className="container">
          <Section
            title="Industry Experience"
            intro="Professional internship work completed at Daikin, NASA Johnson Space Center, and SPARX Engineering."
            items={industry}
          />
        </div>
      </section>

      <section className="projects-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Section
            title="Research"
            intro="University lab research at the UT Austin SiDi Lab and the TEES Robotics, Automation and Design (RAD) Lab."
            items={research}
          />
        </div>
      </section>
    </div>
  )
}
