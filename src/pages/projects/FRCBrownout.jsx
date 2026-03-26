import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import Gallery from '../../components/Gallery'
import img from '../../img'

const gallery = [
  { src: img('/images/brownout robot frc.jpg'), alt: 'Brownout robot' },
  { src: img('/images/brownout robot in action frc.jpg'), alt: 'Brownout in action' },
  { src: img('/images/brownout iso front.png'), alt: 'Brownout CAD front' },
  { src: img('/images/brownout frc robot iso back.png'), alt: 'Brownout CAD back' },
  { src: img('/images/brownout base assembly.png'), alt: 'Brownout base' },
  { src: img('/images/brownout intake assembly.png'), alt: 'Brownout intake' },
  { src: img('/images/brownout shooter assembly.png'), alt: 'Brownout shooter' },
  { src: img('/images/brownout end effector and climber assembly.png'), alt: 'Climber and amp' },
]

const subsystems = [
  { name: 'Base', desc: 'Swerve drive with independent wheel control for both propulsion and rotation. Two swerve modules feature one motor inverted to enable the under-bumper intake design. A bellypan provides clean electronics mounting.', image: img('/images/brownout base assembly.png') },
  { name: 'Intake', desc: 'Under-bumper intake — the robot drives over a game piece, grabs it, pulls it in, and compresses it to send toward the shooter.', image: img('/images/brownout intake assembly.png') },
  { name: 'Shooter', desc: 'Fed from the under-bumper intake, shoots game pieces into the speaker. Variable angle adjustment enables shots from the opposite side of the field. Three motors: 1 for angle, 2 flywheel. Fins on top enable hub scoring while climbing.', image: img('/images/brownout shooter assembly.png') },
  { name: 'Climber and Amp', desc: 'A combined mechanism bolted to the base boxtube. The climber runs along the boxtube and pulls down the field chain to lift the robot. The amp mechanism rotates an upper arm to the amp position and bounces the piece into the amp goal.', image: img('/images/brownout end effector and climber assembly.png') },
]

export default function FRCBrownout() {
  return (
    <DetailPage
      backTo="/team/frc-robots"
      backLabel="FRC Robots"
      tag="FRC Team 5414 · 2024 Season"
      title='2024 — "Brownout"'
      heroImage={img('/images/brownout robot frc.jpg')}
      software={['Onshape CAD', 'Prototyping', '3D Printing', 'CNC Router', 'Shop Tools']}
      roles={['Technical Team Captain', 'Mechanical Designer', 'Fabrication Lead']}
    >
      <ScrollReveal>
        <div className="project-section">
          <h3>Overview</h3>
          <p>
            Brownout was a full upgrade from Ringo for the 2024 season, adding climbing capability,
            an under-bumper intake, and extended shooting range — including shots from the opposite
            side of the field. The robot competed at 4 regional events and 1 offseason.
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
            src="https://gmail2144250.autodesk360.com/shares/public/SH30dd5QT870c25f12fc8ba93ee83a55c3d2?mode=embed"
            width="100%"
            height="500px"
            allowFullScreen
            style={{ border: 'none', borderRadius: 'var(--radius-sm)', display: 'block', marginTop: 16 }}
            title="Brownout — Integrated CAD"
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
