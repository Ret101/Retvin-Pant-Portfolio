import { useState, useEffect, useCallback } from 'react'

function Lightbox({ images, index, onClose }) {
  const [current, setCurrent] = useState(index)

  const prev = useCallback(() => setCurrent(c => (c - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent(c => (c + 1) % images.length), [images.length])

  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  return (
    <div className="lightbox">
      <div className="lightbox-backdrop" onClick={onClose} />
      <button className="lightbox-close" onClick={onClose} aria-label="Close">×</button>
      <button className="lightbox-arrow lightbox-prev" onClick={prev} aria-label="Previous">‹</button>
      <img
        src={images[current].src}
        alt={images[current].alt}
        className="lightbox-img"
      />
      <button className="lightbox-arrow lightbox-next" onClick={next} aria-label="Next">›</button>
      <div className="lightbox-counter">{current + 1} / {images.length}</div>
    </div>
  )
}

export default function Gallery({ images, title = 'Project Gallery' }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  if (!images || images.length === 0) return null

  return (
    <div className="gallery-section">
      <h3 className="gallery-title">{title}</h3>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => setLightboxIndex(i)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setLightboxIndex(i)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-item-overlay" />
          </div>
        ))}
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  )
}
