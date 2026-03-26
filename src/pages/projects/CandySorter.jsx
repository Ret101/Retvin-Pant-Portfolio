import DetailPage from '../../components/DetailPage'
import CADEmbed from '../../components/CADEmbed'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import Gallery from '../../components/Gallery'
import img from '../../img'

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
          { value: '~90%', label: 'Sort Accuracy' },
          { value: '3-Stage', label: 'Process Pipeline' },
          { value: 'Live Demo', label: 'Trade Show Ready' },
        ]} />
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Introduction</h3>
          <p>
            Completed at SPARX Engineering in Manvel, Texas as an internship project. Designed to demonstrate
            SPARX Engineering's capabilities at trade shows — a live, interactive showcase of multi-stage
            autonomous systems.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Purpose &amp; Result</h3>
          <p>
            An easily transportable trade show demo showcasing SPARX Engineering's full-stack capabilities —
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
        <div className="project-section">
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
        <div className="project-section">
          <h3>Slide</h3>
          <p>
            Rapidly moves candy from the salmon ladder to the kicker assembly, maintaining individual lane
            separation throughout transport.
          </p>
          <img src={img('/images/sweetsifter candy sorter iso back view.png')} alt="Slide assembly" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Kickers</h3>
          <p>
            Position candy for camera color identification. Solenoids extend fully or halfway to route
            candy to either the collection area or the return auger, depending on the color identification result.
          </p>
          <img src={img('/images/sweetsifter candy sorter back view.png')} alt="Kicker assembly" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Collection Region</h3>
          <p>
            The customer collects their selected candy from this area. After a timeout, a solenoid tips
            any remaining candy into the return auger to restart the cycle.
          </p>
          <img src={img('/images/sweetsifter candy sorter back view.png')} alt="Collection region" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Auger</h3>
          <p>
            A stepper motor drives a spiral auger that lifts rejected or leftover candy back up to the
            main hopper, completing the closed-loop sorting cycle.
          </p>
          <img src={img('/images/sweetsifter candy sorter auger.png')} alt="Auger mechanism" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
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
        <div className="project-section">
          <h3>View CAD Files — Integrated CAD</h3>
          <iframe
            src="https://gmail2144250.autodesk360.com/shares/public/SH30dd5QT870c25f12fcffe5a563a1433122?mode=embed"
            width="100%"
            height="500px"
            allowFullScreen
            style={{ border: 'none', borderRadius: 'var(--radius-sm)', display: 'block' }}
            title="Candy Sorter — Integrated Assembly"
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
