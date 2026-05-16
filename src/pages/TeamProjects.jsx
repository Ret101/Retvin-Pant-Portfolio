import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import img from '../img'

const projects = [
  {
    image: img('/images/Car Render.webp'),
    title: "SAE Longhorn Baja Racing",
    description: 'Co-founder, Co-Captain & Vehicle Dynamics Lead. Designing a single-seater off-road competition car from scratch for SAE Baja.',
    to: '/baja',
    inProgress: true,
  },
  {
    image: img('/images/guad pod.png'),
    title: 'Guadaloop Hyperloop Train Dynamics',
    description: 'Vehicle Dynamics Engineer for Texas Guadaloop, scaled hyperloop pods for the EHW competition in the Netherlands.',
    to: '/team/guadaloop',
  },
  {
    image: img('/images/brownout robot frc.jpg'),
    title: 'FRC Robots (Team 5414)',
    description: 'Technical Captain & Mechanical Designer for three FIRST Robotics Competition robots across the 2023–2024 seasons.',
    to: '/team/frc-robots',
  },
  {
    image: img('/images/roadcase.png'),
    title: 'Robotics Road Case',
    description: 'FRC Team 5414, compact road case enabling faster competition setup and double normal material capacity.',
    to: '/team/robotics-roadcase',
  },
]

export default function TeamProjects() {
  return (
    <div className="page-wrapper">
      <section className="projects-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2><span className="section-title-accent">Team Projects</span></h2>
              <div className="section-header-bar" />
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 40, maxWidth: 600, fontSize: '0.95rem' }}>
              Collaborative engineering projects including SAE Baja, hyperloop, and FIRST Robotics competitions.
            </p>
          </ScrollReveal>

          <div className="project-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} {...p} tag="Team" delay={(i % 3) + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
