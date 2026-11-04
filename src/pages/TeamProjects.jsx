import ProjectCard from '../components/ProjectCard'
import { team as projects } from '../data/listings'

export default function TeamProjects() {
  return (
    <div className="page-wrapper">
      <header className="page-head container">
        <h1><span className="plate plate-line">Team Projects</span></h1>
        <div>
          <p className="page-count">{projects.length} projects</p>
          <p>Collaborative engineering projects including SAE Baja, hyperloop, and FIRST Robotics competitions.</p>
        </div>
      </header>

      <section className="projects-section">
        <div className="container">

          <div className="project-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} {...p} delay={(i % 3) + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
