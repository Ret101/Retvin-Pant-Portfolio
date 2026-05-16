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
  { id: 'design-constraints',    label: 'Design Constraints'    },
  { id: 'key-decisions',         label: 'Key Decisions'         },
  { id: 'wheel-design',          label: 'Wheel Design'          },
  { id: 'drop-test',             label: 'Drop Test'             },
  { id: 'hub-design',            label: 'Universal Hub Design'  },
  { id: 'design-notes',          label: 'Design Notes'          },
  { id: 'cad',                   label: 'CAD Files'             },
]

const gallery = [
  { src: img('/images/spring steel wheel.jpg'), alt: 'Spring steel wheel physical prototype' },
  { src: img('/images/spring steel wheel component.jpg'), alt: 'Spring steel wheel component' },
  { src: img('/images/spring steel wheel compression test.jpg'), alt: 'Initial component compression test' },
  { src: img('/images/nasa spring steel wheel.png'), alt: 'Wheel CAD' },
  { src: img('/images/nasa wheel hub front.png'), alt: 'Universal hub design 1' },
  { src: img('/images/nasa wheel hub iso back.png'), alt: 'Universal hub design 2' },
]

const specs = [
  { value: 'Team of 2', label: 'Team Size' },
  { value: 'Microchariot', label: 'Platform' },
  { value: 'Spring Steel', label: 'Wheel Material' },
  { value: 'Universal Hub', label: 'Interface Type' },
]

