import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import Gallery from '../../components/Gallery'
import img from '../../img'

const gallery = [
  { src: img('/images/guad pod.png'), alt: 'Hyperloop dynamics pod' },
  { src: img('/images/Pod Breakdown.png'), alt: 'Pod design overview' },
  { src: img('/images/guadaloop pod fea.png'), alt: 'FEA results' },
]

export default function Guadaloop() {
  return (
    <DetailPage
      backTo="/team"
      backLabel="Team Projects"
      tag="Texas Guadaloop · Austin, TX"
      title="Guadaloop Hyperloop Train Dynamics"
      heroImage={img('/images/guad pod.png')}
      software={['SolidWorks CAD', 'SolidWorks FEA', 'Welding']}
      roles={['Vehicle Dynamics Engineer']}
    >
      <ScrollReveal>
        <div className="project-section">
          <h3>Introduction</h3>
          <p>
            Texas Guadaloop is a UT Austin student team researching hyperloop efficacy through
            scaled-down hyperloop pods. The team competes at the EHW hyperloop pod competition
            in the Netherlands.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Purpose &amp; Result</h3>
          <p>
            Design a bogie system that properly interacts with the hyperloop track and the pod
            chassis — propelling the pod forward while withstanding excessive loads across all
            operating conditions and failure scenarios.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Dynamics Pod</h3>
          <p>
            The hyperloop pod carries the main chassis on top and uses magnetic yokes to traverse
            the track and push the pod forward. The bogie system is responsible for the core
            dynamics of propulsion, guidance, and braking.
          </p>
          <img
            src={img('/images/guad pod.png')}
            alt="Hyperloop dynamics pod"
            className="project-image-single"
            loading="lazy"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Pod Design &amp; Systems</h3>
          <p>
            Worked on pod design to ensure no subsystem interferences between the track, bogie
            chassis, and main chassis above. Key systems include:
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.95rem' }}>
            <li>Air springs cushion the chassis from track-induced shocks</li>
            <li>Linear induction motor for electromagnetic propulsion</li>
            <li>Vertical magnetic yokes maintain hover position on the track</li>
            <li>Antiroll bar assembly prevents undesired roll forces at speed</li>
            <li>Pneumatic braking: on power failure, yokes disengage → wheels contact track → pneumatic brakes engage → rapid stop</li>
          </ul>
          <img
            src={img('/images/Pod Breakdown.png')}
            alt="Pod design overview"
            className="project-image-single"
            loading="lazy"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>FEA — Failure Scenario Analysis</h3>
          <p>
            Performed Finite Element Analysis on the pod for critical failure scenarios, most notably
            power failure. Evaluated maximum forces acting on the structure and calculated the Factor
            of Safety across all critical members.
          </p>
          <img
            src={img('/images/guadaloop pod fea.png')}
            alt="FEA results"
            className="project-image-single"
            loading="lazy"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Gallery images={gallery} />
      </ScrollReveal>
    </DetailPage>
  )
}
