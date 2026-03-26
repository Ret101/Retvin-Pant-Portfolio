import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import Gallery from '../../components/Gallery'
import img from '../../img'

const gallery = [
  { src: img('/images/rooty frc robot.jpg'), alt: 'Rooty robot' },
  { src: img('/images/rooty full assembly.png'), alt: 'Rooty full CAD assembly' },
  { src: img('/images/rooty base assembly.png'), alt: 'Rooty base' },
  { src: img('/images/rooty arm assembly.png'), alt: 'Rooty arm' },
  { src: img('/images/rooty frc robot arm intake assembly.png'), alt: 'Cone intake' },
  { src: img('/images/rooty frc robot intake assembly.png'), alt: 'Cube intake' },
  { src: img('/images/rooty frc robot shooter assembly.png'), alt: 'Shooter' },
  { src: img('/images/rooty frc robot stick.png'), alt: 'Big stick' },
]

const subsystems = [
  { name: 'Base', desc: 'Swerve drive with a steel bellypan to lower the center of gravity, improving stability and reducing tipping risk.', image: img('/images/rooty base assembly.png') },
  { name: 'Arm', desc: 'Single degree-of-freedom arm at a 5° angle enabling game piece placement at every scoring position. Designed for easy assembly and disassembly using #10-32 SHCS and ¼-20 BHCS fasteners.', image: img('/images/rooty arm assembly.png') },
  { name: 'Cone Intake', desc: 'Mounted to the end of the arm — picks up cone game pieces from all positions quickly and accurately.', image: img('/images/rooty frc robot arm intake assembly.png') },
  { name: 'Intake', desc: 'Picks up cube game pieces from the ground using the natural pliability of the cube to feed it into the shooter.', image: img('/images/rooty frc robot intake assembly.png') },
  { name: 'Shooter', desc: 'Shoots cube pieces — treated like a ball due to their pliability. The cube is compressed and shot into scoring hubs with high accuracy.', image: img('/images/rooty frc robot shooter assembly.png') },
  { name: 'Big Stick', desc: "A carbon fiber rod that extends the robot's perimeter to allow farther shots, reducing cycle times during competition.", image: img('/images/rooty frc robot stick.png') },
]

export default function FRCRooty() {
  return (
    <DetailPage
      backTo="/team/frc-robots"
      backLabel="FRC Robots"
      tag="FRC Team 5414 · 2023 Season"
      title='2023 — "Rooty"'
      heroImage={img('/images/rooty frc robot.jpg')}
      software={['Onshape CAD', 'Prototyping', '3D Printing', 'CNC Router', 'Shop Tools']}
      roles={['Technical Team Captain', 'Mechanical Designer', 'Fabrication Lead']}
    >
      <ScrollReveal>
        <div className="project-section">
          <h3>Overview</h3>
          <p>
            Rooty was the team's robot for the 2023 FRC season. Capable of scoring at all scoring
            positions, it featured 6 subsystems built for reliability and versatility across a wide
            range of field conditions.
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
            src="https://gmail2144250.autodesk360.com/shares/public/SH30dd5QT870c25f12fcad5a059cef726851?mode=embed"
            width="100%"
            height="500px"
            allowFullScreen
            style={{ border: 'none', borderRadius: 'var(--radius-sm)', display: 'block', marginTop: 16 }}
            title="Rooty — Integrated CAD"
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
