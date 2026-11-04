import { useState, useEffect, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { installNet } from './ScrollReveal'

export function Lightbox({ images, index, onClose }) {
  const [current, setCurrent] = useState(index)

  // Size the image box to the scaled picture itself, so the dark area around it is backdrop
  // and a click there closes the viewer. Small plots and drawings scale up to fill the screen.
  const [natural, setNatural] = useState(null)
  const [viewport, setViewport] = useState({ w: window.innerWidth, h: window.innerHeight })
  useEffect(() => {
    const onResize = () => setViewport({ w: window.innerWidth, h: window.innerHeight })
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  useEffect(() => { setNatural(null) }, [current])
  const narrow = viewport.w <= 640
  const maxW = viewport.w - (narrow ? 0 : 160)
  const maxH = viewport.h * (narrow ? 0.72 : 0.84)
  const scale = natural ? Math.min(maxW / natural.w, maxH / natural.h) : 1
  const fitted = natural ? { width: Math.round(natural.w * scale), height: Math.round(natural.h * scale) } : undefined

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

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
      <div className="lightbox-backdrop" onClick={onClose} />
      <button className="lightbox-close" onClick={onClose} aria-label="Close"><FiX aria-hidden="true" /></button>
      <button className="lightbox-arrow lightbox-prev" onClick={prev} aria-label="Previous photo"><FiChevronLeft aria-hidden="true" /></button>
      <img
        src={images[current].src}
        alt={images[current].alt}
        className="lightbox-img"
        style={fitted}
        onLoad={e => setNatural({ w: e.currentTarget.naturalWidth, h: e.currentTarget.naturalHeight })}
      />
      <button className="lightbox-arrow lightbox-next" onClick={next} aria-label="Next photo"><FiChevronRight aria-hidden="true" /></button>
      <div className="lightbox-counter">{current + 1} / {images.length}</div>
    </div>,
    document.body
  )
}

export default function Gallery({ images, title = 'Project Gallery' }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const gridRef = useRef(null)

  // Frames below the fold rise in as they arrive; frames already on screen are left alone
  useEffect(() => {
    const items = gridRef.current?.querySelectorAll('.gallery-item')
    if (!items) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        e.target.classList.remove('reveal-pending')
        e.target.classList.add('revealed')
        obs.unobserve(e.target)
      })
    }, { rootMargin: '0px 0px -5% 0px' })
    items.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) return
      el.classList.add('reveal-pending')
      obs.observe(el)
      installNet()
    })
    return () => obs.disconnect()
  }, [images])

  if (!images || images.length === 0) return null

  return (
    <div className="gallery-section">
      {title && <h3 className="gallery-title">{title}</h3>}
      <div className="gallery-grid" ref={gridRef}>
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => setLightboxIndex(i)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setLightboxIndex(i)}
          >
            <img src={img.thumb || img.src} alt={img.alt} width={img.w} height={img.h} loading="lazy" />
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
