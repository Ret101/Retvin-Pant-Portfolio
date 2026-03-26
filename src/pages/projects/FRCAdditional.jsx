import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'

export default function FRCAdditional() {
  return (
    <DetailPage
      backTo="/team/frc-robots"
      backLabel="FRC Robots"
      tag="FRC Team 5414 · 2023–2024"
      title="Additional Designed Robots"
      heroImage="/images/additional robot design.png"
      software={['Onshape CAD', 'Prototyping', '3D Printing', 'CNC Router']}
      roles={['Mechanical Designer', 'Technical Team Captain']}
    >
      <ScrollReveal>
        <div className="project-section">
          <h3>Overview</h3>
          <p>
            Beyond the three primary competition robots, additional robot designs were developed during
            the 2023–2024 seasons — including concepts, prototypes, and designs built for specific
            game scenarios or offseason events.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>CAD Model</h3>
          <iframe
            src="https://gmail2144250.autodesk360.com/shares/public/SH30dd5QT870c25f12fcb075c12d0eb0f95d?mode=embed"
            width="100%"
            height="500px"
            allowFullScreen
            style={{ border: 'none', borderRadius: 'var(--radius-sm)', display: 'block', marginTop: 16 }}
            title="Additional Designed Robots — CAD"
          />
          <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 6, textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>Made in Onshape · Displayed in Fusion 360</p>
        </div>
      </ScrollReveal>
    </DetailPage>
  )
}
