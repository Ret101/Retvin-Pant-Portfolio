import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import Gallery from '../../components/Gallery'

const gallery = [
  { src: '/images/UR5E.jpg', alt: 'UR5E arm with extruder end effector' },
  { src: '/images/robot arm end effector full assembly.png', alt: 'Extruder head design – view 1' },
  { src: '/images/robot arm end effector without components.png', alt: 'Extruder head design – view 2' },
]

export default function SwarmExtruder() {
  return (
    <DetailPage
      backTo="/industry"
      backLabel="Industry Experience"
      tag="UT Austin · FIRE Program"
      title="Swarm Manufacturing Research – Extruder End Effector"
      heroImage="/images/UR5E.jpg"
      software={['Onshape CAD', 'Ansys', '3D Printing', 'CNC Mill', 'Presentation Skills']}
      roles={['Mechanical Design']}
    >
      <ScrollReveal>
        <div className="project-section">
          <h3>Introduction</h3>
          <p>
            Completed at the University of Texas at Austin in the FIRE Program for Mechanical Engineering Students
            under the supervision and guidance of Dr. Sha. This project aimed to use a 6 DOF arm on a drive base
            to support swarm manufacturing — having multiple robots work together to manufacture a single part.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Purpose</h3>
          <p>
            This project aimed to support a method of printing called conformal printing, allowing the printer to
            print in unique geometries deviating from traditional cartesian printing techniques.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Result</h3>
          <p>
            Part of the project involved creating a 3D printer extruder capable of supporting the high flow rate
            needed for the printing applications.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Components</h3>
          <p>
            This project was built around the UR5E arm for its 6 DOF capabilities and the 3D printer head was
            built on the last DOF.
          </p>
          <img
            src="/images/UR5E.jpg"
            alt="UR5E arm with extruder end effector"
            className="project-image-single"
            loading="lazy"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Designed Parts</h3>
          <p>
            The 3D printer head design consisted of a tool changer attachment that attached to the last DOF
            allowing for easy tool head changes and secure attachment. The head also had the extruder which
            consisted of the cold end and hot end with a direct drive extruder (orbiter extruder).
          </p>
          <div className="project-image-grid">
            <img
              src="/images/robot arm end effector full assembly.png"
              alt="Extruder head design – view 1"
              loading="lazy"
            />
            <img
              src="/images/robot arm end effector without components.png"
              alt="Extruder head design – view 2"
              loading="lazy"
            />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Analysis</h3>
          <p>
            Ansys was used to understand the weak points in the design. Weak points were identified in the
            toolhead component to ensure that the hot end and cold end components do not break under heavy load.
          </p>
          <img
            src="/images/extruder ansys gif looped.gif"
            alt="Ansys FEA analysis animation"
            className="project-image-single"
            loading="lazy"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Printing</h3>
          <p>
            The design worked and was able to print, though it does need to undergo further testing.
          </p>
          <video
            src="/images/Extruder print success 1.mp4"
            controls
            style={{ width: '100%', borderRadius: 'var(--radius-sm)', border: '1px solid var(--card-border)', marginTop: 16, display: 'block' }}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
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
        <Gallery images={gallery} />
      </ScrollReveal>
    </DetailPage>
  )
}
