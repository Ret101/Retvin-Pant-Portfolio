import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import DocSlider from '../../components/DocSlider'
import Gallery from '../../components/Gallery'
import StickyTOC from '../../components/StickyTOC'
import img from '../../img'

const toc = [
  { id: 'engineering-challenge', label: 'Engineering Challenge'      },
  { id: 'my-contribution',       label: 'My Contribution'            },
  { id: 'cad',                   label: 'Rear Hub CAD'               },
  { id: 'sketches',              label: 'Rear Hub Sketches'          },
  { id: 'design-constraints',    label: 'Design Constraints'         },
  { id: 'hub-design',            label: 'Hub Design'                 },
  { id: 'manufacturing',         label: 'Manufacturing'              },
  { id: 'fea',                   label: 'FEA Results'                },
  { id: 'interim-solution',      label: 'Interim OEM Hub'            },
  { id: 'lessons-learned',       label: 'Result & Lessons'           },
]

export default function BajaRearHubs() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
      backTo="/baja"
      backLabel="Longhorn Baja"
      tag="SAE Baja · Laminated Manufacturing"
      title="Rear Hubs: Laminated Manufacturing"
      heroImage={img('/images/rear hub machined image.jpg')}
      software={['SolidWorks CAD', 'SolidWorks FEA', 'CNC Mill']}
      roles={['Vehicle Dynamics Lead']}
    >
      <ScrollReveal>
        <div id="engineering-challenge" className="project-section">
          <h3>Engineering Challenge</h3>
          <p>
            The rear hub carries drive torque from the axle to the wheel while reacting suspension
            loads from both upper and lower control arms at the same time. Unlike the front hub, it
            has to transmit traction forces, so the axle spline interface, bearing preload, and
            structural cross-section all interact with each other. Minimizing unsprung mass at the
            rear also affects traction under throttle, so every gram of material is a tradeoff
            against structural margin.
          </p>
          <p>
            The reason for going custom at all: the off-the-shelf OEM Grizzly 660 hubs that match our
            axle spline have no brake rotor mounting built in. The rear brakes needed somewhere to bolt
            a rotor, so the hub had to be either designed from scratch or modified to carry one.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="my-contribution" className="project-section">
          <h3>My Contribution</h3>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.95rem' }}>
            <li>Designed the custom rear hub around a laminated spline stack, avoiding broaching and wire EDM</li>
            <li>Specified the 6061-T6 hub body, laser-cut spline plates, and ceramic hard anodize, and compensated the spline teeth for laser kerf</li>
            <li>Ran structural FEA in Ansys Mechanical across six combined load cases plus a separate spline plate analysis</li>
            <li>When the laminated hub's timeline ran past the build schedule, developed the interim modified OEM hub that the car ran at competition</li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="cad" className="project-section">
          <h3>Rear Hub CAD</h3>
          <img
            src={img('/images/Rear Hub.png')}
            alt="Rear hub design"
            className="project-image-single"
            loading="lazy"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="sketches" className="project-section">
          <DocSlider
            title="Rear Hub Sketches"
            images={[
              { src: img('/images/pdf-rear-hub-sketches/page-01.jpg'), alt: 'Rear hub sketches, page 1' },
              { src: img('/images/pdf-rear-hub-sketches/page-02.jpg'), alt: 'Rear hub sketches, page 2' },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="design-constraints" className="project-section">
          <h3>Design Constraints</h3>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.95rem' }}>
            <li><strong style={{ color: 'var(--text-primary)' }}>Geometry:</strong> Ball joint positions fixed by master sketch hardpoints</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Drive interface:</strong> Must accept the axle spline profile and transmit full drivetrain torque to the wheel</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Bearing:</strong> Must carry combined radial (cornering) and axial (bump) loads simultaneously</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Spline interface:</strong> Internal spline must be achievable without broaching or wire EDM (cost and access constraints)</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Mass:</strong> Minimized to keep rear unsprung mass low for better traction and ride over rough terrain</li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="hub-design" className="project-section">
          <h3>Hub Design</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: 16 }}>
            The hub body is machined from 6061-T6 aluminum. FEA confirmed it survives all expected
            load cases with enough margin while still keeping unsprung mass low. That was especially
            important here because the laminated spline stack already adds more weight than a
            conventionally machined hub would.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: 16 }}>
            The outer face has bolt holes that mount directly to the wheel rim. Protruding standoff
            features on the same face interface with the brake rotor, locating it axially and
            transmitting braking torque through a bolt pattern into the hub body.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: 16 }}>
            At the center is a hexagonal through-hole. The spline plates stack inside this hex bore,
            and the hex geometry serves a dual purpose: it drives torque through the plate stack
            mechanically, so even if the TIG welds holding the stack together were to fail, the
            hex interlock keeps the assembly together and the wheel spinning long enough for the car
            to limp to service.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75 }}>
            The spline plates are 0.25 in 6061-T6 aluminum with the spline profile laser-cut into
            the center. Each plate is chamfered at the edges before stacking to increase the weld
            surface area at the plate joints. A ceramic hardness anodizing coating sourced through
            Xometry is applied to the plates to improve wear resistance under the cyclic torsional
            loading at the axle-to-spline interface.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="manufacturing" className="project-section">
          <h3>Manufacturing &amp; Challenges</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: 24 }}>
            My approach was to stack CNC-milled plates whose 2D profiles combine to form the spline
            geometry in 3D. Each plate is within the team's machining capability, and stacking them
            reproduces the spline pattern with tight tolerances across the full hub depth.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>

            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Access to Internal Spline Geometry</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Conventional internal splines are cut by broaching or wire EDM. Custom broach tooling
                for a one-off spline profile is expensive and is effectively single-use, which would
                lock the team into that geometry for the life of the tooling. Wire EDM wasn't
                accessible to us either. Both were ruled out, so I landed on laminated plate stacking.
                Each plate's spline profile is a simple 2D cutout that can be done with standard
                sheet-cutting, and stacking them builds the full 3D spline geometry without any
                special tooling.
              </p>
            </div>

            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Material Selection</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                The hub body needed to handle combined braking, cornering, and bump loads without
                adding too much unsprung mass. That was already a concern with the welded laminate
                construction, so 6061-T6 aluminum was the right call. For the spline plates, the
                cyclic torsional loading at the axle interface was a concern, so I specified a
                ceramic hardness anodizing coat through Xometry to improve the wear life of the
                spline tooth surfaces under repeated load cycles.
              </p>
            </div>

            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Laser Cutting Kerf &amp; Tolerance</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                We initially planned on waterjet cutting for the spline plates. Waterjetting had
                decent edge quality but the resolution wasn't fine enough for the spline tooth
                geometry, so I switched to laser cutting for better dimensional precision on
                the tooth profile.
              </p>
              <p style={{ margin: '10px 0 0', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                That switch introduced a new problem: kerf. Xometry specs the kerf at a maximum
                of 0.012 in of material burned off per cut edge. The spline tooth tips in the
                original design were only 0.014 in thick, so the laser would have basically
                incinerated them. Even the thicker parts of each tooth would get reduced by around
                30%. I increased the tooth thickness in the design by 0.008 to 0.012 in to
                compensate, so the post-cut geometry lands where it needs to.
              </p>
              <p style={{ margin: '10px 0 0', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                The other concern was the heat-affected zone (HAZ). Laser cutting heats the
                material to around 2,500 °C right at the cut edge. 6061 in T-6 condition gets
                its strength from controlled precipitation hardening, and that much heat pushes
                the edge toward an annealed state, reducing hardness and ductility right where
                the cut was made. I had to account for that softened boundary condition when
                analyzing the spline tooth dimensions and the stackup tolerances.
              </p>
            </div>

          </div>

          <div className="project-image-grid">
            <img src={img('/images/rear hub manufacturing.jpg')} alt="Rear hub manufacturing process" loading="lazy" />
            <img src={img('/images/rear hub machined image.jpg')} alt="Rear hub machined part" loading="lazy" />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="fea" className="project-section">
          <h3>FEA Results</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: 24 }}>
            I ran structural analysis in Ansys Mechanical across six load combinations covering the
            worst-case forces the rear hub sees in competition. Boundary conditions included a fixed
            bearing bore, bolt connections at the brake rotor mounting face (4-bolt pattern), and
            bolt connections at the wheel mounting flange reacting drive and lateral loads. A
            separate FEA was run on the spline plate stack to check stress and deformation under
            the torsional load transmitted through the hex interface.
          </p>
          <DocSlider
            title="FEA Load Cases"
            interval={7000}
            images={[
              {
                src: img('/images/pdf-rear-hub-fea/Screenshot 2026-05-15 211755.png'),
                alt: 'Simulation 1: Hard Braking - von Mises Stress',
                caption: 'Simulation 1 (Hard Braking): 1,250 N braking force applied at the wheel mounting flange, reacted through the bearing bore and 4-bolt brake rotor mount. Von Mises stress peaks at 53.2 MPa at the spoke-to-hub junction, well within the 270 MPa yield limit of 6061-T6 aluminum.',
              },
              {
                src: img('/images/pdf-rear-hub-fea/Screenshot 2026-05-15 211809.png'),
                alt: 'Simulation 1: Hard Braking - Safety Factor',
                caption: 'Simulation 1 (Hard Braking): Safety factor distribution across the hub. Minimum safety factor of 5.19, showing strong margin in the braking-only load case. Bolt connections at the brake rotor mount and wheel flange carry load as expected with no stress concentrations at the fastener holes.',
              },
              {
                src: img('/images/pdf-rear-hub-fea/Screenshot 2026-05-15 212004.png'),
                alt: 'Simulation 4: Steering + Bump - Safety Factor (Worst Case)',
                caption: 'Simulation 4 (Steering + Bump, Worst Case): Combined lateral cornering load of 1,800 N and 2.5g bump applied simultaneously. The fixed bearing bore carries combined radial and axial loads while bolt connections at the wheel flange react cornering torque. Minimum safety factor 1.93, which was the governing case across all six simulations.',
              },
              {
                src: img('/images/pdf-rear-hub-fea/Screenshot 2026-05-15 212058.png'),
                alt: 'Simulation 6: Downhill Braking into Corner - Safety Factor',
                caption: 'Simulation 6 (Downhill Braking into Corner): Braking force and cornering load applied together at a downhill pitch angle. The brake rotor bolt pattern and wheel flange bolts react the combined torque and lateral force vector. Minimum safety factor 2.31, confirming acceptable margin under this combined scenario.',
              },
              {
                src: img('/images/pdf-rear-hub-fea/Screenshot 2026-05-15 212226.png'),
                alt: 'Spline Plate FEA - von Mises Stress',
                caption: 'Spline Plate FEA (von Mises Stress): The hexagonal spline plate stack analyzed under full drivetrain torsional load through the hex bore interface. Peak stress of 38.4 MPa concentrated at the spline tooth roots, with most of the plate well below 10 MPa, confirming the plate geometry and material are structurally sufficient.',
              },
              {
                src: img('/images/pdf-rear-hub-fea/Screenshot 2026-05-15 212232.png'),
                alt: 'Spline Plate FEA - Deformation',
                caption: 'Spline Plate FEA (Deformation): Maximum deflection of 2.42e-3 mm under the torsional load case, concentrated at the spline tooth tips. Deformation at this scale has no meaningful impact on the axle-to-spline interface fit.',
              },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="interim-solution" className="project-section">
          <h3>Interim Solution: Modified OEM Hub</h3>
          <div style={{ background: 'var(--accent-dim)', border: '1px solid var(--accent)', borderRadius: 'var(--radius-sm)', padding: '18px 22px' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.75rem', color: 'var(--accent-light)', marginBottom: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Note</div>
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              The full manufacturing timeline for the laminated hub ran past the time the team had
              before the car needed to run. To keep the build moving, I developed a modified OEM
              Grizzly 660 hub to run in the meantime.
            </p>
          </div>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.95rem', marginTop: 20 }}>
            <li><strong style={{ color: 'var(--text-primary)' }}>Standoffs:</strong> standoff holes were drilled into the OEM hub flange and machined steel standoffs were welded to the hub. The hub's factory coating was ground off first to give a clean weld surface.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Adapter plate:</strong> M6 countersunk bolts pass through the standoffs to attach an adapter plate, and the brake rotor mounts to that plate, adding the rotor interface the stock hub was missing.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Custom rotors:</strong> the rotors were made custom so their mounting holes landed where enough material remained on the hub after drilling, keeping adequate edge distance around every new hole.</li>
          </ul>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, marginTop: 16 }}>
            The final stackup: modified OEM hub, machined steel standoffs, and brake rotor assembled on the rear upright.
          </p>
          <img
            src={img('/images/Hub stackup image.jpeg')}
            alt="Final rear hub stackup: upright, brake rotor, machined steel standoffs, and modified OEM Grizzly 660 hub"
            className="project-image-single"
            loading="lazy"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="lessons-learned" className="project-section">
          <h3>Competition Result &amp; Lessons Learned</h3>
          <div className="lessons-grid">
            <div className="lesson-card lesson-card-key">
              <span className="lesson-card-tag">Competition Result</span>
              <h4 className="lesson-card-title">Survived the Full Competition, No Deflection Under Braking</h4>
              <p>
                The modified OEM hubs, with welded steel standoffs and the bolted adapter plate, ran the
                entire competition with no deflection under braking loads.
              </p>
            </div>
            <div className="lesson-card">
              <span className="lesson-card-tag">Next Year</span>
              <h4 className="lesson-card-title">Shorter Standoffs</h4>
              <p>
                Braking torque reacts through the rotor at the end of the standoffs. Shortening them reduces
                the moment arm, and with it the bending moment the standoff welds have to carry.
              </p>
            </div>
            <div className="lesson-card">
              <span className="lesson-card-tag">Manufacturing</span>
              <h4 className="lesson-card-title">Surface Prep Before Welding</h4>
              <p>
                The hub's factory coating had to be ground off before welding the standoffs to get a clean,
                sound weld surface.
              </p>
            </div>
            <div className="lesson-card">
              <span className="lesson-card-tag">Schedule</span>
              <h4 className="lesson-card-title">Plan an Interim Path for Long-Lead Parts</h4>
              <p>
                The laminated hub's manufacturing timeline ran past the build schedule. Having a modified
                OEM fallback kept the car on track for competition.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Gallery
          title="Rear Hub Gallery"
          images={[
            { src: img('/images/Rear Hub.png'), alt: 'Rear hub CAD' },
            { src: img('/images/rear hub machined image.jpg'), alt: 'Rear hub machined part' },
            { src: img('/images/rear hub manufacturing.jpg'), alt: 'Rear hub manufacturing' },
            { src: img('/images/Hub stackup image.jpeg'), alt: 'Final rear hub and rotor stackup' },
          ]}
        />
      </ScrollReveal>

    </DetailPage>
    </>
  )
}
