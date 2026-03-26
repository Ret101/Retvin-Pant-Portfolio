import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import Gallery from '../../components/Gallery'
import img from '../../img'

const gallery = [
  { src: img('/images/battlebot.jpg'), alt: 'Beetleweight battlebot physical' },
  { src: img('/images/battlebot iso topside.png'), alt: 'Battlebot CAD view 1' },
  { src: img('/images/battlebot iso underside.png'), alt: 'Battlebot CAD view 2' },
]

export default function Beetleweight() {
  return (
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
          { value: '80%', label: 'TPU Infill' },
          { value: 'Vertical Spinner', label: 'Weapon Type' },
        ]} />
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Introduction</h3>
          <p>
            Built for the Texas Roborumble combat robotics competition held at the University of Texas
            at Austin. The robot competes in the beetleweight class, constrained to under 3 pounds.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Purpose &amp; Result</h3>
          <p>
            Designed under a 3-pound weight limit to withstand heavy hits while delivering powerful
            blows to opponents. The robot went <strong style={{ color: 'var(--accent-light)' }}>3-2-0</strong> at competition.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Robot Design</h3>
          <p>
            The chassis is printed in TPU at 80% infill — a balance of weight savings and extreme
            impact resistance. A vertical spinner weapon features hex bolts at each end, adding mass
            at the tip for maximum kinetic energy delivery. Two drive wheels provide maneuverability,
            and the spinning weapon's gyroscopic forces also assist with driving.
          </p>
          <div className="project-image-grid">
            <img src={img('/images/battlebot.jpg')} alt="Beetleweight battlebot physical" loading="lazy" />
            <img src={img('/images/battlebot iso topside.png')} alt="Battlebot CAD view 1" loading="lazy" />
            <img src={img('/images/battlebot iso underside.png')} alt="Battlebot CAD view 2" loading="lazy" />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Gallery images={gallery} />
      </ScrollReveal>
    </DetailPage>
  )
}
