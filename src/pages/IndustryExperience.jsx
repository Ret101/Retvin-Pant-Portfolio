import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import { industry, research } from '../data/listings'

function Section({ title, intro, items }) {
  return (
    <>
      <ScrollReveal className="section-head">
        <h2>{title}</h2>
        <p>{intro}</p>
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
      <header className="page-head container">
        <h1><span className="plate plate-line">Industry and Research</span></h1>
        <div>
          <p className="page-count">{industry.length + research.length} projects</p>
          <p>What I designed on the job and in the lab, from a lunar rover wheel to a robotic manufacturing cell.</p>
        </div>
      </header>

      <section className="projects-section">
        <div className="container">
          <Section
            title="Internships"
            intro="Hardware I designed during internships at Daikin, NASA Johnson Space Center, and SPARX Engineering."
            items={industry}
          />
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <Section
            title="Research"
            intro="Hardware I designed in university research labs: the UT Austin SiDi Lab and the TEES Robotics, Automation and Design (RAD) Lab."
            items={research}
          />
        </div>
      </section>
    </div>
  )
}
