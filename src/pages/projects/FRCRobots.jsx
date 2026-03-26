import { Link } from 'react-router-dom'
import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import Gallery from '../../components/Gallery'

const robots = [
  {
    title: 'Rooty',
    year: '2023',
    image: '/images/rooty frc robot.jpg',
    description: '6-subsystem robot capable of scoring at all positions. Features a 1-DOF arm, cone intake, cube shooter, and carbon fiber big stick.',
    to: '/team/frc-robots/rooty',
  },
  {
    title: 'Ringo',
    year: '2024',
    image: '/images/ringo full assembly iso.png',
    description: 'Combined shooter-intake with crankshaft angle control and a fast amp-scoring arm. Designed for the 2024 Crescendo game.',
    to: '/team/frc-robots/ringo',
  },
  {
    title: 'Brownout',
    year: '2024',
    image: '/images/brownout robot frc.jpg',
    description: 'Full redesign with under-bumper intake, variable-angle shooter, climbing mechanism, and far-side field scoring capability.',
    to: '/team/frc-robots/brownout',
  },
  {
    title: 'Additional Designs',
    year: '2023–2024',
    image: '/images/additional robot design.png',
    description: 'Additional robot concepts and designs developed during the 2023–2024 seasons for specific game scenarios and offseason events.',
    to: '/team/frc-robots/additional',
  },
]

const gallery = [
  { src: '/images/rooty frc robot.jpg', alt: 'Rooty 2023' },
  { src: '/images/rooty full assembly.png', alt: 'Rooty CAD' },
  { src: '/images/ringo full assembly iso.png', alt: 'Ringo 2024' },
  { src: '/images/ringo iso back.png', alt: 'Ringo CAD back' },
  { src: '/images/brownout robot frc.jpg', alt: 'Brownout 2024' },
  { src: '/images/brownout robot in action frc.jpg', alt: 'Brownout in action' },
  { src: '/images/brownout iso front.png', alt: 'Brownout CAD front' },
  { src: '/images/brownout frc robot iso back.png', alt: 'Brownout CAD back' },
]

export default function FRCRobots() {
  return (
    <DetailPage
      backTo="/team"
      backLabel="Team Projects"
      tag="FRC Team 5414 · 2023–2024"
      title="FRC Robots (Team 5414)"
      heroImage="/images/brownout robot frc.jpg"
      software={['Onshape CAD', 'Prototyping', '3D Printing', 'CNC Router', 'Shop Tools', 'Presentation Skills']}
      roles={['Technical Team Captain', 'Mechanical Designer', 'Fabrication Lead', 'Pit Boss']}
    >
      <ScrollReveal>
        <div className="project-section">
          <h3>Introduction</h3>
          <p>
            Three competition robots designed and built across the 2023–2024 FRC seasons as Technical
            Team Captain for Team 5414. Each robot targeted a specific game's objectives with full
            mechanical ownership from concept through competition.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Robots</h3>
        </div>
      </ScrollReveal>

      <div className="frc-robots-grid">
        {robots.map((robot, i) => (
          <ScrollReveal key={robot.title} delay={(i % 3) + 1}>
            <Link to={robot.to} className="frc-robot-card">
              <div className="frc-robot-card-img-wrap">
                <img src={robot.image} alt={robot.title} loading="lazy" />
              </div>
              <div className="frc-robot-card-body">
                <div className="frc-robot-card-header">
                  <span className="frc-robot-card-year">{robot.year}</span>
                  <span className="frc-robot-card-title">"{robot.title}"</span>
                </div>
                <p className="frc-robot-card-desc">{robot.description}</p>
                <span className="frc-robot-card-cta">View Robot →</span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <Gallery images={gallery} />
      </ScrollReveal>
    </DetailPage>
  )
}
