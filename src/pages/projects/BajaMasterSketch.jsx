import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import Gallery from '../../components/Gallery'
import StatRow from '../../components/StatRow'
import StickyTOC from '../../components/StickyTOC'
import img from '../../img'

const toc = [
  { id: 'overview',    label: 'Overview'        },
  { id: 'decisions',  label: 'Key Decisions'   },
  { id: 'v1',         label: 'Master Sketch V1' },
  { id: 'v2',         label: 'Master Sketch V2' },
  { id: 'v3',         label: 'Master Sketch V3' },

  { id: 'lotus-shark', label: 'Lotus Shark'     },
  { id: 'animation',   label: 'Animation'       },
]

const gallery = [
  { src: img('/images/Baja Mastersketch v1.png'), alt: 'Master sketch V1' },
  { src: img('/images/car mastersketch v2.png'), alt: 'Master sketch V2' },
  { src: img('/images/car mastersketch v3.png'), alt: 'Master sketch V3' },
  { src: img('/images/lotusimage.png'), alt: 'Lotus Shark view 1' },
  { src: img('/images/imagelotus2.png'), alt: 'Lotus Shark view 2' },
  { src: img('/images/lotus shark animation gif.gif'), alt: 'Suspension animation' },
]

const specs = [
  { value: 'Double Wishbone', label: 'Suspension Type (F&R)' },
  { value: 'Lotus Shark', label: 'Kinematics Verification' },
  { value: '4 Iterations', label: 'Design Versions' },
  { value: 'Roll & Pitch IC', label: 'Geometry Basis' },
]

export default function BajaMasterSketch() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
        backTo="/baja"
        backLabel="Longhorn Baja"
        tag="SAE Baja · Vehicle Dynamics"
        title="Master Sketch"
        heroImage={img('/images/car mastersketch v3.png')}
        software={['SolidWorks CAD', 'Lotus Shark']}
        roles={['Vehicle Dynamics Lead']}
        inProgress
      >

        {/* ── Overview ── */}
        <div id="overview">
          <ScrollReveal>
            <div className="project-section">
              <h3>Engineering Challenge</h3>
              <p>
                Every downstream suspension component, control arms, hubs, uprights, tie rods , 
                gets its geometry from a single source: the master sketch. If the roll centers,
                instantaneous centers, or hardpoint locations are wrong here, they are wrong
                everywhere. The challenge is defining a suspension geometry that achieves manageable
                camber change through travel, balanced roll stiffness front-to-rear, acceptable
                anti-dive and anti-squat characteristics, and physically fits within the chassis
                envelope, all before a single physical part is made.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <StatRow stats={specs} />
          </ScrollReveal>

          <ScrollReveal>
            <div className="project-section">
              <h3>My Contribution</h3>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.95rem' }}>
                <li>Defined all suspension hardpoint locations front and rear from first principles</li>
                <li>Iterated geometry across three versions based on packaging constraints and Lotus Shark simulation feedback</li>
                <li>Verified kinematics in Lotus Shark and tuned hardpoints to achieve target handling behavior</li>
                <li>Established the master sketch as the single source of truth for all downstream component design</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Key Decisions ── */}
        <div id="decisions">
          <div className="section-marker">
            <div className="section-marker-inner">Key Engineering Decisions</div>
          </div>
          <ScrollReveal>
            <div className="project-section">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Suspension Type, Double Wishbone F&amp;R</div>
                  <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Chose:</strong> Double wishbone front and rear.<br />
                    <strong style={{ color: 'var(--text-primary)' }}>Rejected:</strong> trailing arm or MacPherson alternatives.<br />
                    Double wishbone gives independent control of roll center height and camber curve
                    through upper and lower arm length and angle, the only geometry that allows
                    fine-tuning the handling balance SAE Baja off-road conditions demand.
                  </p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Roll Center Height</div>
                  <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    Roll center height was set to balance body roll resistance (higher RC = less roll
                    but more jacking force) against lateral load transfer (lower RC = less jacking
                    but more roll). The chosen heights front and rear were verified in Lotus Shark to
                    confirm the resulting roll couple does not produce understeer or oversteer bias
                    that would compromise competition handling.
                  </p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Camber Curve</div>
                  <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    Upper arm length was set shorter than the lower arm to produce negative camber
                    gain in compression, keeping the contact patch square to the ground as the
                    wheel travels through bumps and body roll. Lotus Shark animation was used to
                    confirm the camber curve stays within acceptable bounds across the full jounce
                    and rebound range.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Master Sketch V1 ── */}
        <div id="v1">
          <div className="section-marker">
            <div className="section-marker-inner">Master Sketch, V1</div>
          </div>
          <ScrollReveal>
            <div className="project-section">
              <h3>Master Sketch, V1</h3>
              <p>
                V1 established the double wishbone geometry front and rear with initial hardpoint
                estimates. It intentionally omitted some geometry variables to allow rapid
                visualization of suspension travel behavior early in the design cycle, the goal
                was confirming the basic kinematic concept was feasible before committing to full
                parameter definition. The Lotus Shark input from V1 revealed that the initial
                roll center height was too low at the rear, producing handling imbalance.
              </p>
              <img
                src={img('/images/Baja Mastersketch v1.png')}
                alt="Master sketch V1"
                className="project-image-single"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* ── Master Sketch V2 ── */}
        <div id="v2">
          <div className="section-marker">
            <div className="section-marker-inner">Master Sketch, V2</div>
          </div>
          <ScrollReveal>
            <div className="project-section">
              <h3>Master Sketch, V2</h3>
              <p>
                V2 incorporated the full geometry variable set and revised rear hardpoints based on
                V1 simulation feedback, raising the rear roll center to better balance the
                front-to-rear roll couple. It also refined arm lengths after packaging conflicts
                were identified between the upper control arm and the chassis tube layout.
                Lotus Shark re-verification confirmed the revised geometry produced a more neutral
                handling balance.
              </p>
              <img
                src={img('/images/car mastersketch v2.png')}
                alt="Master sketch V2"
                className="project-image-single"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* ── Master Sketch V3 ── */}
        <div id="v3">
          <div className="section-marker">
            <div className="section-marker-inner">Master Sketch, V3</div>
          </div>
          <ScrollReveal>
            <div className="project-section">
              <h3>Master Sketch, V3</h3>
              <p>
                V3 is the current release, incorporating all geometry variables and the final
                hardpoint positions verified in Lotus Shark. Adjustments from V2 were driven by
                component packaging constraints, specifically rear hub motor clearances and
                chassis tube interference, that only became visible once downstream component
                design began. V3 is the geometry all control arm, hub, and upright designs are
                built from.
              </p>
              <img
                src={img('/images/car mastersketch v3.png')}
                alt="Master sketch V3"
                className="project-image-single"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>

