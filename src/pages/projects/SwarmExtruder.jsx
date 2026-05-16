import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import Gallery from '../../components/Gallery'
import DocSlider from '../../components/DocSlider'
import StatRow from '../../components/StatRow'
import StickyTOC from '../../components/StickyTOC'
import img from '../../img'

const toc = [
  { id: 'engineering-challenge', label: 'Engineering Challenge' },
  { id: 'my-contribution',       label: 'My Contribution'       },
  { id: 'why-swarm',             label: 'Why Swarm Extrusion'   },
  { id: 'key-decisions',         label: 'Key Decisions'         },
  { id: 'system-architecture',   label: 'System Architecture'   },
  { id: 'designed-parts',        label: 'Designed Parts'        },
  { id: 'fea-analysis',          label: 'FEA Analysis'          },
  { id: 'validation',            label: 'Validation'            },
  { id: 'cad',                   label: 'CAD Models'            },
  { id: 'project-breakdown',     label: 'Project Breakdown'     },
]

const gallery = [
  { src: img('/images/UR5E.jpg'), alt: 'UR5E arm with extruder end effector' },
  { src: img('/images/robot arm end effector full assembly.png'), alt: 'Extruder head design – full assembly' },
  { src: img('/images/robot arm end effector without components.png'), alt: 'Extruder head design – structural mount' },
]

const specs = [
  { value: 'Team of 3', label: 'Team Size' },
  { value: 'UR5E', label: 'Platform' },
  { value: '6-DOF', label: 'Arm Degrees of Freedom' },
  { value: 'Direct Drive', label: 'Extruder Type' },
]

