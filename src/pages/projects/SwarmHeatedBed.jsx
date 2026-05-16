import DetailPage from '../../components/DetailPage'
import CADEmbed from '../../components/CADEmbed'
import ScrollReveal from '../../components/ScrollReveal'
import Gallery from '../../components/Gallery'
import DocSlider from '../../components/DocSlider'
import StatRow from '../../components/StatRow'
import StickyTOC from '../../components/StickyTOC'
import img from '../../img'

const toc = [
  { id: 'engineering-challenge', label: 'Engineering Challenge' },
  { id: 'my-contribution',       label: 'My Contribution'       },
  { id: 'key-decisions',         label: 'Key Decisions'         },
  { id: 'heating-bed',           label: 'Heating Bed'           },
  { id: 'lifting-mechanism',     label: 'Lifting Mechanism'     },
  { id: 'system-context',        label: 'System Context'        },
  { id: 'pcb-testing',           label: 'PCB Testing'           },
  { id: 'failures',              label: 'Failures'              },
  { id: 'design-docs',           label: 'Design Documents'      },
]

const gallery = [
  { src: img('/images/robotic bed full img.png'), alt: 'Full assembly' },
  { src: img('/images/robotic bed heating pcb.png'), alt: 'Heating bed PCB array' },
  { src: img('/images/robotic bed control pcb.png'), alt: 'Heating bed detail' },
  { src: img('/images/bed img.png'), alt: 'Scissor lift mechanism' },
  { src: img('/images/heated bed crossbar bending failure.jpg'), alt: 'Crossbar bending failure during assembly' },
]

const specs = [
  { value: 'Project Lead', label: 'Ownership' },
  { value: 'Scissor Lift', label: 'Mechanism Type' },
  { value: 'NEMA 24', label: 'Lift Motor' },
  { value: 'PCB Array', label: 'Heating Method' },
]

