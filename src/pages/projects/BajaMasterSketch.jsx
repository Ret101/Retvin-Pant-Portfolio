import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import Gallery from '../../components/Gallery'
import StickyTOC from '../../components/StickyTOC'

const toc = [
  { id: 'overview',    label: 'Overview'        },
  { id: 'v1',         label: 'Master Sketch V1' },
  { id: 'v2',         label: 'Master Sketch V2' },
  { id: 'v3',         label: 'Master Sketch V3' },
  { id: 'lotus-shark', label: 'Lotus Shark'     },
  { id: 'animation',   label: 'Animation'       },
]

const gallery = [
  { src: '/images/Baja Mastersketch v1.png', alt: 'Master sketch V1' },
  { src: '/images/car mastersketch v2.png', alt: 'Master sketch V2' },
  { src: '/images/car mastersketch v3.png', alt: 'Master sketch V3' },
  { src: '/images/lotusimage.png', alt: 'Lotus Shark view 1' },
  { src: '/images/imagelotus2.png', alt: 'Lotus Shark view 2' },
  { src: '/images/lotus shark animation gif.gif', alt: 'Suspension animation' },
]

export default function BajaMasterSketch() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
        backTo="/team/longhorn-baja"
        backLabel="Longhorn Baja"
        tag="SAE Baja · Vehicle Dynamics"
        title="Master Sketch"
        heroImage="/images/car mastersketch v3.png"
        software={['SolidWorks CAD', 'Lotus Shark']}
        roles={['Vehicle Dynamics Lead']}
        inProgress
      >

        {/* ── Overview ── */}
        <div id="overview">
          <ScrollReveal>
            <div className="project-section">
              <h3>Overview</h3>
              <p>
                The master sketch is the foundational geometry document for the 25'–26' Longhorn Baja vehicle.
                It defines roll and pitch instantaneous centers to determine control arm mounting positions and
                arm lengths, establishing the suspension geometry that all downstream components are designed around.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Master Sketch V1 ── */}
        <div id="v1">
          <div className="section-marker">
            <div className="section-marker-inner">Master Sketch — V1</div>
          </div>
          <ScrollReveal>
            <div className="project-section">
              <h3>Master Sketch — V1</h3>
              <p>
                V1 utilized double wishbone geometry front and rear. While it did not incorporate all geometry
                variables — revised in V2 — it allowed the team to visualize suspension geometry through its full
                travel range during early design phases.
              </p>
              <img
                src="/images/Baja Mastersketch v1.png"
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
            <div className="section-marker-inner">Master Sketch — V2</div>
          </div>
          <ScrollReveal>
            <div className="project-section">
              <h3>Master Sketch — V2</h3>
              <p>
                V2 expanded on V1 by incorporating additional geometry variables and refining hardpoint
                locations based on early simulation feedback. This iteration provided a more complete
                picture of suspension kinematics across the full travel range.
              </p>
              <img
                src="/images/car mastersketch v2.png"
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
            <div className="section-marker-inner">Master Sketch — V3</div>
          </div>
          <ScrollReveal>
            <div className="project-section">
              <h3>Master Sketch — V3</h3>
              <p>
                V3 is the current working iteration, incorporating all geometry variables and updated
                hardpoint positions derived from Lotus Shark verification and component packaging constraints.
              </p>
              <img
                src="/images/car mastersketch v3.png"
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
                Lotus Shark software was used to verify geometry and ensure manageable, safe handling
                characteristics. The software takes geometry inputs from the CAD master sketch, depicts the
                full suspension geometry, highlights flaws or conflicts, and allows fine-tuning of critical
                hardpoint locations.
              </p>
              <div className="project-image-grid">
                <img src="/images/lotusimage.png" alt="Lotus Shark view 1" loading="lazy" />
                <img src="/images/imagelotus2.png" alt="Lotus Shark view 2" loading="lazy" />
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
                The animation below shows suspension geometry through full jounce and rebound, demonstrating
                camber and toe change characteristics.
              </p>
              <img
                src="/images/lotus shark animation gif.gif"
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
