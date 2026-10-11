import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import DocSlider from '../../components/DocSlider'
import Gallery from '../../components/Gallery'
import StickyTOC from '../../components/StickyTOC'
import img from '../../img'

const toc = [
  { id: 'engineering-challenge', label: 'Engineering Challenge'       },
  { id: 'my-contribution',       label: 'My Contribution'             },
  { id: 'design-basis',          label: 'Design Basis'                },
  { id: 'lotus-verification',    label: 'Lotus Shark Verification'    },
  { id: 'material-selection',    label: 'Material Selection'          },
  { id: 'cad',                   label: 'Control Arm CAD'             },
  { id: 'load-cases',            label: 'Load Cases'                  },
  { id: 'forces-analysis',       label: 'Forces Analysis'             },
  { id: 'final-build',           label: 'Final Build'                 },
  { id: 'lessons-learned',       label: 'Lessons Learned'             },
  { id: 'steering',              label: 'Steering Check'              },
]

const specGroups = [
  {
    title: 'Kinematics (Lotus Shark)',
    specs: [
      ['Camber Range', '−3° to +1°'],
      ['Front Camber Gain', '−0.339°/in'],
      ['Rear Camber Gain', '−0.724°/in'],
      ['Front Caster Change', '≈ −1.35°/in'],
      ['Static Caster', '8.15°'],
      ['Motion Ratio (F / R)', '2.42 / 2.23'],
    ],
  },
  {
    title: 'Suspension Springs',
    specs: [
      ['Front Spring Rate', '125 lb/in'],
      ['Rear Spring Rate', '210 lb/in'],
      ['Helper Springs', '7 lb/in'],
    ],
  },
]

