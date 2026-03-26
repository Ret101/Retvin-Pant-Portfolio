import DetailPage from '../../components/DetailPage'
import CADEmbed from '../../components/CADEmbed'
import ScrollReveal from '../../components/ScrollReveal'
import Gallery from '../../components/Gallery'

const gallery = [
  { src: '/images/robotic bed full img.png', alt: 'Full assembly' },
  { src: '/images/robotic bed heating pcb.png', alt: 'Heating bed PCB array' },
  { src: '/images/robotic bed control pcb.png', alt: 'Heating bed detail' },
  { src: '/images/bed img.png', alt: 'Scissor lift mechanism' },
]

export default function SwarmHeatedBed() {
  return (
    <DetailPage
      backTo="/industry"
      backLabel="Industry Experience"
      tag="UT SiDi Lab · Research"
      title="Swarm Manufacturing — Hotswappable Heated Bed"
      heroImage="/images/robotic bed full img.png"
      software={['SolidWorks CAD', 'Ansys FEA', 'KiCAD', '3D Printing', 'CNC Mill', 'Presentation Skills']}
      roles={['Mechanical Design Lead']}
      inProgress
    >
      <ScrollReveal>
        <div className="project-section">
          <h3>Introduction</h3>
          <p>
            Completed at the University of Texas at Austin in the SiDi Lab under the supervision of Dr. Sha.
            This project aimed to create a hotswappable lifting heated bed for use in Swarm manufacturing research.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Purpose</h3>
          <p>
            Improve bed adhesion and expand the limits of Swarm manufacturing by creating a theoretically infinite
            printing space for testing. The hotswappable design enables rapid part removal and continuous production
            without manual intervention.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Heating Bed</h3>
          <p>
            An array of custom resistive PCBs provides controlled, even heating of the print surface. The distributed
            PCB layout ensures uniform temperature across the entire bed area, a critical factor for consistent layer
            adhesion in FDM printing.
          </p>
          <div className="project-image-grid">
            <img src="/images/robotic bed heating pcb.png" alt="Heating bed PCB array" loading="lazy" />
            <img src="/images/robotic bed control pcb.png" alt="Heating bed detail" loading="lazy" />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Lifting Mechanism</h3>
          <p>
            A scissor lift powered by a NEMA 24 motor and ball screw raises the bed above the arm base after printing.
            The bed then lowers to the ground, where fans rapidly cool the surface — causing the part to detach and
            enabling immediate restart of the print cycle.
          </p>
          <img src="/images/bed img.png" alt="Scissor lift mechanism" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>System Context</h3>
          <p>
            The heated bed and lifting mechanism were built to work in tandem with a UR5E robotic arm that had been
            converted into a 3D printer. By adding a hotswappable bed, the system significantly increases its printing
            range and throughput — moving toward a theoretical infinite printing space.
          </p>
          <img src="/images/robotic bed full img.png" alt="Full assembly" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Gallery images={gallery} />
      </ScrollReveal>
    </DetailPage>
  )
}
