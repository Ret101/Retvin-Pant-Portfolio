import { useState, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'
import img from '../img'

export const slides = [
  { src: '/images/home/hero-185.webp', position: 'center 58%', label: 'Longhorn Baja Racing, car 185', to: '/baja' },
  { src: '/images/home/bg-wheel.webp', label: 'NASA spring steel wheel prototype', to: '/industry/spring-steel-wheel' },
  { src: '/images/home/bg-rear-hub.webp', label: 'Baja rear hub, machined', to: '/baja/rear-hubs' },
  { src: '/images/home/bg-candy-sorter.webp', label: 'Automated candy sorter, SPARX', to: '/industry/candy-sorter' },
  { src: '/images/home/bg-trailing-arms.webp', position: 'center 65%', label: 'Baja rear trailing arms', to: '/baja/control-arms' },
  { src: '/images/home/bg-brownout.webp', label: 'Brownout, FRC 2024', to: '/team/frc-robots/brownout' },
  { src: '/images/home/bg-battlebot.webp', label: 'Beetleweight battlebot, 3-2-0', to: '/personal/beetleweight' },
  { src: '/images/home/bg-skateboard.webp', label: 'Electric skateboard, 12 mph', to: '/personal/electric-skateboard' },
]

// Project photos crossfading behind the first screen. Holds still for reduced motion
// and pauses while the tab is hidden so it never jumps several slides at once.
export function useSlide(interval = 5000) {
  const reduce = useReducedMotion()
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const onVis = () => setPaused(document.hidden)
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  useEffect(() => {
    if (reduce || paused) return
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), interval)
    return () => clearInterval(t)
  }, [reduce, paused, interval])

  return [current, setCurrent]
}

export default function HeroBackdrop({ current }) {
  return (
    <div className="hero-backdrop" aria-hidden="true">
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`hero-backdrop-slide${i === current ? ' is-on' : ''}`}
          style={{ backgroundImage: `url('${img(s.src)}')`, backgroundPosition: s.position || 'center' }}
        />
      ))}
    </div>
  )
}
