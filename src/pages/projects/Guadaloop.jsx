import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import DocSlider from '../../components/DocSlider'
import Gallery from '../../components/Gallery'
import StatRow from '../../components/StatRow'
import StickyTOC from '../../components/StickyTOC'
import img from '../../img'

const specs = [
  { value: 'Vehicle Dynamics', label: 'My Role' },
  { value: 'FEA Engineer', label: 'Analysis Role' },
  { value: 'Bogie Dynamics', label: 'My Subsystem' },
  { value: '7', label: 'Team Size' },
]

const toc = [
  { id: 'engineering-challenge', label: 'Engineering Challenge'     },
  { id: 'my-contribution',       label: 'My Contribution'           },
  { id: 'bogie-architecture',    label: 'Bogie Architecture'        },
  { id: 'pod-design',            label: 'Pod Design & Systems'      },
  { id: 'fea',                   label: 'FEA'                       },
  { id: 'manufacturing',         label: 'Manufacturing'             },
]

const gallery = [
  { src: img('/images/guad pod.png'), alt: 'Hyperloop dynamics pod' },
  { src: img('/images/Pod Breakdown.png'), alt: 'Pod design overview' },
  { src: img('/images/guadaloop pod fea.png'), alt: 'FEA results' },
]


export default function Guadaloop() {
  return (
    <>
      <StickyTOC sections={toc} />
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
        <div id="engineering-challenge" className="project-section">
          <h3>Engineering Challenge</h3>
          <p>
            The bogie must do three conflicting things at once: magnetically levitate the pod above
            the track for low-resistance propulsion, absorb high-cycle vibration from track
            irregularities without transmitting shock to the chassis above, and, in a power failure , 
            transition from full magnetic hover to a controlled pneumatic stop fast enough to avoid
            structural overload. Designing for that failure scenario was the central structural problem.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <StatRow stats={specs} />
      </ScrollReveal>

      <ScrollReveal>
        <div id="my-contribution" className="project-section">
          <h3>My Contribution</h3>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.95rem' }}>
            <li>Performed subsystem integration checks to prevent interference between track, bogie chassis, and main chassis</li>
            <li>Analyzed the bogie structure under the power-failure braking scenario, the governing load case</li>
            <li>Ran FEA to evaluate maximum forces and calculated factor of safety across all critical members</li>
            <li>Used FEA results to validate structural geometry and identify where margin was insufficient</li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="bogie-architecture" className="project-section">
          <h3>Why This Bogie Architecture</h3>
          <p>
            The pod competes at the EHW hyperloop competition in the Netherlands, where the track
            and rules constrain propulsion to a linear induction motor and levitation to passive
            magnetic yokes. That constraint drives every other system decision, the bogie must
            package the LIM, yokes, air springs, and braking hardware within a fixed track envelope
            while keeping the center of mass low enough that the pod doesn't roll under lateral LIM forces.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="pod-design" className="project-section">
          <h3>Pod Design &amp; Systems</h3>
          <p>
            The bogie carries the main chassis above it on air springs and uses vertical magnetic
            yokes to maintain hover position on the track. Key systems integrated within the bogie envelope:
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.95rem' }}>
            <li>Air springs, chassis isolation from track shock</li>
            <li>Linear induction motor, electromagnetic propulsion along the guideway</li>
            <li>Vertical magnetic yokes, passive hover above the track rail</li>
            <li>Antiroll bar, lateral stability under LIM side forces</li>
            <li>Pneumatic brakes, fail-safe stop on power loss, independent of electrical system</li>
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
        <div id="fea" className="project-section">
          <h3>FEA, Power Failure Load Case</h3>
          <p>
            The governing load case is power failure: the pod drops from magnetic hover onto backup
            wheels and decelerates under full pneumatic braking. This produces the maximum combined
            vertical impact and longitudinal deceleration force the bogie structure ever sees.
            FEA was run across this scenario to evaluate peak stress in all critical members and
            calculate factor of safety. The analysis confirmed the structural geometry was sufficient
           , and identified two members where margin was tighter than desired, leading to a cross-section
            increase before finalizing the design.
          </p>
          <img
            src={img('/images/guadaloop pod fea.png')}
            alt="FEA results – power failure load case"
            className="project-image-single"
            loading="lazy"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="manufacturing" className="project-section">
          <h3>Manufacturing</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: 16 }}>
            Most bogie components started as large raw aluminum stock, which meant each part required
            significant material removal before reaching final geometry. With only a miter saw and drill
            press available to the team, conventional layout and marking methods were too slow to meet
            the build schedule.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: 24 }}>
            The solution was to produce 1:1 scale engineering drawings of every part and physically
            place them directly onto the raw stock as cutting and drilling templates. This eliminated
            measurement transfer errors, let multiple parts be laid out simultaneously, and allowed
            the drill press to be used accurately without a milling machine or DRO. The approach
            compressed the fabrication timeline by approximately three weeks across all bogie components.
          </p>
          <DocSlider
            title="Bogie Component Drawings"
            images={[
              { src: img('/images/Guadaloop Drawings/Bogie Bottom Bar.png'),                    alt: 'Bogie bottom bar drawing' },
              { src: img('/images/Guadaloop Drawings/Bolster Drawings.png'),                    alt: 'Bolster component drawings' },
              { src: img('/images/Guadaloop Drawings/Top Bogie Bar.png'),                       alt: 'Top bogie bar drawing' },
              { src: img('/images/Guadaloop Drawings/antiroll bar plate (2).png'),              alt: 'Antiroll bar plate drawing' },
              { src: img('/images/Guadaloop Drawings/bolstertoantirollflange.png'),             alt: 'Bolster to antiroll flange drawing' },
              { src: img('/images/Guadaloop Drawings/bottom vertical wheel assembly plates.png'), alt: 'Bottom vertical wheel assembly plates drawing' },
              { src: img('/images/Guadaloop Drawings/Backup of bogie module bar with slots.png'), alt: 'Bogie module bar with slots drawing' },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Gallery images={gallery} />
      </ScrollReveal>
    </DetailPage>
    </>
  )
}
