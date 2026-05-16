import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import Gallery from '../../components/Gallery'
import StickyTOC from '../../components/StickyTOC'
import img from '../../img'

const toc = [
  { id: 'engineering-challenge', label: 'Engineering Challenge' },
  { id: 'key-decisions',         label: 'Key Decisions'         },
  { id: 'robot-design',          label: 'Robot Design'          },
  { id: 'failures',              label: 'Failures'              },
]

const gallery = [
  { src: img('/images/battlebot.jpg'), alt: 'Beetleweight battlebot physical' },
  { src: img('/images/battlebot iso topside.png'), alt: 'Battlebot CAD top view' },
  { src: img('/images/battlebot iso underside.png'), alt: 'Battlebot CAD underside view' },
]

export default function Beetleweight() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
      backTo="/personal"
      backLabel="Personal Projects"
      tag="Texas Roborumble · UT Austin"
      title="Beetleweight Battlebot"
      heroImage={img('/images/battlebot.jpg')}
      software={['Onshape CAD', '3D Printing']}
      roles={['Mechanical Designer']}
    >
      <ScrollReveal>
        <StatRow stats={[
          { value: '3-2-0', label: 'Competition Record' },
          { value: '<3 lbs', label: 'Weight Class' },
          { value: 'TPU', label: 'Chassis Material' },
          { value: 'Vertical Spinner', label: 'Weapon Type' },
        ]} />
      </ScrollReveal>

      <ScrollReveal>
        <div id="engineering-challenge" className="project-section">
          <h3>Engineering Challenge</h3>
          <p>
            Design a combat robot that fits under 3 pounds, survives direct hits from opponents,
            and delivers meaningful weapon energy, all with parts available at a university makerspace.
            The weight limit is strictly enforced at weigh-in, so every gram spent on the chassis
            is a gram taken away from weapon mass and vice versa. The structural material needed to
            absorb high-energy impacts without shattering while still being light enough to stay
            under the class limit.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="key-decisions" className="project-section">
          <h3>Key Engineering Decisions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Chassis Material, TPU vs. Rigid PLA</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Chose:</strong> TPU printed at 80% infill.<br />
                <strong style={{ color: 'var(--text-primary)' }}>Rejected:</strong> rigid PLA or PETG shell.<br />
                TPU deforms elastically under impact and returns to shape, absorbing hit energy instead
                of fracturing. A rigid material at this weight class shatters under the spinner hits
                common in beetleweight combat. The 80% infill density balances impact absorption against
                the weight budget.
              </p>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Weapon Design, Bolt-Tipped Vertical Spinner</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Chose:</strong> Two large hex bolts mounted at the ends of the spinner bar as strike tips.<br />
                The bolts concentrate mass at the furthest point from the rotation center, maximizing
                rotational kinetic energy for a given weapon motor RPM. This replicates the eggbeater
                weapon style used in higher-weight classes, adapted entirely from hardware available at
                the makerspace. No custom machined steel required.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="robot-design" className="project-section">
          <h3>Robot Design</h3>
          <p>
            The chassis is printed in TPU at 80% infill, a balance of weight savings and extreme
            impact resistance. The vertical spinner bar carries two large hex bolts at each end,
            placing mass at the tip to maximize kinetic energy at contact. Two drive wheels provide
            maneuverability, and the spinning weapon's gyroscopic forces assist with turning response
            at speed.
          </p>
          <div className="project-image-grid">
            <img src={img('/images/battlebot.jpg')} alt="Beetleweight battlebot physical" loading="lazy" />
            <img src={img('/images/battlebot iso topside.png')} alt="Battlebot CAD top view" loading="lazy" />
            <img src={img('/images/battlebot iso underside.png')} alt="Battlebot CAD underside view" loading="lazy" />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="failures" className="project-section">
          <h3>Failures and Competition Fixes</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Weight Over Limit, On-the-Fly Fix at Competition</div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                The assembled robot came in over the 3-pound class limit at weigh-in. With no time to
                reprint parts, the fix was to drill holes through the TPU chassis frame in regions
                where infill density was highest, removing material without compromising the primary
                structural load paths. The robot made weight just before the first match.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Gallery images={gallery} />
      </ScrollReveal>
    </DetailPage>
    </>
  )
}
