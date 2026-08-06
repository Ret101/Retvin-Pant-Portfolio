import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import StickyTOC from '../../components/StickyTOC'
import DocSlider from '../../components/DocSlider'
import Gallery from '../../components/Gallery'
import img from '../../img'

const gallery = [
  { src: img('/images/Daikin/Full Cell (2).webp'),        alt: 'Automated manufacturing cell, full render' },
  { src: img('/images/Daikin/Untitled Project (3).webp'),  alt: 'Full cell, iso view' },
  { src: img('/images/Daikin/Untitled Project (2).webp'),  alt: 'Full cell, side elevation' },
  { src: img('/images/Daikin/Untitled Project.webp'),      alt: 'Full cell with safety fencing' },
  { src: img('/images/Daikin/Full Cell.webp'),             alt: 'Cell layout, overhead view' },
  { src: img('/images/Daikin/Untitled Project (4).webp'),  alt: 'Hopper assembly' },
  { src: img('/images/Daikin/Untitled Project (5).webp'),  alt: 'Buffer assembly' },
  { src: img('/images/Daikin/Untitled Project (7).webp'),  alt: 'Decoupled extraction and conveyor' },
  { src: img('/images/Daikin/Untitled Project (9).webp'),  alt: 'End-of-arm tooling' },
  { src: img('/images/Daikin/Untitled Project (10).webp'), alt: 'End-of-arm tooling, gripper detail' },
  { src: img('/images/Daikin/Untitled Project (8).webp'),  alt: 'Robot arm with end-of-arm tooling installed' },
]

const toc = [
  { id: 'overview',        label: 'Project Overview'      },
  { id: 'my-contribution', label: 'My Contribution'       },
  { id: 'concepts',        label: 'Concept Selection'     },
  { id: 'hopper',          label: 'Hopper'                },
  { id: 'buffer',          label: 'Buffer'                },
  { id: 'extraction',      label: 'Extraction & Conveyor' },
  { id: 'eoat',            label: 'End-of-Arm Tooling'    },
  { id: 'iterations',      label: 'Iterations & Decisions' },
  { id: 'simulation',      label: 'Cell Simulation'       },
  { id: 'results',         label: 'Projected Results'     },
  { id: 'capacity',        label: 'Capacity Analysis'     },
  { id: 'cost',            label: 'Cost & ROI'            },
  { id: 'calculations',    label: 'Calculations'          },
  { id: 'timeline',        label: 'Project Timeline'      },
  { id: 'handoff',         label: 'Documentation'         },
  { id: 'takeaways',       label: 'What I Learned'        },
]

const specs = [
  { value: '$349K',   label: 'Total Capital Required'     },
  { value: '76%',     label: 'Daily Production Increase'  },
  { value: '1.98 yr', label: 'Payback Period'             },
  { value: '56.5%',   label: 'Projected ROI'              },
]

const cellStyle = {
  padding: '12px 16px',
  borderBottom: '1px solid var(--card-border)',
  lineHeight: 1.55,
  verticalAlign: 'top',
}

