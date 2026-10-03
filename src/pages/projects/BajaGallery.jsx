import { Link } from 'react-router-dom'
import ScrollReveal from '../../components/ScrollReveal'
import Gallery from '../../components/Gallery'
import img from '../../img'
import photos from '../../data/bajaGallery.json'

const seasonPhotos = photos.map(p => ({
  src: img(`/images/baja-gallery/${p.file}`),
  thumb: img(`/images/baja-gallery/thumbs/${p.file}`),
  w: p.w,
  h: p.h,
  alt: 'Longhorn Baja Racing 2025–2026 season',
}))

// Shop and build photos from the subsystem pages
const buildPhotos = [
  { src: img('/images/baja sae hero image.jpeg'), alt: 'Car 185 airborne over a dirt jump' },
  { src: img('/images/Front Control Arms.jpeg'), alt: 'Fabricated front lower control arm' },
  { src: img('/images/Trailing Arm Images/WhatsApp Image 2026-10-03 at 5.46.39 PM (6).jpeg'), alt: 'Rear trailing arms installed' },
  { src: img('/images/Trailing Arm Images/WhatsApp Image 2026-10-03 at 5.46.39 PM (3).jpeg'), alt: 'Rear trailing arm with LBR plate' },
  { src: img('/images/Trailing Arm Images/WhatsApp Image 2026-10-03 at 5.46.39 PM (4).jpeg'), alt: 'Trailing arm, axle, and toe link' },
  { src: img('/images/Trailing Arm Images/WhatsApp Image 2026-10-03 at 5.46.39 PM (5).jpeg'), alt: 'Axle and toe links close-up' },
  { src: img('/images/Hub stackup image.jpeg'), alt: 'Rear hub and rotor stackup' },
  { src: img('/images/CV Axle Modification.jpeg'), alt: 'Extended CV axles with welded sleeves' },
  { src: img('/images/CV Axle Mod sketch.jpeg'), alt: 'CV axle sleeve sketch' },
]

// Design and analysis images from the season
const designPhotos = [
  { src: img('/images/Car render 25-26 clear background.png'), alt: '25-26 competition car render' },
  { src: img('/images/Car Render.webp'), alt: 'Car render' },
  { src: img('/images/Front Control Arm Render.png'), alt: 'Front control arm render' },
  { src: img('/images/Rear Control Arm Render.png'), alt: 'Rear control arm render' },
  { src: img('/images/Front Hub.png'), alt: 'Front hub CAD' },
  { src: img('/images/Lotus Full Car Suspension Hardpoint Verification.png'), alt: 'Lotus Shark full car hardpoint verification' },
  { src: img('/images/Camber Graph.png'), alt: 'Camber curve from Lotus Shark' },
  { src: img('/images/Bending stiffness vs area.png'), alt: 'Bending stiffness vs area' },
  { src: img('/images/bending strength vs area graph.png'), alt: 'Bending strength vs area' },
  { src: img('/images/car mastersketch v3.png'), alt: 'Master sketch V3' },
  { src: img('/images/car mastersketch v2.png'), alt: 'Master sketch V2' },
  { src: img('/images/Baja Mastersketch v1.png'), alt: 'Master sketch V1' },
  { src: img('/images/Front Control Arms.png'), alt: 'Front control arms CAD' },
  { src: img('/images/Rear Control Arms.png'), alt: 'Rear control arms CAD' },
  { src: img('/images/Rear Hub.png'), alt: 'Rear hub CAD' },
  { src: img('/images/rear hub machined image.jpg'), alt: 'Rear hub machined part' },
  { src: img('/images/rear hub manufacturing.jpg'), alt: 'Rear hub manufacturing' },
  { src: img('/images/lotusimage.png'), alt: 'Lotus Shark kinematics view 1' },
  { src: img('/images/imagelotus2.png'), alt: 'Lotus Shark kinematics view 2' },
]

const images = [...seasonPhotos, ...buildPhotos, ...designPhotos]

export default function BajaGallery() {
  return (
    <div className="page-wrapper">
      <div className="cinematic-header">
        <div className="cinematic-header-bg" style={{ backgroundImage: `url('${img('/images/baja-gallery/DSC05988.webp')}')`, backgroundPosition: 'center 40%', filter: 'brightness(0.6)' }} />
        <div className="cinematic-header-overlay" />
        <div className="container cinematic-header-content">
          <div className="cinematic-header-meta">
            <span className="cinematic-header-tag">Longhorn Baja Racing · 2025–2026</span>
          </div>
          <h1 className="cinematic-header-title">Season Gallery</h1>
        </div>
      </div>

      <section className="projects-section">
        <div className="container">
          <ScrollReveal>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 8, maxWidth: 640, fontSize: '0.95rem', lineHeight: 1.75 }}>
              Shop nights, testing days, and the people who built our first car. Click any photo to view it full size.
            </p>
            <p style={{ marginBottom: 0 }}>
              <Link to="/baja" style={{ color: 'var(--accent-light)', fontSize: '0.9rem' }}>← Back to Longhorn Baja</Link>
            </p>
          </ScrollReveal>

          <Gallery images={images} title={`${images.length} Photos`} />
        </div>
      </section>
    </div>
  )
}
