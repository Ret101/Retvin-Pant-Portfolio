import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import Gallery from '../../components/Gallery'
import StickyTOC from '../../components/StickyTOC'
import img from '../../img'

const toc = [
  { id: 'problem',          label: 'The Problem'       },
  { id: 'my-contribution',  label: 'My Contribution'   },
  { id: 'approach',         label: 'Approach'          },
  { id: 'sleeve-sizing',    label: 'Sleeve Sizing'     },
  { id: 'weld-analysis',    label: 'Weld Throat Analysis' },
  { id: 'risk',             label: 'Risk & Redundancy' },
  { id: 'final-build',      label: 'Final Build'       },
]

const keyStats = [
  { value: '~10 → ~20 in', label: 'Cup-to-Cup Length' },
  { value: '162.7 N·m', label: 'Design Torque' },
  { value: '1.30', label: 'Weld FS (AWS Allowable)' },
  { value: '2.54', label: 'Base Metal FS (Yield)' },
]

const materials = [
  ['E70 filler ultimate tensile strength', '482.6 MPa'],
  ['E70 filler ultimate shear strength (≈ 0.6 Su)', '289.6 MPa'],
  ['Code allowable weld shear (AWS D1.1, ≈ 0.3 Su)', '144.8 MPa'],
  ['4130 (normalized) yield strength', '434.4 MPa'],
  ['4130 (normalized) ultimate tensile strength', '668.8 MPa'],
  ['4130 shear yield strength (≈ 0.577 Sy)', '250.6 MPa'],
  ['4130 ultimate shear strength (≈ 0.6 Su)', '401.3 MPa'],
]

const weldSteps = [
  ['Throat thickness (⅛" fillet)', 't = 0.707 × 3.175 mm', '2.245 mm'],
  ['Unit polar moment', 'Jᵤ = 2π(0.01016)³', '6.590 × 10⁻⁶ m³'],
  ['Actual polar moment', 'J = t · Jᵤ', '1.479 × 10⁻⁸ m⁴'],
  ['Weld throat shear stress', 'τ = T·r / J', '111.8 MPa'],
]

const gallery = [
  { src: img('/images/CV Axle Modification.jpeg'), alt: 'Finished extended CV axles with welded sleeves' },
  { src: img('/images/CV Axle Mod sketch.jpeg'), alt: 'Hand sketch of the CV axle sleeve layout' },
]

const cell = {
  padding: '12px 16px',
  borderBottom: '1px solid var(--card-border)',
  lineHeight: 1.55,
  verticalAlign: 'top',
}

const headCell = {
  ...cell,
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: '0.72rem',
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--accent-light)',
}