const gallery = [
  { src: img('/images/Front Control Arms.png'), alt: 'Front control arms CAD' },
  { src: img('/images/Front Control Arm Render.png'), alt: 'Front control arm render' },
  { src: img('/images/Rear Control Arm Render.png'), alt: 'Rear control arm render' },
  { src: img('/images/Rear Control Arms.png'), alt: 'Rear control arms CAD' },
  { src: img('/images/Front Control Arms.jpeg'), alt: 'Fabricated front lower control arm' },
  { src: img('/images/Trailing Arm Images/WhatsApp Image 2026-10-03 at 5.46.39 PM (6).jpeg'), alt: 'Rear trailing arms installed' },
  { src: img('/images/Trailing Arm Images/WhatsApp Image 2026-10-03 at 5.46.39 PM (3).jpeg'), alt: 'Rear trailing arm with LBR plate' },
  { src: img('/images/Lotus Full Car Suspension Hardpoint Verification.png'), alt: 'Lotus Shark full car suspension verification' },
  { src: img('/images/Camber Graph.png'), alt: 'Camber curve output from Lotus Shark' },
  { src: img('/images/kinematic-graphs.webp'), alt: 'Lotus Shark camber, toe, caster, and KPI curves' },
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
      heroImage={img('/images/Trailing Arm Images/WhatsApp Image 2026-10-03 at 5.46.39 PM (6).jpeg')}
      heroStyle={{ backgroundSize: 'cover', backgroundPosition: 'center 65%' }}
      software={['SolidWorks CAD', 'SolidWorks FEA', 'Lotus Shark']}
      roles={['Vehicle Dynamics Lead']}
    >
      <ScrollReveal>
        <div id="engineering-challenge" className="project-section intro-tile">
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
        <div id="my-contribution" className="project-section">
          <h3>My Contribution</h3>
          <ul className="contrib-grid">
            <li>Set the front and rear control arm geometry from the master sketch hardpoints I defined as Vehicle Dynamics Lead</li>
            <li>Verified the suspension kinematics in Lotus Shark before releasing geometry to the chassis, steering, and unsprung mass teams</li>
            <li>Selected the tube section, 1.25 in OD × 0.065 in wall 4130 chromoly, coordinating a shared tube spec with the chassis team</li>
            <li>Defined the cornering, bump, combined, and braking load cases and worked through the control arm force analysis</li>
            <li>Followed the arms through fabrication and installation, then documented what to change for next year</li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="design-basis" className="project-section">
          <h3>Design Basis</h3>
          <p>
            Geometry comes directly from the master sketch hardpoints I set. The inboard and outboard
            pickup points, arm lengths, and sweep angles are fixed by that kinematics work, so my design
            effort here focused on structural cross-section, tube diameter, wall thickness, and gusset
            placement to meet the load requirements within those fixed geometry constraints.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="lotus-verification" className="project-section">
          <h3>Lotus Shark Verification</h3>
          <p>
            I verified the suspension hardpoints in Lotus Shark before releasing geometry to any
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
          {specGroups.map(g => (
            <div key={g.title} className="spec-group">
              <div className="spec-group-title">{g.title}</div>
              <div className="spec-grid">
                {g.specs.map(([label, value]) => (
                  <div key={label} className="spec-tile">
                    <div className="spec-tile-value">{value}</div>
                    <div className="spec-tile-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
          <p style={{ marginTop: 20 }}>
            Final 25'–26' kinematic curves across the full travel range, from rebound to bump: camber and
            toe for the front and rear, plus front caster and kingpin inclination.
          </p>
          <img
            src={img('/images/kinematic-graphs.webp')}
            alt="Lotus Shark kinematic curves, rebound to bump: camber and toe (front and rear), front caster, and front kingpin inclination"
            className="project-image-single"
            style={{ maxHeight: 'none', background: '#fff' }}
            loading="lazy"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="material-selection" className="project-section">
          <h3>Material Selection</h3>
          <p>
            I chose tube section over solid bar and other profiles based on bending stiffness
            and strength per unit area. Tubes provide high resistance to bending in any direction
            and high torsional stiffness relative to their cross-sectional area, making them the
            most efficient profile for a control arm under combined lateral, vertical, and
            longitudinal loading.
          </p>
          <p>
            The final spec was <strong style={{ color: 'var(--text-primary)' }}>1.25 in OD × 0.065 in wall 4130 chromoly steel tube</strong>.
          </p>
          <p>
            I made the selection in coordination with the chassis team to simplify raw stock
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
        <div id="final-build" className="project-section">
          <h3>Final Build</h3>
          <p>
            Both the front A-arms and the rear semi-trailing arms were fabricated in-house from the
            shared chassis tube stock and fitted to the frame. During manufacturing, the internal
            trussing on both designs was altered from the CAD. Changing the truss layout moved where load entered the tube members, so extra plates were welded
            on at the affected nodes to spread the load across a wider section of tube and prevent
            local tube buckling under the bump and cornering cases above.
          </p>

          <h4 style={{ marginTop: 28, marginBottom: 4 }}>Front Control Arms</h4>
          <p>
            On the front lower arm, a formed gusset plate fills the inside of the arm between the
            lower shock mount and the outboard ball joint. That region takes the highest combined
            load from the shock reaction, braking, and cornering.
          </p>
          <div className="project-image-grid">
            <img
              src={img('/images/Front Control Arms.jpeg')}
              alt="Fabricated front lower control arm with welded gusset plate, mounted to the chassis with Fox shock"
              style={{ height: 480 }}
              loading="lazy"
            />
          </div>

          <h4 style={{ marginTop: 28, marginBottom: 4 }}>Rear Trailing Arms</h4>
          <p>
            On the rear semi-trailing arms, a laser-cut LBR plate ties the upright mount into the
            arm's tube members, closing out the open truss section near the hub so the drive and
            braking loads are spread across the arm instead of concentrating at single tube joints.
          </p>
          <div className="project-image-grid">
            <img
              src={img('/images/Trailing Arm Images/WhatsApp Image 2026-10-03 at 5.46.39 PM (6).jpeg')}
              alt="Rear view of both semi-trailing arms installed with hubs, axles, and toe links"
              style={{ height: 360 }}
              loading="lazy"
            />
            <img
              src={img('/images/Trailing Arm Images/WhatsApp Image 2026-10-03 at 5.46.39 PM (3).jpeg')}
              alt="Rear semi-trailing arm with welded LBR plate, hub, and Fox shock"
              style={{ height: 360 }}
              loading="lazy"
            />
          </div>
          <div className="project-image-grid">
            <img
              src={img('/images/Trailing Arm Images/WhatsApp Image 2026-10-03 at 5.46.39 PM (4).jpeg')}
              alt="Top-down view of trailing arm, axle, and toe link running to the gearbox"
              style={{ height: 420 }}
              loading="lazy"
            />
            <img
              src={img('/images/Trailing Arm Images/WhatsApp Image 2026-10-03 at 5.46.39 PM (5).jpeg')}
              alt="Close-up of axle and toe links between the gearbox and the trailing arm"
              style={{ height: 420 }}
              loading="lazy"
            />
          </div>

          <p style={{ marginTop: 20 }}>Cycling the rear suspension through its travel on the bench:</p>
          <video
            src={img('/images/Trailing Arm Images/trailing-arm-travel.mp4')}
            controls
            muted
            loop
            playsInline
            style={{ width: '100%', borderRadius: 'var(--radius-sm)', border: '1px solid var(--card-border)', display: 'block', marginTop: 16 }}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="lessons-learned" className="project-section">
          <h3>Lessons Learned</h3>
          <p>
            The goal for this first set of arms was durability: make them bulky enough that they would
            survive competition. In practice they ended up overbuilt, and there is real weight to be
            trimmed in the next iteration.
          </p>

          <div className="lessons-grid">
            <div className="lesson-card lesson-card-key">
              <span className="lesson-card-tag">Front · Biggest Lesson</span>
              <h4 className="lesson-card-title">Vertical Weld Cups &amp; Custom Misalignment Spacers</h4>
              <p>
                This year's horizontal weld cup orientation caused multiple tolerance stack-up issues and
                quickly maxed out the spherical bearings' angular limits along the control arm's arc of
                travel, heavily limiting both steering and suspension travel. Mounting the weld cups
                vertically and taking the extra time to make custom misalignment spacers for the front
                upright would give the steering much more room to work.
              </p>
            </div>
            <div className="lesson-card">
              <span className="lesson-card-tag">Overall</span>
              <h4 className="lesson-card-title">Design Intent Has to Reach the Shop</h4>
              <p>
                Shock mounting location and internal truss placement both matter structurally. When those
                details aren't relayed clearly to the manufacturing team, the build drifts from the design,
                as it did with the trussing changes this year.
              </p>
            </div>
            <div className="lesson-card">
              <span className="lesson-card-tag">Overall</span>
              <h4 className="lesson-card-title">Trim for Weight</h4>
              <p>
                The arms can be slimmed down now that the team has real parts and loads to size against.
              </p>
            </div>
            <div className="lesson-card">
              <span className="lesson-card-tag">Rear</span>
              <h4 className="lesson-card-title">Double Shear Toe Rods</h4>
              <p>
                The rear toe rod mounts are currently single shear and should be moved to double shear for
                added support.
              </p>
            </div>
            <div className="lesson-card">
              <span className="lesson-card-tag">Front</span>
              <h4 className="lesson-card-title">Upper Arm Material</h4>
              <p>
                The front upper control arm sees minimal load, so a lighter material could be considered.
              </p>
            </div>
            <div className="lesson-card">
              <span className="lesson-card-tag">Front</span>
              <h4 className="lesson-card-title">Gull-Wing Lower Arm</h4>
              <p>
                Reshaping the front lower control arm into a gull-wing profile would give it extra clearance.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="steering" className="project-section">
          <h3>Steering Check</h3>
          <p>Steering swept through its range of travel.</p>
          <video
            src={img('/images/steering-video.mp4')}
            controls
            muted
            loop
            playsInline
            style={{ width: '100%', borderRadius: 'var(--radius-sm)', border: '1px solid var(--card-border)', display: 'block', marginTop: 16 }}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Gallery images={gallery} />
      </ScrollReveal>
    </DetailPage>
    </>
  )
}
