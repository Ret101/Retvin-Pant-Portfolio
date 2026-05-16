import { useState, useEffect, useRef } from 'react'

const DEFAULT_INTERVAL = 4000

export default function DocSlider({ images, title, interval = DEFAULT_INTERVAL }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  if (!images || images.length === 0) return null

  const goTo = (i) => {
    setCurrent(i)
    setPaused(true)
  }
  const prev = () => goTo(Math.max(0, current - 1))
  const next = () => goTo((current + 1) % images.length)

  useEffect(() => {
    if (paused) {
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setPaused(false), 6000)
      return () => clearTimeout(timerRef.current)
    }
  }, [paused])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setCurrent(c => (c + 1) % images.length)
    }, interval)
    return () => clearInterval(id)
  }, [paused, images.length, interval])

  return (
    <div className="doc-slider">
      {title && <h3 className="doc-slider-title">{title}</h3>}
      <div className="doc-slider-frame">
        <button
          className="doc-slider-btn doc-slider-btn--prev"
          onClick={prev}
          aria-label="Previous page"
        >
          ‹
        </button>
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="doc-slider-img"
          loading="lazy"
        />
        <button
          className="doc-slider-btn doc-slider-btn--next"
          onClick={next}
          aria-label="Next page"
        >
          ›
        </button>
      </div>
      {images[current].caption && (
        <p className="doc-slider-caption">{images[current].caption}</p>
      )}
      <div className="doc-slider-counter">
        {images.map((_, i) => (
          <button
            key={i}
            className={`doc-slider-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Page ${i + 1}`}
          />
        ))}
        <span className="doc-slider-page">{current + 1} / {images.length}</span>
      </div>
    </div>
  )
}
