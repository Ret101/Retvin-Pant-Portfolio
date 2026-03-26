import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import img from '../img'

const projects = [
  {
    image: img('/images/roboball.jpg'),
    title: 'Roboball',
    description: 'Engineering prototype developed during industry experience.',
    to: null,
    comingSoon: true,
  },
  {
    image: img('/images/robotic bed full img.png'),
    title: 'Swarm Manufacturing — Hotswappable Heated Bed',
    description: 'UT SiDi Lab: custom resistive PCB heated bed with scissor-lift mechanism for Swarm 3D manufacturing.',
    to: '/industry/swarm-heated-bed',
    inProgress: true,
  },
  {
    image: img('/images/UR5E.jpg'),
    title: 'Swarm Manufacturing — Extruder',
    description: 'UT SiDi Lab: custom extruder design for the UR5E robotic arm converted into a 3D printer.',
    to: '/industry/swarm-extruder',
  },
  {
    image: img('/images/spring steel wheel.jpg'),
    title: 'Spring Steel Wheel',
    description: 'NASA Johnson Space Center: spring steel wheel prototype and universal hub for Microchariot lunar rover testing.',
    to: '/industry/spring-steel-wheel',
  },
  {
    image: img('/images/sweetsifter.jpg'),
    title: 'Automated Candy Sorter',
    description: 'SPARX Engineering: autonomous multi-stage self-sorting machine with ~90% accuracy, showcased at trade shows.',
    to: '/industry/candy-sorter',
  },
]

export default function IndustryExperience() {
  return (
    <div className="page-wrapper">
      <section className="projects-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2><span className="section-title-accent">Industry Experience</span></h2>
              <div className="section-header-bar" />
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 40, maxWidth: 600, fontSize: '0.95rem' }}>
              Professional work completed at NASA Johnson Space Center, SPARX Engineering, and the UT Austin SiDi Lab.
            </p>
          </ScrollReveal>

          <div className="project-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} {...p} tag="Industry" delay={(i % 3) + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
