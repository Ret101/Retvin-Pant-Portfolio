import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import Gallery from '../../components/Gallery'

const gallery = [
  { src: '/images/spring steel wheel.jpg', alt: 'Spring steel wheel physical prototype' },
  { src: '/images/nasa spring steel wheel.png', alt: 'Wheel CAD' },
  { src: '/images/nasa wheel hub front.png', alt: 'Universal hub design 1' },
  { src: '/images/nasa wheel hub iso back.png', alt: 'Universal hub design 2' },
]

export default function SpringSteelWheel() {
  return (
    <DetailPage
      backTo="/industry"
      backLabel="Industry Experience"
      tag="NASA Johnson Space Center · Internship"
      title="Spring Steel Wheel"
      heroImage="/images/spring steel wheel.jpg"
      software={['SolidWorks CAD', '3D Printing']}
      roles={['Mechanical Designer']}
    >
      <ScrollReveal>
        <div className="project-section">
          <h3>Introduction</h3>
          <p>
            Completed at NASA Johnson Space Center during an internship. The project centered on testing the
            reliability of spring steel wheels and served as a test bench for wheel development. It involved
            designing a spring steel wheel prototype and a universal wheel hub for Microchariot — an
            unpressurized lunar rover prototype.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Purpose</h3>
          <p>
            Support testing for spring steel wheels and other test wheel configurations. The universal hub
            design enables standardized testing of different wheel geometries on the Microchariot platform
            without requiring rover-level redesign for each iteration.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Result</h3>
          <p>
            A highly flexible and durable wheel and wheel hub that could be attached to Microchariot for
            testing in simulated moon-like environments. The modular design streamlined iteration and
            reduced downtime between test configurations.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Wheel Design</h3>
          <p>
            The wheel uses a modular design with segments that combine into a complete wheel, enabling
            easy assembly and repairability in the field. Individual segments can be replaced without
            discarding the entire wheel structure.
          </p>
          <div className="project-image-grid">
            <img src="/images/spring steel wheel.jpg" alt="Spring steel wheel physical prototype" loading="lazy" />
            <img src="/images/nasa spring steel wheel.png" alt="Wheel CAD screenshot" loading="lazy" />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Universal Hub Design</h3>
          <p>
            A universal mounting hub was designed to attach hub motors to the rover, providing a
            standardized interface for testing different wheel designs without modifying the rover's
            drive system.
          </p>
          <div className="project-image-grid">
            <img src="/images/nasa wheel hub front.png" alt="Universal hub design 1" loading="lazy" />
            <img src="/images/nasa wheel hub iso back.png" alt="Universal hub design 2" loading="lazy" />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>View CAD Files — Wheel CAD</h3>
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
  )
}
