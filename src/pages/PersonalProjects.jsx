import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'

const projects = [
  {
    image: '/images/skateboard horizontal.jpg',
    title: 'Electric Skateboard',
    description: 'Custom-built electric skateboard reaching 12 mph and 15 miles per charge, built for ~$250 using ESP32 and custom CAD parts.',
    to: '/personal/electric-skateboard',
  },
  {
    image: '/images/battlebot.jpg',
    title: 'Beetleweight Battlebot',
    description: 'Sub-3 lb combat robot for Texas Roborumble at UT Austin — vertical spinner with TPU chassis, went 3-2-0.',
    to: '/personal/beetleweight',
  },
]

export default function PersonalProjects() {
  return (
    <div className="page-wrapper">
      <section className="projects-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2><span className="section-title-accent">Personal Projects</span></h2>
              <div className="section-header-bar" />
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 40, maxWidth: 600, fontSize: '0.95rem' }}>
              Self-directed engineering builds exploring electronics, combat robotics, and custom fabrication.
            </p>
          </ScrollReveal>

          <div className="project-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>
            {projects.map((p, i) => (
              <ProjectCard key={p.title} {...p} tag="Personal" delay={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
