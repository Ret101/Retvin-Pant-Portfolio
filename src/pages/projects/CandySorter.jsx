import DetailPage from '../../components/DetailPage'
import CADEmbed from '../../components/CADEmbed'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import Gallery from '../../components/Gallery'
import StickyTOC from '../../components/StickyTOC'
import img from '../../img'

const toc = [
  { id: 'introduction',  label: 'Introduction'        },
  { id: 'result',        label: 'Purpose & Result'    },
  { id: 'salmon-ladder', label: 'Salmon Ladder'       },
  { id: 'slide',         label: 'Slide'               },
  { id: 'kickers',       label: 'Kickers'             },
  { id: 'collection',    label: 'Collection Region'   },
  { id: 'auger',         label: 'Auger'               },
  { id: 'control-app',   label: 'Control Application' },
  { id: 'failures',      label: 'Failures'            },
  { id: 'cad',           label: 'CAD Files'           },
]

const gallery = [
  { src: img('/images/sweetsifter.jpg'), alt: 'Candy sorter assembled' },
  { src: img('/images/sweetsifter candy sorter iso view.png'), alt: 'CAD overview' },
  { src: img('/images/sweetsifter candy sorter salmon ladder.png'), alt: 'Salmon ladder 1' },
  { src: img('/images/sweetsifter candy sorter back view.png'), alt: 'Salmon ladder 2' },
  { src: img('/images/sweetsifter candy sorter side view.png'), alt: 'Slide assembly' },
  { src: img('/images/sweetsifter candy sorter iso back view.png'), alt: 'Kicker assembly' },
  { src: img('/images/sweetsifter candy sorter back view.png'), alt: 'Collection region' },
  { src: img('/images/sweetsifter candy sorter auger.png'), alt: 'Auger mechanism' },
  { src: img('/images/sweetsifter gui.png'), alt: 'Python control GUI' },
]

export default function CandySorter() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
      backTo="/industry"
      backLabel="Industry Experience"
      tag="SPARX Engineering · Internship"
      title="Automated Candy Sorter"
      heroImage={img('/images/sweetsifter.jpg')}
      software={['Onshape CAD', 'FDM 3D Printing', 'SLA 3D Printing', 'Python + OpenCV', 'PyQt5', 'Presentation Skills']}
      roles={['Mechanical Designer', 'Software Developer']}
    >
      <ScrollReveal>
        <StatRow stats={[
          { value: 'Team of 5', label: 'Team Size' },
          { value: '~90%', label: 'Sort Accuracy' },
          { value: '3-Stage', label: 'Process Pipeline' },
          { value: 'Live Demo', label: 'Trade Show Ready' },
        ]} />
      </ScrollReveal>

      <ScrollReveal>
        <div id="introduction" className="project-section">
          <h3>Introduction</h3>
          <p>
            Completed at SPARX Engineering in Manvel, Texas as an internship project. Designed to demonstrate
            SPARX Engineering's capabilities at trade shows, a live, interactive showcase of multi-stage
            autonomous systems.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="result" className="project-section">
          <h3>Purpose &amp; Result</h3>
          <p>
            An easily transportable trade show demo showcasing SPARX Engineering's full-stack capabilities , 
            mechanical design, electronics, and software. The final machine achieved autonomous multi-stage
            self-sorting with approximately 90% accuracy in candy delivery.
          </p>
          <div className="project-image-grid">
            <img src={img('/images/sweetsifter.jpg')} alt="Candy sorter assembled" loading="lazy" />
            <img src={img('/images/sweetsifter candy sorter iso view.png')} alt="CAD overview" loading="lazy" />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="salmon-ladder" className="project-section">
          <h3>Salmon Ladder</h3>
          <p>
            Moves candy from the input hopper upward via alternating dynamic and static slides driven by a
            linear actuator. This stage separates candy into individual lanes for downstream processing.
          </p>
          <div className="project-image-grid">
            <img src={img('/images/sweetsifter candy sorter salmon ladder.png')} alt="Salmon ladder 1" loading="lazy" />
            <img src={img('/images/sweetsifter candy sorter back view.png')} alt="Salmon ladder 2" loading="lazy" />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="slide" className="project-section">
          <h3>Slide</h3>
          <p>
            Rapidly moves candy from the salmon ladder to the kicker assembly, maintaining individual lane
            separation throughout transport.
          </p>
          <img src={img('/images/sweetsifter candy sorter iso back view.png')} alt="Slide assembly" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="kickers" className="project-section">
          <h3>Kickers</h3>
          <p>
            Position candy for camera color identification. Solenoids extend fully or halfway to route
            candy to either the collection area or the return auger, depending on the color identification result.
          </p>
          <img src={img('/images/sweetsifter candy sorter back view.png')} alt="Kicker assembly" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="collection" className="project-section">
          <h3>Collection Region</h3>
          <p>
            The customer collects their selected candy from this area. After a timeout, a solenoid tips
            any remaining candy into the return auger to restart the cycle.
          </p>
          <img src={img('/images/sweetsifter candy sorter back view.png')} alt="Collection region" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="auger" className="project-section">
          <h3>Auger</h3>
          <p>
            A stepper motor drives a spiral auger that lifts rejected or leftover candy back up to the
            main hopper, completing the closed-loop sorting cycle.
          </p>
          <img src={img('/images/sweetsifter candy sorter auger.png')} alt="Auger mechanism" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="control-app" className="project-section">
          <h3>Python Control Application</h3>
          <p>
            A PyQt5 + OpenCV GUI application runs on a connected computer, displaying a live camera view and
            identifying candy color in real time. Serial commands are sent to an Adafruit Feather
            microcontroller that controls the solenoids and stepper motors.
          </p>
          <img src={img('/images/sweetsifter gui.png')} alt="Python control GUI" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="failures" className="project-section">
          <h3>Failures and Iteration</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Salmon Ladder Actuation, Rope and Pulley vs. Linear Actuator</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Original:</strong> Motor-actuated rope and pulley system to drive the salmon ladder.<br />
                <strong style={{ color: 'var(--text-primary)' }}>Problem:</strong> Under actual candy load, the system was inconsistent. The combined weight of the ladder structure and candy on the slides exceeded what the motor could move efficiently, resulting in stalls and missed cycles during testing.<br />
                <strong style={{ color: 'var(--text-primary)' }}>Fix:</strong> Replaced with a linear actuator, which provided the force and consistency needed to reliably drive the ladder under full candy load without stalling.
              </p>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Kicker Mechanism, Solenoid Duty Cycle Exceeded</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Original:</strong> Solenoids held in the closed position as the default state, routing candy to the customer collection area while energized.<br />
                <strong style={{ color: 'var(--text-primary)' }}>Problem:</strong> Holding solenoids energized for the duration of each cycle exceeded their rated duty cycle, creating an overheating risk that would have damaged the solenoids over extended demo sessions.<br />
                <strong style={{ color: 'var(--text-primary)' }}>Fix:</strong> Redesigned the kicker so solenoids default to open and extend briefly to kick selected candy out to the customer. The short actuation pulse stays well within the solenoid duty cycle, eliminating the overheating risk.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="cad" className="project-section">
          <h3>View CAD Files, Integrated CAD</h3>
          <iframe
            src="https://gmail2144250.autodesk360.com/shares/public/SH30dd5QT870c25f12fcffe5a563a1433122?mode=embed"
            width="100%"
            height="500px"
            allowFullScreen
            style={{ border: 'none', borderRadius: 'var(--radius-sm)', display: 'block' }}
            title="Candy Sorter, Integrated Assembly"
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
