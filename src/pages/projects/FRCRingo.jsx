import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import Gallery from '../../components/Gallery'

const gallery = [
  { src: '/images/ringo full assembly iso.png', alt: 'Ringo full assembly' },
  { src: '/images/ringo iso back.png', alt: 'Ringo iso back' },
  { src: '/images/ringo base assembly.png', alt: 'Ringo base' },
  { src: '/images/ringo shooter assembly.png', alt: 'Ringo shooter and intake' },
  { src: '/images/ringo arm end effector assembly.png', alt: 'Amp mechanism' },
  { src: '/images/ringo frc robot driving.png', alt: 'Ringo driving' },
]

const subsystems = [
  { name: 'Base', desc: 'Swerve drive using SDS swerve modules with Colson wheels for extra grip and reliable traction.', image: '/images/ringo base assembly.png' },
  { name: 'Shooter and Intake', desc: 'A combined mechanism where the shooter angles down to pick up game pieces from the ground. A crankshaft mechanism handles angle changes. 3 motors: 1 angle, 2 flywheels using double-sided timing belts. Compression tuning for accuracy and range.', image: '/images/ringo shooter assembly.png' },
  { name: 'Amp Mechanism', desc: 'A fast-rotating arm that swivels in front of the shooter, causing the game piece to bounce into the amp scoring position.', image: '/images/ringo arm end effector assembly.png' },
]

export default function FRCRingo() {
  return (
    <DetailPage
      backTo="/team/frc-robots"
      backLabel="FRC Robots"
      tag="FRC Team 5414 · 2024 Season"
      title='2024 — "Ringo"'
      heroImage="/images/ringo frc robot driving.png"
      software={['Onshape CAD', 'Prototyping', '3D Printing', 'CNC Router', 'Shop Tools']}
      roles={['Technical Team Captain', 'Mechanical Designer', 'Fabrication Lead']}
    >
      <ScrollReveal>
        <div className="project-section">
          <h3>Overview</h3>
          <p>
            Ringo was the first robot built for the 2024 game season. Focused on scoring in the hub
            and amp, it introduced a combined shooter-intake mechanism and a dedicated amp scoring arm.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Subsystems</h3>
          {subsystems.map(sub => (
            <div key={sub.name} style={{ marginBottom: 28 }}>
              <h4 style={{ fontFamily: 'Space Grotesk', fontSize: '0.95rem', fontWeight: 600, marginBottom: 8, color: 'var(--accent-light)' }}>
                {sub.name}
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.75 }}>{sub.desc}</p>
              {sub.image && (
                <img src={sub.image} alt={sub.name} style={{ marginTop: 12, borderRadius: 10, border: '1px solid var(--card-border)', width: '100%', maxHeight: 300, objectFit: 'contain', background: 'var(--bg)' }} loading="lazy" />
              )}
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>CAD Model</h3>
          <iframe
            src="https://gmail2144250.autodesk360.com/shares/public/SH30dd5QT870c25f12fc0fabf4b0bec9ea26?mode=embed"
            width="100%"
            height="500px"
            allowFullScreen
            style={{ border: 'none', borderRadius: 'var(--radius-sm)', display: 'block', marginTop: 16 }}
            title="Ringo — Integrated CAD"
          />
          <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 6, textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>Made in Onshape · Displayed in Fusion 360</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Gallery images={gallery} />
      </ScrollReveal>
    </DetailPage>
  )
}