export default function SpringSteelWheel() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
      backTo="/industry"
      backLabel="Industry Experience"
      tag="NASA Johnson Space Center · Internship"
      title="Spring Steel Wheel"
      heroImage={img('/images/spring steel wheel.jpg')}
      software={['SolidWorks CAD', '3D Printing']}
      roles={['Mechanical Designer']}
    >
      <ScrollReveal>
        <div id="engineering-challenge" className="project-section">
          <h3>Engineering Challenge</h3>
          <p>
            This was an early-stage prototype built for initial replicative lunar surface testing,
            not a flight article. The goal was to build a functional wheel that could be tested on
            Microchariot over a simulated regolith surface to evaluate basic mobility behavior,
            specifically whether spring steel deformation could improve floatation compared to a
            rigid wheel. Detailed thermal, vacuum, and radiation effects were out of scope at this
            stage. The secondary challenge: Microchariot needed a standardized hub interface so
            multiple wheel geometries could be swapped and compared without modifying the rover.
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
            <li>Co-designed the spring steel wheel prototype with another intern, from geometry definition through physical build</li>
            <li>Defined the modular segment architecture to allow field repairability and weight tuning</li>
            <li>Co-designed the universal wheel hub providing a standardized interface between hub motors and wheel variants</li>
            <li>Built the prototype and prepared it for simulated lunar surface testing on Microchariot</li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="design-constraints" className="project-section">
          <h3>Design Constraints</h3>
          <p>
            As a prototype for early testing, the design priorities were iteration speed, modularity,
            and physical buildability with available materials, not flight-level thermal or vacuum
            performance. The wheel needed to be physically buildable, mountable on Microchariot,
            and structurally capable of surviving testing over simulated regolith. Modularity was
            prioritized so segment geometry could be tuned between test runs without scrapping the
            full wheel.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="key-decisions" className="project-section">
          <h3>Key Engineering Decisions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Wheel Material, Spring Steel vs. Rigid Aluminum</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Chose:</strong> Spring steel.<br />
                <strong style={{ color: 'var(--text-primary)' }}>Rejected:</strong> rigid aluminum shell.<br />
                Spring steel deforms elastically under load to increase ground contact area on loose
                regolith, preventing sinkage without needing air pressure. A rigid wheel would
                require a much larger diameter to achieve equivalent floatation, driving up mass and
                packaging constraints.
              </p>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Wheel Architecture, Modular Segments vs. One-Piece</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Chose:</strong> Modular segments that assemble into a complete wheel.<br />
                <strong style={{ color: 'var(--text-primary)' }}>Rejected:</strong> monolithic one-piece ring.<br />
                Segmented construction allows individual spoke/segment replacement if a section fails
                during testing, without scrapping the full wheel. It also enables geometry tuning
                by swapping segment profiles across test runs.
              </p>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Hub Interface, Universal Adapter vs. Wheel-Specific Mount</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Chose:</strong> Universal hub that decouples wheel geometry from rover drive system.<br />
                <strong style={{ color: 'var(--text-primary)' }}>Rejected:</strong> bespoke mount per wheel type.<br />
                A universal interface means the rover's hub motor and drivetrain never change between
                wheel test configurations. Without it, every new wheel design would require a rover-level
                redesign, multiplying integration time and risk.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="wheel-design" className="project-section">
          <h3>Wheel Design</h3>
          <p>
            The wheel is built from spring steel segments that combine into a full ring. The spring
            steel gauge was selected to allow controlled elastic deformation under rover load without
            permanent set, ensuring the wheel returns to nominal geometry between steps. Individual
            segments can be replaced in the field without discarding the full wheel structure, which
            was critical for maintaining test cadence in a simulated lunar environment.
          </p>
          <Gallery
            title=""
            images={[
              { src: img('/images/spring steel wheel.jpg'), alt: 'Spring steel wheel physical prototype' },
              { src: img('/images/nasa spring steel wheel.png'), alt: 'Wheel CAD' },
              { src: img('/images/spring steel wheel component.jpg'), alt: 'Spring steel wheel component' },
              { src: img('/images/spring steel wheel compression test.jpg'), alt: 'Initial component compression test' },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="drop-test" className="project-section">
          <h3>Drop Test</h3>
          <img
            src={img('/images/spring steel wheel drop test.gif')}
            alt="Spring steel wheel drop test"
            style={{ display: 'block', maxWidth: 360, borderRadius: 'var(--radius-sm)', border: '1px solid var(--card-border)', margin: '16px auto 0' }}
            loading="lazy"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="hub-design" className="project-section">
          <h3>Universal Hub Design</h3>
          <p>
            The hub mounts between the rover's hub motor and any wheel under test. It provides a
            fixed bolt pattern on the motor side and a standardized interface on the wheel side , 
            allowing the team to bolt on different wheel geometries in minutes. The geometry was
            also designed to keep wheel centerline aligned with the motor shaft regardless of wheel
            diameter, preventing eccentric loading on the motor bearing.
          </p>
          <div className="project-image-grid">
            <img src={img('/images/nasa wheel hub front.png')} alt="Universal hub design – front" loading="lazy" />
            <img src={img('/images/nasa wheel hub iso back.png')} alt="Universal hub design – rear ISO" loading="lazy" />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="design-notes" className="project-section">
          <DocSlider
            title="Design Notes and Failure Modes & Effects Analysis"
            images={[
              { src: img('/images/pdf-spring-steel-wheel/page-01.jpg'), alt: 'Spring steel wheel design notes, page 1' },
              { src: img('/images/pdf-spring-steel-wheel/page-02.jpg'), alt: 'Spring steel wheel design notes, page 2' },
              { src: img('/images/pdf-spring-steel-wheel/page-03.jpg'), alt: 'Spring steel wheel design notes, page 3' },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="cad" className="project-section">
          <h3>View CAD Files, Wheel CAD</h3>
          <iframe
            src="https://gmail2144250.autodesk360.com/shares/public/SH30dd5QT870c25f12fc159ce77692bb20b8?mode=embed"
            width="100%"
            height="500px"
            allowFullScreen
            style={{ border: 'none', borderRadius: 'var(--radius-sm)', display: 'block' }}
            title="Spring Steel Wheel"
          />
          <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 6, textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>Made in SolidWorks · Displayed in Fusion 360</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Gallery images={gallery} />
      </ScrollReveal>
    </DetailPage>
    </>
  )
}