export default function SwarmExtruder() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
      backTo="/industry"
      backLabel="Industry Experience"
      tag="UT Austin · FIRE Program"
      title="Swarm Manufacturing Research – Extruder End Effector"
      heroImage={img('/images/UR5E.jpg')}
      software={['Onshape CAD', 'Ansys', '3D Printing', 'CNC Mill', 'Presentation Skills']}
      roles={['Mechanical Design']}
    >
      <ScrollReveal>
        <div id="engineering-challenge" className="project-section">
          <h3>Engineering Challenge</h3>
          <p>
            Mounting a functional FDM extruder on a 6-DOF robot arm wrist introduces constraints
            that don't exist in traditional gantry printers: the end effector must stay within the
            arm's payload limit, thermally isolate a 200°C+ hot end from precision wrist joints,
            maintain consistent filament flow at arbitrary print orientations, and support quick head
            swapping without re-homing. Every gram and every degree mattered.
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
            <li>Designed the toolchanger mount interfacing with the UR5E's final DOF</li>
            <li>Designed the full extruder end effector assembly, cold end, hot end, and structural integration</li>
            <li>Ran Ansys FEA to identify structural weak points in the toolhead under combined loading</li>
            <li>Iterated geometry based on simulation results to reinforce critical failure regions</li>
            <li>Validated design through successful live print test</li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="why-swarm" className="project-section">
          <h3>Why Swarm Extrusion</h3>
          <p>
            Traditional Cartesian 3D printers are limited to planar, layer-by-layer deposition.
            Conformal printing, where the print head can tilt and reorient in 3D, enables
            deposition on curved surfaces, eliminates support structures in many geometries, and
            allows multiple arms to collaborate on a single part simultaneously. The long-term goal:
            a theoretically unbounded build volume from a coordinated swarm of robotic printers.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="key-decisions" className="project-section">
          <h3>Key Engineering Decisions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Extruder Type, Direct Drive vs. Bowden</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Chose:</strong> Orbiter direct drive.<br />
                <strong style={{ color: 'var(--text-primary)' }}>Rejected:</strong> Bowden setup.<br />
                Conformal printing demands consistent retraction at any orientation. A Bowden tube
                introduces variable filament pressure and sag at non-vertical angles, making flow
                control unreliable mid-path. Direct drive eliminates that variability and shortens
                the filament path from motor to nozzle.
              </p>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Tool Interface, Quick-Change vs. Fixed Mount</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Chose:</strong> Toolchanger attachment on final DOF.<br />
                <strong style={{ color: 'var(--text-primary)' }}>Rejected:</strong> permanent fixed mount.<br />
                Swarm research requires iterating across multiple end effector types. A quick-change
                interface allows head swaps without full arm disassembly or recalibration, compressing
                the test-iterate cycle significantly.
              </p>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Thermal Isolation</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Cold end / hot end separation with a heat break prevents thermal creep from the
                200°C+ hot end toward the toolchanger interface. FEA confirmed structural
                components at the mount stay below the threshold that would affect wrist joint
                sensors or deform the toolchanger retention geometry.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="system-architecture" className="project-section">
          <h3>System Architecture</h3>
          <p>
            End effector stack from robot wrist outward: toolchanger plate → structural mount →
            Orbiter direct drive motor → cold end heat sink → heat break → hot end (heater block
            + nozzle). The mount routes filament cleanly from the spool feeder to the cold end
            entry without inducing bend stress on the PTFE path across any arm orientation.
          </p>
          <img
            src={img('/images/UR5E.jpg')}
            alt="UR5E arm with extruder end effector"
            className="project-image-single"
            loading="lazy"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="designed-parts" className="project-section">
          <h3>Designed Parts</h3>
          <p>
            The toolchanger attachment interfaces with the UR5E's final joint and provides a secure,
            repeatable mount. The structural frame was minimized in moment arm from the wrist to
            preserve payload headroom, while maintaining clearance for all filament path components
            across the full joint range of motion.
          </p>
          <div className="project-image-grid">
            <img
              src={img('/images/robot arm end effector full assembly.png')}
              alt="Extruder head design – full assembly"
              loading="lazy"
            />
            <img
              src={img('/images/robot arm end effector without components.png')}
              alt="Extruder head design – structural mount"
              loading="lazy"
            />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="fea-analysis" className="project-section">
          <h3>Analysis → Design Change</h3>
          <p>
            Ansys FEA under combined thermal and mechanical loading identified the toolhead bracket
            as the critical failure point, specifically where the hot end cantilevered off the main
            mount under extrusion reaction forces. The simulation directly drove a geometry change:
            material was added at the identified stress concentration to ensure the failure point
            would sit above the hot end components. The intent: if a significant force is applied
            to the end effector, the 3D printed structural bracket fails first rather than the
            expensive hot end or cold end components, which are far more costly to replace than
            a reprinted part.
          </p>
          <img
            src={img('/images/extruder ansys gif looped.gif')}
            alt="Ansys FEA analysis animation"
            className="project-image-single"
            loading="lazy"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="validation" className="project-section">
          <h3>Validation, Print Success</h3>
          <p>
            The final design successfully extruded material at target flow rates with the arm in
            motion. The print demonstrated stable filament deposition without slippage, jamming,
            or thermal shutdown events, validating the direct drive selection and thermal isolation
            geometry. Further testing for full conformal path printing is ongoing.
          </p>
          <video
            src={img('/images/Extruder print success 1.mp4')}
            controls
            style={{ width: '100%', borderRadius: 'var(--radius-sm)', border: '1px solid var(--card-border)', marginTop: 16, display: 'block' }}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="cad" className="project-section">
          <h3>CAD Models</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <iframe
                src="https://gmail2144250.autodesk360.com/shares/public/SH30dd5QT870c25f12fcbfc8871bfecea5ab?mode=embed"
                width="100%"
                height="500px"
                allowFullScreen
                style={{ border: 'none', borderRadius: 'var(--radius-sm)', display: 'block' }}
                title="Full Assembly"
              />
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 6, textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>Made in Onshape · Displayed in Fusion 360</p>
            </div>
            <div>
              <iframe
                src="https://gmail2144250.autodesk360.com/shares/public/SH30dd5QT870c25f12fc6a66168afa788315?mode=embed"
                width="100%"
                height="500px"
                allowFullScreen
                style={{ border: 'none', borderRadius: 'var(--radius-sm)', display: 'block' }}
                title="End Effector – Full Assembly"
              />
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 6, textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>Made in Onshape · Displayed in Fusion 360</p>
            </div>
            <div>
              <iframe
                src="https://gmail2144250.autodesk360.com/shares/public/SH30dd5QT870c25f12fcf4111eda68d10af5?mode=embed"
                width="100%"
                height="500px"
                allowFullScreen
                style={{ border: 'none', borderRadius: 'var(--radius-sm)', display: 'block' }}
                title="Toolchanger Mount"
              />
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 6, textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>Made in Onshape · Displayed in Fusion 360</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="project-breakdown" className="project-section">
          <DocSlider
            title="Extruder Project Breakdown"
            images={[
              { src: img('/images/pdf-extruder-breakdown/page-01.jpg'), alt: 'Extruder project breakdown, page 1' },
              { src: img('/images/pdf-extruder-breakdown/page-02.jpg'), alt: 'Extruder project breakdown, page 2' },
              { src: img('/images/pdf-extruder-breakdown/page-03.jpg'), alt: 'Extruder project breakdown, page 3' },
              { src: img('/images/pdf-extruder-breakdown/page-04.jpg'), alt: 'Extruder project breakdown, page 4' },
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
