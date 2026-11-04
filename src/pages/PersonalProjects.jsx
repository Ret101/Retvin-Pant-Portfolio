import ProjectCard from '../components/ProjectCard'
import { personal as projects } from '../data/listings'

export default function PersonalProjects() {
  return (
    <div className="page-wrapper">
      <header className="page-head container">
        <h1><span className="plate plate-line">Personal Projects</span></h1>
        <div>
          <p className="page-count">{projects.length} projects</p>
          <p>Self-directed engineering builds exploring electronics, combat robotics, and custom fabrication.</p>
        </div>
      </header>

      <section className="projects-section">
        <div className="container">

          <div className="project-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} {...p} delay={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
