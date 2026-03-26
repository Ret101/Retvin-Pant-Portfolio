import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import Gallery from '../../components/Gallery'
import img from '../../img'

const gallery = [
  { src: img('/images/roadcase.png'), alt: 'Road case hero' },
  { src: img('/images/roadcase front view.png'), alt: 'Road case overview' },
  { src: img('/images/roadcase iso view.png'), alt: 'Road case components 1' },
  { src: img('/images/roadcase at competition.png'), alt: 'Road case components 2' },
]

export default function RoboticsRoadcase() {
  return (
    <DetailPage
      backTo="/team"
      backLabel="Team Projects"
      tag="FRC Team 5414"
      title="Robotics Road Case"
      heroImage={img('/images/roadcase at competition.png')}
      software={['Onshape CAD', '3D Printing', 'CNC Mill', 'Shop Tools']}
      roles={['Designer', 'Assembly Lead']}
    >
      <ScrollReveal>
        <div className="project-section">
          <h3>Introduction</h3>
          <p>
            Designed for FRC Team 5414, this road case serves as the team's pit case at competitions.
            The goal was to create a more secure and compact way to transport materials to and from
            competition events.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Purpose &amp; Result</h3>
          <p>
            The compact road case enables faster competition setup, significantly increased organization,
            and allows the team to carry approximately double the normal amount of materials — enabling
            the team to assist other teams at events.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Overview</h3>
          <img
            src={img('/images/roadcase front view.png')}
            alt="Road case overview"
            className="project-image-single"
            loading="lazy"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Designed Components</h3>
          <p>
            The upper assembly stores COTS (commercial off-the-shelf) items for the team or to share
            with other teams. The lower assembly features tote bin storage, a battery charger, and
            shelves for subsystem-specific tool boxes. A fold-out workbench provides access to
            lighting, power outlets, and a computer workstation.
          </p>
          <div className="project-image-grid">
            <img src={img('/images/roadcase iso view.png')} alt="Road case components 1" loading="lazy" />
            <img src={img('/images/roadcase at competition.png')} alt="Road case components 2" loading="lazy" />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>View CAD Files — Roadcase</h3>
          <iframe
            src="https://gmail2144250.autodesk360.com/shares/public/SH30dd5QT870c25f12fc2d0e9604df049a03?mode=embed"
            width="100%"
            height="500px"
            allowFullScreen
            style={{ border: 'none', borderRadius: 'var(--radius-sm)', display: 'block' }}
            title="Robotics Road Case"
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
