import { useState, useEffect } from 'react'

const slides = [
  { src: '/images/spring steel wheel.jpg', label: 'NASA Spring Steel Wheel Prototype', sub: 'NASA JSC Internship · Summer 2024' },
  { src: '/images/brownout robot frc.jpg', label: 'Brownout', sub: 'FRC Competition Robot · 2024' },
  { src: '/images/sweetsifter.jpg', label: 'Automated Candy Sorter', sub: 'SPARX Engineering Internship' },
  { src: '/images/battlebot.jpg', label: 'Beetleweight Battlebot', sub: 'Texas Roborumble · 3-2-0' },
  { src: '/images/car mastersketch v2.png', label: 'Longhorn Baja', sub: 'SAE Baja · Co-Captain' },
  { src: '/images/guad pod.png', label: 'Guadaloop Hyperloop', sub: 'Texas Guadaloop · Vehicle Dynamics' },
  { src: '/images/skateboard horizontal.jpg', label: 'Electric Skateboard', sub: 'Personal Project · 12 mph · ~$250' },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="hero-carousel">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-carousel-slide${i === current ? ' active' : ''}`}
          style={{ backgroundImage: `url('${slide.src}')` }}
        />
      ))}
      <div className="hero-carousel-gradient" />

      {/* Label overlay */}
      <div className="hero-carousel-label-wrap">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`hero-carousel-label${i === current ? ' active' : ''}`}
          >
            <span className="hero-carousel-label-sub">{slide.sub}</span>
            <span className="hero-carousel-label-title">{slide.label}</span>
          </div>
        ))}
      </div>

      <div className="hero-carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-carousel-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