{/* ── Lotus Shark ── */}
        <div id="lotus-shark">
          <div className="section-marker">
            <div className="section-marker-inner">Lotus Shark</div>
          </div>
          <ScrollReveal>
            <div className="project-section">
              <h3>Lotus Shark Verification</h3>
              <p>
                Lotus Shark takes geometry inputs directly from the CAD master sketch, reconstructs
                the full suspension linkage, and simulates kinematics through the travel range. It
                flags geometry conflicts, visualizes camber and toe curves, and outputs roll center
                migration data. This was the primary tool for verifying that hardpoint decisions
                made on the CAD sketch would produce the intended kinematic behavior on the car.
                Every iteration of the master sketch was verified here before hardpoints were
                released to downstream component designers.
              </p>
              <div className="project-image-grid">
                <img src={img('/images/lotusimage.png')} alt="Lotus Shark view 1" loading="lazy" />
                <img src={img('/images/imagelotus2.png')} alt="Lotus Shark view 2" loading="lazy" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Animation ── */}
        <div id="animation">
          <div className="section-marker">
            <div className="section-marker-inner">Animation</div>
          </div>
          <ScrollReveal>
            <div className="project-section">
              <h3>Suspension Animation</h3>
              <p>
                Full jounce-to-rebound animation showing camber gain, roll center migration, and
                toe change through travel. This animation was used to confirm no bind or geometric
                conflict occurs at the travel limits, a failure mode that can be invisible in
                static CAD but visible immediately in kinematic simulation.
              </p>
              <img
                src={img('/images/lotus shark animation gif.gif')}
                alt="Suspension geometry animation"
                className="project-image-single"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <Gallery images={gallery} />
        </ScrollReveal>

      </DetailPage>
    </>
  )
}