export default function SwarmHeatedBed() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
      backTo="/industry"
      backLabel="Industry Experience"
      tag="UT SiDi Lab · Research"
      title="Swarm Manufacturing, Hotswappable Heated Bed"
      heroImage={img('/images/robotic bed full img.png')}
      software={['SolidWorks CAD', 'Ansys FEA', 'KiCAD', '3D Printing', 'CNC Mill', 'Presentation Skills']}
      roles={['Mechanical Design Lead']}
      inProgress
    >
      <ScrollReveal>
        <div id="engineering-challenge" className="project-section">
          <h3>Engineering Challenge</h3>
          <p>
            Standard FDM printers pause the print cycle every time a part finishes, the user
            manually removes the part, the bed reheats, and printing restarts. At the scale of
            swarm manufacturing, that manual pause becomes the throughput bottleneck. The challenge:
            design a bed system that automatically lifts away after printing, cools the part for
            release, and resets for the next cycle without human intervention, while maintaining
            uniform bed temperature during printing, which directly controls layer adhesion quality.
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
            <li>Led mechanical design of the full hotswappable bed system</li>
            <li>Designed the scissor lift mechanism, geometry, motor selection, ball screw sizing</li>
            <li>Designed the bed frame and mounting interface for the PCB heating array</li>
            <li>Ran Ansys FEA on the lift structure under worst-case load (full bed + part weight at full extension)</li>
            <li>Coordinated with electronics team on PCB layout to ensure uniform heat distribution across the surface</li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="key-decisions" className="project-section">
          <h3>Key Engineering Decisions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Lift Mechanism, Scissor vs. Linear Rail</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Chose:</strong> Scissor lift driven by NEMA 24 + ball screw.<br />
                <strong style={{ color: 'var(--text-primary)' }}>Rejected:</strong> direct linear rail lift.<br />
                A scissor mechanism provides high mechanical advantage at the bottom of stroke (where
                the bed is heaviest relative to the motor torque requirement), compresses into a low
                profile when retracted, and keeps the motor mounted stationary rather than riding
                with the moving mass, reducing the dynamic load on the drive system.
              </p>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Heating, Distributed PCB Array vs. Single Heater</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Chose:</strong> Array of custom resistive PCBs.<br />
                <strong style={{ color: 'var(--text-primary)' }}>Rejected:</strong> single centralized heater.<br />
                A single heater creates a thermal gradient across the bed surface, the center runs
                hot, edges run cold. For consistent FDM layer adhesion the entire surface must be
                within a tight temperature band. Thermal gradients also cause differential expansion
                across the print surface, which directly causes warping, parts lift off the bed at
                the edges as cooler regions contract while the center stays hot. Distributing heating
                elements across the array achieves uniform temperature without requiring a thick
                thermal spreader that would add mass and slow response time, and eliminates the
                gradient that drives warping.
              </p>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Part Release, Fan Cooling vs. Manual Removal</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                After printing completes, the bed lifts above the arm base height, then lowers to
                the ground where fans rapidly cool the surface. Thermal contraction causes the part
                to detach from the print surface without mechanical prying, enabling fully
                autonomous part ejection and immediate restart of the print cycle.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="heating-bed" className="project-section">
          <h3>Heating Bed</h3>
          <p>
            The PCB array is laid out to maximize coverage across the print surface with overlapping
            thermal zones. Each board is independently controlled, allowing temperature compensation
            if one zone runs cooler than target, a capability that a single-element heater cannot
            provide. Uniform surface temperature is the primary quality driver for first-layer adhesion
            in FDM, which determines whether the entire print succeeds or fails.
          </p>
          <div className="project-image-grid">
            <img src={img('/images/robotic bed heating pcb.png')} alt="Heating bed PCB array" loading="lazy" />
            <img src={img('/images/robotic bed control pcb.png')} alt="Heating bed control detail" loading="lazy" />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="lifting-mechanism" className="project-section">
          <h3>Lifting Mechanism</h3>
          <p>
            The scissor lift is driven by a NEMA 24 motor through a ball screw, chosen for its
            efficiency and zero-backlash positioning. The ball screw converts motor rotation to
            linear extension of the scissor linkage with high mechanical advantage at the initial
            lift stroke, when the bed weight produces maximum torque demand. FEA on the scissor
            arms confirmed adequate factor of safety under the combined weight of the heated bed
            assembly and maximum expected part mass at full extension.
          </p>
          <img src={img('/images/bed img.png')} alt="Scissor lift mechanism" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="system-context" className="project-section">
          <h3>System Context</h3>
          <p>
            The heated bed operates in tandem with the UR5E robotic arm running the swarm extruder
            end effector. By automating part removal and bed reset, the system removes the manual
            intervention step that limits swarm manufacturing throughput. The goal is a continuous
            print loop: print → lift → cool → eject → reset → print, without operator input between
            cycles.
          </p>
          <img src={img('/images/robotic bed full img.png')} alt="Full assembly" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="pcb-testing" className="project-section">
          <h3>Initial PCB Heater Testing</h3>
          <p>
            First power-on of the PCB heating array revealed the initial power estimates were off , 
            the board was drawing around 60 watts, significantly higher than expected. Without a
            thermal temperature gun on hand, I used a page of erasable ink, which disappears
            at 140°F. The heated portion of the page cleared almost instantly on contact. When the
            board was placed inside a notebook, it cleared roughly 20 pages of erasable ink through
            the stack.
          </p>
          <p>
            I am currently working on more accurate and less improvised thermal characterization.
          </p>
          <video
            src={img('/images/Initial PCB Heater Testing.MOV')}
            controls
            muted
            style={{ width: '100%', borderRadius: 'var(--radius-sm)', border: '1px solid var(--card-border)', display: 'block', marginTop: 16 }}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="failures" className="project-section">
          <h3>Failures and In-Progress Fixes</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Crossbar Bending Under Load</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                During assembly, the crossbar beam was unexpectedly bending under load, a failure mode
                that wasn't predicted in the initial FEA. The deflection was significant enough to affect
                the lift geometry and bed levelness at full extension. Design changes to the crossbar
                cross-section and mounting configuration are currently being made to resolve it.
              </p>
              <img
                src={img('/images/heated bed crossbar bending failure.jpg')}
                alt="Crossbar bending failure during assembly"
                style={{ width: '100%', borderRadius: 'var(--radius-sm)', marginTop: 14, display: 'block' }}
                loading="lazy"
              />
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>PCB Heater Power Draw Higher Than Expected</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Testing revealed each PCB heater drawing approximately 60 watts, significantly above
                initial estimates. Two directions are being explored to address this. The first is a
                logic-based control system where the control board variably distributes power across
                each PCB independently, heating only the sections of the bed that require it rather
                than driving all boards at full power simultaneously. The second is a board-level
                redesign using thinner traces or increased trace length to raise resistance, allowing
                the boards to produce adequate heat at lower current draw.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="design-docs" className="project-section">
          <DocSlider
            title="Design Documents"
            images={[
              { src: img('/images/pdf-heated-bed-plan1/page-01.jpg'), alt: 'Heated bed initial design plan, page 1' },
              { src: img('/images/pdf-heated-bed-plan1/page-02.jpg'), alt: 'Heated bed initial design plan, page 2' },
              { src: img('/images/pdf-heated-bed-doc2/page-01.jpg'), alt: 'Heated bed initial design doc 2' },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Gallery images={gallery} />
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section" style={{ borderTop: '1px solid var(--card-border)', paddingTop: 32 }}>
          <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
            This project is still in progress. More simulations, test results, and design updates
            will be added as the work continues.
          </p>
        </div>
      </ScrollReveal>
    </DetailPage>
    </>
  )
}