function Table({ columns, rows }) {
  return (
    <div style={{ overflowX: 'auto', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', background: 'var(--card-bg)', marginTop: 16 }}>
      <table style={{ width: '100%', minWidth: 480, borderCollapse: 'collapse', fontSize: '0.9rem' }}>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={c} style={{ ...headCell, textAlign: i === columns.length - 1 ? 'right' : 'left' }}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((v, ci) => (
                <td
                  key={ci}
                  style={{
                    ...cell,
                    textAlign: ci === row.length - 1 ? 'right' : 'left',
                    color: ci === row.length - 1 ? 'var(--text-primary)' : 'var(--text-secondary)',
                    whiteSpace: ci === row.length - 1 ? 'nowrap' : 'normal',
                  }}
                >
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function BajaCVAxles() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
        backTo="/baja"
        backLabel="Longhorn Baja"
        tag="SAE Baja · Drivetrain"
        title="Modified CV Axles"
        heroImage={img('/images/CV Axle Modification.jpeg')}
        heroStyle={{ backgroundSize: 'cover', backgroundPosition: 'center 45%' }}
        software={['Hand Calculations', 'Machining']}
        roles={['Vehicle Dynamics Lead']}
      >
        <ScrollReveal>
          <StatRow stats={keyStats} />
        </ScrollReveal>

        <ScrollReveal>
          <div id="problem" className="project-section intro-tile">
            <h3>The Problem</h3>
            <p>
              The off-the-shelf CV axles were too short for the car. Running them as-is would have pulled
              the rear wheels inward, making the rear track too narrow and the car less stable and unsafe
              on course. Rather than redesign the rear suspension around the stock axle length, the axles
              were extended to match the designed geometry, which restored the intended rear track.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="my-contribution" className="project-section">
            <h3>My Contribution</h3>
            <ul className="contrib-grid">
              <li>Identified that the stock axle length would narrow the rear track below the designed geometry</li>
              <li>Worked out the cut-and-sleeve extension approach, with press-fit sleeves to keep the shaft coaxial</li>
              <li>Sized the sleeve wall and checked the weld throat and base metal against the design torque</li>
              <li>Weighed mechanical backups against the added stress concentration and made the call to run without them</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="approach" className="project-section">
            <h3>Approach</h3>
            <p>
              Each axle was cut and lengthened with a solid center shaft. Two sleeves were machined from the
              same material, with each sleeve joining one cut CV stub to the center shaft. The stubs were
              press fit into the sleeves so the assembled shaft stayed coaxial, which is critical to avoid
              vibration at driveline speed. Once aligned, every joint was welded around the full
              circumference and dressed to reduce stress concentration.
            </p>
            <div className="project-image-grid">
              <img
                src={img('/images/CV Axle Mod sketch.jpeg')}
                alt="Hand sketch: CV stub, sleeve, solid center axle shaft, sleeve, CV stub"
                style={{ height: 420 }}
                loading="lazy"
              />
              <img
                src={img('/images/CV Axle Modification.jpeg')}
                alt="Finished extended CV axles with welded sleeves"
                style={{ height: 420 }}
                loading="lazy"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="sleeve-sizing" className="project-section">
            <h3>Sleeve Sizing</h3>
            <p>
              The sleeve wall was sized in torsion against the shaft itself. At the design torque of
              162.7 N·m, the 0.8" axle sees roughly 100 MPa of shear (τ = T·r / J, with J = πd⁴/32).
              Holding the sleeve to that same 100 MPa allowable with a 0.8" ID gives a minimum OD of about
              1", which was rounded up to <strong style={{ color: 'var(--text-primary)' }}>1⅛"</strong>.
              At 1⅛" the sleeve stress drops to around 50 MPa, so even with a 3× stress concentration at
              the weld toe it stays below yield.
            </p>
            <p>
              The sleeves were then bored to match the CV stub OD, the stubs pushed in as far as possible
              for maximum engagement, and the welds sanded smooth to reduce stress concentration.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="weld-analysis" className="project-section">
            <h3>Weld Throat Analysis</h3>
            <p>
              The circumferential fillet weld was treated as a thin ring carrying the full torque in shear.
              Material properties for the E70 filler and normalized 4130:
            </p>
            <Table columns={['Property', 'Value']} rows={materials} />
            <Table columns={['Step', 'Expression', 'Result']} rows={weldSteps} />
            <div className="lessons-grid">
              <div className="lesson-card">
                <span className="lesson-card-tag">Weld Throat · Governs</span>
                <h4 className="lesson-card-title">τ = 111.8 MPa</h4>
                <p>
                  FS = 1.30 against the 144.8 MPa AWS allowable and 2.59 against ultimate. Torque capacity is
                  roughly 211 N·m (allowable) to 422 N·m (ultimate).
                </p>
              </div>
              <div className="lesson-card">
                <span className="lesson-card-tag">Base Metal · 4130</span>
                <h4 className="lesson-card-title">τ = 98.8 MPa</h4>
                <p>
                  FS = 2.54 against the 250.6 MPa shear yield, with failure around 413–661 N·m.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="risk" className="project-section">
            <h3>Risk &amp; Redundancy</h3>
            <p>
              The weld throat governs on paper, but the biggest real unknown is the heat-affected zone. If
              the joint isn't preheated or post-weld heat treated, the HAZ in 4130 can be weaker than either
              calculated value. Fatigue is the other concern: even at low stress, repeated torque cycles can
              propagate a crack to a sudden failure, so a mechanical backup to the weld was strongly
              considered.
            </p>
            <div className="lessons-grid">
              <div className="lesson-card">
                <span className="lesson-card-tag">Option</span>
                <h4 className="lesson-card-title">Radial Shear Pins</h4>
                <p>Pins through the sleeve and shaft back up the weld if it cracks. Fast, low-machining, and easy to inspect or replace.</p>
              </div>
              <div className="lesson-card">
                <span className="lesson-card-tag">Option</span>
                <h4 className="lesson-card-title">Keyed or Splined Interface</h4>
                <p>A key or spline carries the torque mechanically, making the weld a secondary load path.</p>
              </div>
            </div>
            <h4 style={{ marginTop: 28, marginBottom: 4 }}>Decision: No Mechanical Backup</h4>
            <p>
              Neither backup was added. Drilling for pins or cutting a keyway would have introduced new
              stress concentrations into the same shaft section the weld was already loading, so the
              axles ran with the welded sleeves alone.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="final-build" className="project-section">
            <h3>Final Build</h3>
            <p>
              Both rear axles were extended, welded, and installed, bringing the rear track back to the
              designed width.
            </p>
            <h4 style={{ marginTop: 24, marginBottom: 4 }}>Competition Result</h4>
            <p>
              Both extended axles survived the entire competition without failure. In hindsight the
              calculations were conservative: they applied the full design torque to the shaft, but did
              not account for terramechanics. Under heavy rotational load the tires slip on loose terrain,
              which caps the torque that actually reaches the axle well below the calculated case.
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
