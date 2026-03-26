import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: 'https://static.wixstatic.com/media/073043_1e7818860b8949b599957787a82ad5c8~mv2.jpg',
    label: 'Spring Steel Wheel',
    category: 'NASA Johnson Space Center',
    to: '/industry/spring-steel-wheel',
  },
  {
    image: 'https://static.wixstatic.com/media/073043_2eabe9911dd4498b8c723ee82c782132~mv2.jpg',
    label: 'Automated Candy Sorter',
    category: 'SPARX Engineering',
    to: '/industry/candy-sorter',
  },
  {
    image: 'https://static.wixstatic.com/media/073043_7e1ec8079fb54049805ad4698e433898~mv2.png',
    label: 'SAE Longhorn Baja 25\'–26\'',
    category: 'SAE Longhorn Baja',
    to: '/team/longhorn-baja',
  },
  {
    image: 'https://static.wixstatic.com/media/073043_f3131d7913384fcab4ad539c609c5aed~mv2.png',
    label: 'Swarm Manufacturing Heated Bed',
    category: 'UT SiDi Lab',
    to: '/industry/swarm-heated-bed',
  },
  {
    image: 'https://static.wixstatic.com/media/073043_73690987c8d04c3d8ae577eb1a0bc7b4~mv2.jpg',
    label: 'Beetleweight Battlebot',
    category: 'Texas Roborumble',
    to: '/personal/beetleweight',
  },
  {
    image: 'https://static.wixstatic.com/media/073043_7ec1b64de4674769831347f6e83a0363~mv2.png',
    label: 'Guadaloop Hyperloop Pod',
    category: 'Texas Guadaloop',
    to: '/team/guadaloop',
  },
  {
    image: 'https://static.wixstatic.com/media/073043_d6f8715df62c4f43ab9e30c6490897fa~mv2.png',
    label: 'Electric Skateboard',
    category: 'Personal Project',
    to: '/personal/electric-skateboard',
  },
]

export default function ProjectSlideshow() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 4500)
    return () => clearInterval(t)
  }, [paused, next])

  return (
    <div
      className="slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="slideshow-track">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`slideshow-slide${i === current ? ' active' : ''}`}
          >
            <div
              className="slideshow-blur-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <img src={slide.image} alt={slide.label} loading="lazy" />
            <div className="slideshow-overlay" />
            <div className="slideshow-caption">
              <span className="slideshow-caption-category">{slide.category}</span>
              <span className="slideshow-caption-label">{slide.label}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="slideshow-arrow slideshow-arrow-left" onClick={prev} aria-label="Previous">
        ‹
      </button>
      <button className="slideshow-arrow slideshow-arrow-right" onClick={next} aria-label="Next">
        ›
      </button>

      <div className="slideshow-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`slideshow-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <Link to={slides[current].to} className="slideshow-cta">
        View Project →
      </Link>
    </div>
  )
}