function DataTable({ columns, rows, note }) {
  return (
    <>
      <div style={{ overflowX: 'auto', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', background: 'var(--card-bg)' }}>
        <table style={{ width: '100%', minWidth: 520, borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr>
              {columns.map((c, i) => (
                <th
                  key={c}
                  style={{
                    ...cellStyle,
                    textAlign: i === 0 ? 'left' : 'right',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-light)',
                  }}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri}>
                {row.cells.map((cell, ci) => (
                  <td
                    key={ci}
                    style={{
                      ...cellStyle,
                      textAlign: ci === 0 ? 'left' : 'right',
                      color: ci === 0 || row.strong ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontWeight: row.strong ? 600 : 400,
                      borderBottom: ri === rows.length - 1 ? 'none' : '1px solid var(--card-border)',
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 8 }}>{note}</p>
      )}
    </>
  )
}

export default function Daikin() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
      backTo="/industry"
      backLabel="Industry Experience"
      tag="Daikin · Internship"
      title="Heat Exchanger Automated Manufacturing Cell"
      heroImage={img('/images/Daikin/Full Cell (2).webp')}
      heroStyle={{ backgroundSize: 'auto 200%', backgroundPosition: 'center 90%', backgroundColor: '#f2f0ec' }}
      software={['FANUC RoboGuide', 'AutoCAD', 'SolidWorks CAD']}
      roles={['Automation Engineering Intern']}
    >
      <ScrollReveal>
        <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderLeft: '3px solid var(--accent)', borderRadius: 'var(--radius-sm)', padding: '16px 20px', marginBottom: 32 }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Disclosure</div>
          <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            This project was completed under an NDA with Daikin. All information, figures, and images
            shown on this page have been approved for public release by Daikin. Details covered by the
            NDA are omitted.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="overview" className="project-section">
          <h3>Project Overview</h3>
          <p>
            An automation cell design project for heat exchanger manufacturing, covering cell layout,
            robot integration, material handling systems, and end-of-arm tooling. The cell automates
            part transfer between the forming and bending operations, which were previously run
            manually at four operators per shift.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <StatRow stats={specs} />
      </ScrollReveal>

      <ScrollReveal>
        <div id="my-contribution" className="project-section">
          <h3>My Contribution</h3>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.95rem' }}>
            <li>Led the automation cell design project for heat exchanger manufacturing, defining cell layout, robot integration, material handling systems, and end-of-arm tooling</li>
            <li>Developed robot motion paths in FANUC RoboGuide for both the forming and bending operations</li>
            <li>Designed four custom material handling systems in SolidWorks, the hopper, buffer, decoupled extraction and conveyor, and end-of-arm tooling, to automate part transfer between forming and bending</li>
            <li>Built the cost, cycle time, and production models used to justify the cell against current manual operation</li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="concepts" className="project-section">
          <h3>Cell Concept Selection</h3>
          <p>
            Three cell layouts were developed and evaluated against each other before committing to a
            final architecture. Throughput mattered, but so did what happens to production when a
            single machine goes down.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Setup 1, Grouped Operations</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                One cell handles the forming processes and the other handles the bending processes.
                This would have provided decent throughput, but it limits production significantly if a
                machine goes down, restricting maintenance's ability to perform repairs during the day
                and capping overall output until those repairs are made.
              </p>
              <img src={img('/images/Daikin/setup 1.png')} alt="Cell concept, setup 1" loading="lazy" style={{ display: 'block', width: '100%', maxWidth: 520, margin: '14px auto 0', borderRadius: 'var(--radius-sm)', border: '1px solid var(--card-border)' }} />
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Setup 2, Grouped Operations with Multiple Robots</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Same grouping, but with multiple robots in the bending cell so its throughput could
                match the former cell. This added extra complexity and still carried the same
                single-point-of-failure flaws as Setup 1.
              </p>
              <img src={img('/images/Daikin/setup 2.png')} alt="Cell concept, setup 2" loading="lazy" style={{ display: 'block', width: '100%', maxWidth: 520, margin: '14px auto 0', borderRadius: 'var(--radius-sm)', border: '1px solid var(--card-border)' }} />
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderLeft: '3px solid var(--accent)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Setup 3, Redundant Cells — Selected</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Redundant cells, where one arm performs both the forming and bending processes for its
                own cell. Each cell contains one former, one bender, a hopper, and a buffer, so every
                operation sits within a single arm's reach. Production continues even when one cell is
                down for maintenance, which is what settled the decision.
              </p>
              <img src={img('/images/Daikin/setup 3 -final setup.png')} alt="Cell concept, setup 3, final selected layout" loading="lazy" style={{ display: 'block', width: '100%', maxWidth: 520, margin: '14px auto 0', borderRadius: 'var(--radius-sm)', border: '1px solid var(--card-border)' }} />
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="hopper" className="project-section">
          <h3>Hopper</h3>
          <p>
            The hopper is how operators load raw material into the cell. It combines gravity feeding,
            passive and potential active alignment, sensors, and a pallet-jack-compatible loading
            station, and it automatically indexes tubes so they arrive aligned for downstream
            processes such as the end former.
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.95rem' }}>
            <li><strong style={{ color: 'var(--text-primary)' }}>Loading station:</strong> a high-lift pallet jack inserts a pallet of raw tubes into the cell. The doors behind the opening close and lock, the pallet is disassembled so the tubes sit unconstrained, and once the operator removes the pallet material a t-slot pole is pulled out to release the tubes into the hopper region.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Passive filtering:</strong> an angled plate filters tubes into the conveyor region one at a time.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Conveyor:</strong> a multiple-finger design allowing safe pickup and dropoff of raw tubes as they move from the hopper to the indexing stage.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Indexer staging:</strong> tubes drop from the conveyor, a laser sensor detects how many are ready for staging, and a two-stage pneumatic gate splits them into groups of two for final indexing.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Final indexing:</strong> a passive ramped design lets tubes roll into the exact spacing the end-of-arm tooling needs. A stepper motor with a CAM finger pushes any stuck tube further down the slope so every tube fully enters the passive indexer region.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Pickup confirmation:</strong> two proximity sensors mounted to the underside of the passive indexer check tube alignment and alert the system that the hopper is ready for a pickup action.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Impact protection:</strong> every exposed region uses a t-slot "exoskeleton" design with framing over all weaker joints, so the system can take impact loads from operator misuse on a production floor.</li>
          </ul>
          <img src={img('/images/Daikin/Untitled Project (4).webp')} alt="Hopper material handling system" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="buffer" className="project-section">
          <h3>Buffer</h3>
          <p>
            The buffer machine stands after the forming process and does six jobs at once: oil
            draining, part accumulation, orientation adjustment, seam detection, process decoupling,
            and presentation to the robot.
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.95rem' }}>
            <li><strong style={{ color: 'var(--text-primary)' }}>Offset funnel:</strong> the robot simply drops formed tubes into the machine, and the passive funnel keeps tubes from jamming as they enter the rotary indexer.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Rotary indexer:</strong> its mounting angle drains the tubes, it indexes them properly into the system, and its rotation delivers them to the weld seam indexing system. The skeletal design is easier to manufacture than the alternatives considered.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Seam alignment:</strong> a camera system supports rotational alignment of the tube before the robot picks up the part, with air knives and shielding to minimize contamination. Once the tube is in the correct orientation, the buffer signals that it is ready for pickup.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Camera selection:</strong> two industrial vision systems were evaluated. Both were capable of the task, with one offering features dedicated to it and the other running off basic detection software.</li>
          </ul>
          <img src={img('/images/Daikin/Untitled Project (5).webp')} alt="Buffer material handling system" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="extraction" className="project-section">
          <h3>Decoupled Extraction &amp; Conveyor</h3>
          <p>
            Extraction pulls the bent tube out of the mandrel bender and hands it to the conveyor,
            decoupling the bender from whatever happens downstream.
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.95rem' }}>
            <li><strong style={{ color: 'var(--text-primary)' }}>Die stripper piston:</strong> mounted directly to the mandrel bender and positioned so its actuation pushes the tube off the die, moving it forward and out of the machine to be picked up.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Swing arm:</strong> on a motorized base. Once the bending operation and the piston die stripper operation are complete, it swings in front of the machine, grips the bent portion of the tube, pulls it out, swings back to its resting position hovering over the conveyor, and releases the part to downstream operations.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Overflow cart:</strong> a place for the arm to deposit formed tubes when the production floor needs that operation or excess exists. Tubes drained in the buffer can be stored there for future use or parallel production.</li>
          </ul>
          <img src={img('/images/Daikin/Untitled Project (7).webp')} alt="Decoupled extraction and conveyor system" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="eoat" className="project-section">
          <h3>End-of-Arm Tooling</h3>
          <p>
            The end-of-arm tooling is one of the main reasons the cycle time comes out as efficient as
            it does. Running four grippers lets the arm combine multiple cycles into a single
            operation, getting more done per trip.
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.95rem' }}>
            <li><strong style={{ color: 'var(--text-primary)' }}>Structure:</strong> a base welded steel frame built from bent sheet metal components welded together. An adapter plate on the back interfaces with the last degree of freedom of the robot arm, giving a rigid attachment while still allowing easy disassembly.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Geometry:</strong> the design was geometrically focused, ensuring that with all grippers loaded at once the arm could still access and interface with machines without collisions.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Grippers:</strong> four pneumatic parallel grippers with 8.0 mm of stroke per finger and 1350 N of gripping force, a firm hold on the tubes while staying well below what would crush or deform them.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Fingers:</strong> CNC machined out of steel to sustain repeated use without failure at high stress concentration regions, with a polyurethane grip bolted to the inside surface for a strong hold on oily tubes.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Sensing:</strong> proximity sensors mounted into existing gripper mounting holes tell the system when a tube is seated, a secondary check that keeps accidental drops in the cell to a minimum.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Protective shell:</strong> a 3D printed shield protects the grippers from accidental bumps with machine components and routes gripper and sensor wiring to a centralized area, feeding it through the EOAT and into the arm. It prints in multiple parts so a damaged section can be replaced without pulling the grippers off the tooling.</li>
          </ul>
          <img src={img('/images/Daikin/Untitled Project (9).webp')} alt="End-of-arm tooling" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="iterations" className="project-section">
          <h3>Iterations &amp; Decisions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Hopper Indexing, Tubes Failing to Seat in Their Groove</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Original:</strong> A fully passive ramped indexer, where tubes roll down the slope and settle into their grooves under gravity alone.<br />
                <strong style={{ color: 'var(--text-primary)' }}>Problem:</strong> Testing a 3D printed mockup of the geometry showed that in some scenarios a tube that hadn't built up enough speed couldn't get over the tube ahead of it and into its own groove, leaving it unindexed. This was not anticipated in the initial design.<br />
                <strong style={{ color: 'var(--text-primary)' }}>Fix:</strong> Two solutions were analyzed. An active pneumatic alignment system assisting from the top would have worked but added significant complexity, and testing showed it took very little force to push a tube over and into its groove. The stepper-driven CAM finger was the simpler and more robust option, so that is what went in.
              </p>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Rotary Indexer, Skeletal Frame vs. 3D Printed Body</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Chose:</strong> A skeletal design built from standoffs and aluminum plates.<br />
                <strong style={{ color: 'var(--text-primary)' }}>Rejected:</strong> A 3D printed body with draining built into the part.<br />
                Multiple designs were considered, and with manufacturability as the priority the skeletal build won out. Standoffs and plates give the assembly its structure while staying straightforward to produce.
              </p>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Buffer Entry, Offset Funnel vs. Direct Drop</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Chose:</strong> A passive offset funnel at the buffer inlet.<br />
                <strong style={{ color: 'var(--text-primary)' }}>Rejected:</strong> Dropping tubes directly into the rotary indexer.<br />
                This one was designed around up front rather than discovered in testing. A jam at the buffer inlet stalls everything downstream of it, and that was not a risk worth taking to save a passive part.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="simulation" className="project-section">
          <h3>Cell Simulation</h3>
          <video
            src={img('/images/Daikin/TubeBenderCell_2026_07_27_15_31_36_PM.mp4')}
            controls
            style={{ width: '100%', borderRadius: 'var(--radius-sm)', border: '1px solid var(--card-border)', marginTop: 16, display: 'block' }}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="results" className="project-section">
          <h3>Projected Results</h3>
          <DataTable
            columns={['Operation', 'Current Operator Cycle Time', 'Projected Robot Cycle Time']}
            rows={[
              { cells: ['Forming', '16 s', '14.27 s'] },
              { cells: ['Bending', '11 s', '6.4 s'] },
            ]}
          />
          <div style={{ height: 20 }} />
          <DataTable
            columns={['Metric', 'Current', 'Projected Automated State', 'Change']}
            rows={[
              { cells: ['Daily production', '5,954 tubes', '10,484 tubes *', '76% increase'] },
              { cells: ['Peak historical production', '9,516 tubes', '10,484 tubes *', '10% increase'] },
              { cells: ['Labor to run', '4 operators per shift (8 total)', '1 operator per shift overseeing both cells (2 total)', '6 positions reduced'] },
              { cells: ['Manual handling', 'High', 'Low', '—'] },
              { cells: ['Ergonomic risk', 'High repetition of movements', 'Reduced repetitive movements', '—'] },
            ]}
            note="* Projected automated production figures are stated at 94% efficiency."
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="capacity" className="project-section">
          <h3>Production Capacity &amp; Cycle Time Analysis</h3>
          <p>
            The capacity model behind those numbers. Each program in the cycle pattern is broken out
            with its duration, how many tubes sit in the buffer, and how many sit in the former, then
            rolled up into cycles per shift and daily production for both an ideal and a toleranced
            case against current average and historical peak output.
          </p>
          <img
            src={img('/images/Daikin/cycle time and production capacity analysis.png')}
            alt="Production capacity calculator for tube bender automation, cycle pattern durations and daily production totals"
            className="project-image-single"
            loading="lazy"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="cost" className="project-section">
          <h3>Cost &amp; ROI</h3>
          <DataTable
            columns={['Item', 'Amount']}
            rows={[
              { cells: ['Equipment', '$300,000'] },
              { cells: ['Maintenance, pneumatics, and machine relocation', '$49,012'] },
              { cells: ['Total capital required', '$349,012'], strong: true },
              { cells: ['Payback period', '1.98 years'] },
              { cells: ['Return on investment', '56.5%'] },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="calculations" className="project-section">
          <h3>Calculations &amp; Work</h3>
          <DocSlider
            images={Array.from({ length: 6 }, (_, i) => ({
              src: img(`/images/pdf-daikin-work/page-${String(i + 1).padStart(2, '0')}.jpg`),
              alt: `Daikin calculations and design work, page ${i + 1}`,
            }))}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="timeline" className="project-section">
          <h3>Project Timeline</h3>
          <img src={img('/images/Daikin/Gantt Chart.png')} alt="Project Gantt chart" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="handoff" className="project-section">
          <h3>Documentation &amp; Handoff</h3>
          <p>
            The project was summarized in a 50-page handoff document so the work could be carried
            forward by the plant team after the internship. Full production floor implementation is
            expected by the end of 2026.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="takeaways" className="project-section">
          <h3>What I Learned</h3>
          <p>
            This project was a complete industrial automation solution taken from concept development
            through design, simulation, and capital justification. The most important lesson was that
            successful automation projects have to be driven by data rather than assumptions. Process
            observations, cycle time studies, equipment utilization, and operator workflows were what
            identified the real bottlenecks and drove the design decisions. Evaluating multiple cell
            concepts against each other gave me a much clearer understanding of how automation design
            directly impacts throughput, labor requirements, equipment utilization, scalability, and
            overall return on investment.
          </p>
          <p>
            It also strengthened my ability to design automation for real production environments
            rather than purely theoretical ones. Maintenance access, machine integration, safety
            requirements, operator interaction, part variability, oil contamination, reliability, and
            future plant expansion all shaped the design. A solution has to be maintainable, scalable,
            and practical for long-term production use, not just functional. Along the way the project
            was also where I picked up FANUC RoboGuide and AutoCAD.
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
