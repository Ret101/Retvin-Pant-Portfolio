import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StickyTOC from '../../components/StickyTOC'
import Gallery from '../../components/Gallery'
import { Link } from 'react-router-dom'
import img from '../../img'

const toc = [
  { id: 'engineering-challenge', label: 'Engineering Challenge' },
  { id: 'where-it-sits',         label: 'Where It Sits'         },
  { id: 'load-path',             label: 'Load Path'             },
  { id: 'design-constraints',    label: 'Design Constraints'    },
  { id: 'design-priorities',     label: 'Design Priorities'     },
  { id: 'design-change',         label: 'Design Change'         },
  { id: 'fea',                   label: 'FEA, Original Design'  },
  { id: 'assembly',              label: 'Assembly'              },
  { id: 'fatigue',               label: 'Fatigue Analysis'      },
  { id: 'related',               label: 'Related Parts'         },
]

const gallery = [
  { src: img('/images/front-hub/upright-hub-assembly.webp'), alt: 'Front hub pressed into the upright bearing, with brake rotor and wheel studs' },
  { src: img('/images/front-hub/front-corner-installed.webp'), alt: 'Front corner installed on the car: upright, hub, rotor, caliper and control arms' },
  { src: img('/images/front-hub/front-hub-fea.webp'), alt: 'Ansys safety factor plot of the front hub' },
  { src: img('/images/Front Hub.png'), alt: 'Front hub CAD' },
]

