import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import DocSlider from '../../components/DocSlider'
import Gallery from '../../components/Gallery'
import StickyTOC from '../../components/StickyTOC'
import img from '../../img'

const toc = [
  { id: 'engineering-challenge', label: 'Engineering Challenge'       },
  { id: 'design-basis',          label: 'Design Basis'                },
  { id: 'lotus-verification',    label: 'Lotus Shark Verification'    },
  { id: 'material-selection',    label: 'Material Selection'          },
  { id: 'cad',                   label: 'Control Arm CAD'             },
  { id: 'load-cases',            label: 'Load Cases'                  },
  { id: 'forces-analysis',       label: 'Forces Analysis'             },
]

const gallery = [
  { src: img('/images/Front Control Arms.png'), alt: 'Front control arms CAD' },
  { src: img('/images/Front Control Arm Render.png'), alt: 'Front control arm render' },
  { src: img('/images/Rear Control Arm Render.png'), alt: 'Rear control arm render' },
  { src: img('/images/Rear Control Arms.png'), alt: 'Rear control arms CAD' },
  { src: img('/images/Lotus Full Car Suspension Hardpoint Verification.png'), alt: 'Lotus Shark full car suspension verification' },
  { src: img('/images/Camber Graph.png'), alt: 'Camber curve output from Lotus Shark' },
  { src: img('/images/Bending stiffness vs area.png'), alt: 'Bending stiffness vs area comparison' },
  { src: img('/images/bending strength vs area graph.png'), alt: 'Bending strength vs area comparison' },
]

export default function BajaControlArms() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
      backTo="/baja"
      backLabel="Longhorn Baja"
      tag="SAE Baja · Vehicle Dynamics"
      title="Control Arms"
      heroImage={img('/images/Front Control Arm Render.png')}
      heroStyle={{ backgroundSize: '75%', backgroundPosition: 'center 40%' }}
      software={['SolidWorks CAD', 'SolidWorks FEA', 'Lotus Shark']}
      roles={['Vehicle Dynamics Lead']}
      inProgress
    >
      <ScrollReveal>
        <div id="engineering-challenge" className="project-section">
          <h3>Engineering Challenge</h3>
          <p>
            Control arms need to be stiff enough to transmit cornering and bump loads without deflecting
            the hardpoints set by the master sketch, light enough to keep unsprung mass low (which directly
            affects ride and handling), and manufacturable within the team's shop. All three pull in different
            directions, so the design is a three-way optimization with FEA as the check.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="design-basis" className="project-section">
          <h3>Design Basis</h3>
          <p>
            Geometry comes directly from the master sketch hardpoints. The inboard and outboard pickup
            points, arm lengths, and sweep angles are set by the kinematics work. This design effort
            focuses on structural cross-section, tube diameter, wall thickness, and gusset placement
            to meet load requirements within those fixed geometry constraints.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="lotus-verification" className="project-section">
          <h3>Lotus Shark Verification</h3>
          <p>
            Suspension hardpoints were verified in Lotus Shark before geometry was released to any
            downstream team. The software provides detailed kinematic output across the full travel
            range, including camber gain, caster change, roll center migration, and motion ratio,
            giving the dynamics team precise insight into how the geometry behaves before committing
            to any physical parts.
          </p>
          <p>
            The camber curve output directly informed the target camber range and confirmed the
            hardpoint positions achieved the intended kinematic behavior. These validated values
            then became the interface constraints handed to chassis (for mount placement), steering
            (for Ackermann geometry and rack positioning), and the unsprung mass team (for bearing
            and upright sizing), ensuring all downstream teams worked from a common, verified
            geometric foundation.
          </p>
          <div className="project-image-grid">
            <img
              src={img('/images/Lotus Full Car Suspension Hardpoint Verification.png')}
              alt="Lotus Shark full car suspension hardpoint verification"
              loading="lazy"
            />
            <img
              src={img('/images/Camber Graph.png')}
              alt="Camber curve output from Lotus Shark"
              loading="lazy"
            />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="material-selection" className="project-section">
          <h3>Material Selection</h3>
          <p>
            Tube section was chosen over solid bar and other profiles based on bending stiffness
            and strength per unit area. Tubes provide high resistance to bending in any direction
            and high torsional stiffness relative to their cross-sectional area, making them the
            most efficient profile for a control arm under combined lateral, vertical, and
            longitudinal loading.
          </p>
          <p>
            The selection was made in coordination with the chassis team to simplify raw stock
            orders, as chassis tubing and arm tubing could share common stock sizes. Both teams
            also projected similar expected load magnitudes across their respective members,
            making a shared tube spec practical without compromising either design.
          </p>
          <div className="project-image-grid">
            <img
              src={img('/images/Bending stiffness vs area.png')}
              alt="Bending stiffness vs cross-sectional area comparison"
              loading="lazy"
            />
            <img
              src={img('/images/bending strength vs area graph.png')}
              alt="Bending strength vs cross-sectional area comparison"
              loading="lazy"
            />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="cad" className="project-section">
          <h3>Control Arm CAD</h3>
          <div className="project-image-grid">
            <img
              src={img('/images/Front Control Arm Render.png')}
              alt="Front control arm render"
              loading="lazy"
            />
            <img
              src={img('/images/Rear Control Arm Render.png')}
              alt="Rear control arm render"
              loading="lazy"
            />
          </div>
          <div className="project-image-grid" style={{ marginTop: 16 }}>
            <img
              src={img('/images/Front Control Arms.png')}
              alt="Front control arms CAD"
              loading="lazy"
            />
            <img
              src={img('/images/Rear Control Arms.png')}
              alt="Rear control arms CAD"
              loading="lazy"
            />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="load-cases" className="project-section">
          <h3>Load Cases</h3>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.95rem' }}>
            <li><strong style={{ color: 'var(--text-primary)' }}>Maximum cornering:</strong> lateral G-load transferred through the control arm into the chassis pickup</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Maximum bump (jounce):</strong> vertical impact load from hitting an obstacle at speed</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Combined:</strong> simultaneous lateral and vertical loading during cornering over rough terrain</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Braking:</strong> longitudinal load transferred through the front lower control arm during maximum deceleration</li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="forces-analysis" className="project-section">
          <DocSlider
            title="Control Arm Forces Analysis"
            images={[
              { src: img('/images/pdf-control-arm-forces/page-01.jpg'), alt: 'Control arm forces analysis, page 1' },
              { src: img('/images/pdf-control-arm-forces/page-02.jpg'), alt: 'Control arm forces analysis, page 2' },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section" style={{ borderTop: '1px solid var(--card-border)', paddingTop: 32 }}>
          <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
            FEA analysis, tube sizing decisions, and manufacturing details are under active development
            and will be added as the design cycle progresses.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Gallery images={gallery} />
      </ScrollReveal>
    </DetailPage>
    </>
  )
}