export default function BajaFrontHubs() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
      backTo="/baja"
      backLabel="Longhorn Baja"
      tag="SAE Baja · Suspension Design"
      title="Front Hubs"
      heroImage={img('/images/front-hub/upright-hub-assembly.webp')}
      heroStyle={{ backgroundPosition: 'center 45%' }}
      software={['SolidWorks CAD', 'Ansys Mechanical']}
      roles={['Vehicle Dynamics Lead']}
      inProgress
    >
      <ScrollReveal>
        <div id="engineering-challenge" className="project-section intro-tile">
          <h3>Engineering Challenge</h3>
          <p>
            The front hub is the most geometrically constrained component on the vehicle: it has to
            package the wheel bearing, brake rotor interface, steering knuckle attachment, and upper
            and lower ball joint mounts, all within the hardpoint positions locked by the master sketch.
            Compromising any one interface affects suspension geometry, brake performance, or bearing life.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="where-it-sits" className="project-section split-section">
          <div className="split-copy">
            <h3>Where It Sits</h3>
            <p>
              The front of the car is a double wishbone suspension, and the hub sits at the centre
              of each front corner. Working outward from the car:
            </p>
            <ul className="contrib-grid" style={{ gridTemplateColumns: '1fr' }}>
              <li>The <strong>upright</strong> is the machined aluminum part the upper and lower control arms bolt to through ball joints, and the tie rod steers</li>
              <li>The <strong>wheel bearing</strong> is pressed into the upright and lets the hub spin</li>
              <li>The <strong>hub</strong> is pressed into the bearing and carries the brake rotor and the wheel studs</li>
              <li>The <strong>brake caliper</strong> bolts to the upright and clamps the rotor</li>
            </ul>
          </div>
          <figure className="split-media">
            <img src={img('/images/front-hub/front-corner-installed.webp')} alt="Front corner installed on the car: upright, hub, drilled rotor, caliper, brake line and control arms" loading="lazy" />
            <figcaption>The front corner on the car: upright, hub and rotor, caliper and both control arms.</figcaption>
          </figure>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="load-path" className="project-section">
          <h3>Load Path</h3>
          <p>
            Every load from the front tire passes through the hub before it reaches the rest of the
            car, which is why this small part has to be sized carefully:
          </p>
          <div className="decision-grid">
            <div className="decision-card">
              <div className="decision-card-title">Bump and cornering</div>
              <p className="decision-card-body">
                Tire → wheel → studs → hub flange → hub spindle → wheel bearing → upright → ball
                joints → upper and lower control arms → chassis.
              </p>
            </div>
            <div className="decision-card">
              <div className="decision-card-title">Braking</div>
              <p className="decision-card-body">
                The rotor turns with the hub. When the caliper, mounted on the upright, clamps it,
                the braking torque is reacted back through the upright into the control arms.
              </p>
            </div>
            <div className="decision-card">
              <div className="decision-card-title">Steering</div>
              <p className="decision-card-body">
                The tie rod pushes on the upright, which turns the whole corner, hub and rotor
                included, about the line through the two ball joints.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="design-constraints" className="project-section">
          <h3>Design Constraints</h3>
          <ul className="constraint-grid">
            <li><strong>Geometry</strong> Ball joint positions fixed by master sketch hardpoints, no deviation allowed</li>
            <li><strong>Bearing</strong> Must accommodate the selected wheel bearing OD and width without overhang</li>
            <li><strong>Brake</strong> Rotor must clear the caliper at full steering lock in both directions</li>
            <li><strong>Mass</strong> Minimized since front unsprung mass directly affects transient handling response</li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="design-priorities" className="project-section">
          <h3>Design Priorities</h3>
          <p>
            The hub follows the design rules we set for the whole car, and two of them pull against
            each other on this part:
          </p>
          <ul className="constraint-grid">
            <li><strong>Durability</strong> The team rule is a minimum factor of safety above 2 on critical components under 5–7 g of load, prioritizing durability over weight</li>
            <li><strong>Unsprung mass</strong> Every gram at the corner moves with the wheel, so a lighter hub keeps the tire in contact over rough terrain</li>
            <li><strong>Serviceability</strong> Critical outboard parts should be easy to reach and replace, with fewer fastener sizes</li>
            <li><strong>Manufacturability</strong> Custom machined parts are kept to a minimum and designed around what the team's shop can make</li>
          </ul>
          <p style={{ marginTop: 20 }}>
            Durability and unsprung mass were the trade-off that decided the final design, described next.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="design-change" className="project-section">
          <h3>Design Change: From Lightweight to Solid</h3>
          <p>
            The first front hub design removed material wherever the loads allowed, to keep front
            unsprung mass down. That changed suddenly during manufacturing: a fillet in the design
            was not added when the part was machined, and the sharp corner left only 0.02 in of
            material at that section.
          </p>
          <p>
            With that little material at a stress concentration, I could not trust the part to
            survive competition loads. I made a quick redesign to a bulkier, solid-mass hub, giving
            up some of the weight savings in exchange for margin that does not depend on a single
            fillet being machined exactly right. The FEA of the original design, below, pointed the
            same way: its minimum safety factor of 1.67 was already short of the team's target of 2.
          </p>
          <div className="lessons-grid">
            <div className="lesson-card lesson-card-key">
              <h4 className="lesson-card-title">Design for What the Shop Can Actually Make</h4>
              <span className="lesson-card-tag">Lesson</span>
              <p>
                A lightweight part is only as strong as its thinnest machined feature. When a
                critical fillet can be missed in manufacturing, the safer design keeps enough
                material that the part survives either way.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="fea" className="project-section split-section">
          <div className="split-copy">
            <h3>FEA of the Original Design</h3>
            <p>
              I checked the original lightweight hub in Ansys Mechanical as a static structural
              analysis. Most of the hub body and mounting bosses had ample margin, with a safety
              factor above 10. The minimum, 1.67, sat where the spindle meets the hub body, where
              the load from the wheel is carried into the hub.
            </p>
            <p>
              That is below the team's target of a safety factor above 2 for critical components.
              Together with the missing fillet leaving only 0.02 in of material, it made the case
              for moving to the bulkier, solid-mass hub.
            </p>
          </div>
          <figure className="split-media">
            <img src={img('/images/front-hub/front-hub-fea.webp')} alt="Ansys static structural safety factor plot of the original front hub design, minimum 1.67 at the spindle root" loading="lazy" />
            <figcaption>Original design, Ansys static structural: safety factor, minimum 1.67 at the spindle root, below the target of 2.</figcaption>
          </figure>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="assembly" className="project-section">
          <h3>Assembly</h3>
          <p>
            Each joint in the corner is a press fit, assembled using thermal shrinkage so the parts
            go together without damaging the fits:
          </p>
          <ul className="contrib-grid">
            <li>The wheel bearing was frozen and pressed into the aluminum upright</li>
            <li>The hub was frozen and pressed into the upright and bearing assembly</li>
            <li>The wheel studs were pressed into the hub</li>
          </ul>
          <div className="project-image-grid">
            <img src={img('/images/front-hub/upright-hub-assembly.webp')} alt="Front hub pressed into the upright bearing, with brake rotor and wheel studs" loading="lazy" style={{ height: 420 }} />
            <img src={img('/images/front-hub/front-corner-installed.webp')} alt="Front corner installed on the car: upright, hub, rotor, caliper and control arms" loading="lazy" style={{ height: 420 }} />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="fatigue" className="project-section">
          <h3>Fatigue Analysis</h3>
          <p>
            The fatigue life estimate, including the load cycles and Marin factors used to correct
            the endurance limit, is being added.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="related" className="project-section">
          <h3>Related Parts</h3>
          <ul className="contrib-grid">
            <li><Link to="/baja/master-sketch">Vehicle Master Sketch</Link>: the hardpoints that fix where the ball joints, and so the upright and hub, sit</li>
            <li><Link to="/baja/control-arms">Control Arms</Link>: the upper and lower arms that carry the upright's loads into the chassis</li>
            <li><Link to="/baja/rear-hubs">Rear Hubs</Link>: the rear corner, which also has to transmit drive torque from the axle</li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Gallery images={gallery} />
      </ScrollReveal>
    </DetailPage>
    </>
  )
}
