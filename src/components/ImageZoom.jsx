import { useState, useEffect } from 'react'
import { Lightbox } from './Gallery'

// Click (or Enter on) any figure image inside the container to open it full size.
// Skips images that are already links, gallery tiles or document-slider pages.
const SKIP = 'a img, .gallery-item img, .doc-slider img, .doc-card img, .frc-robot-card img, .project-nav img'

export default function ImageZoom({ containerRef, deps = [] }) {
  const [state, setState] = useState(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return
    const imgs = [...root.querySelectorAll('img')].filter(el => !el.matches(SKIP))
    const list = imgs.map(el => ({ src: el.currentSrc || el.src, alt: el.alt }))

    const open = i => setState({ images: list, index: i })
    const handlers = imgs.map((el, i) => {
      el.classList.add('zoomable')
      el.tabIndex = 0
      el.setAttribute('role', 'button')
      el.setAttribute('aria-label', `Enlarge image${el.alt ? `: ${el.alt}` : ''}`)
      const onClick = () => open(i)
      const onKey = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i) } }
      el.addEventListener('click', onClick)
      el.addEventListener('keydown', onKey)
      return () => { el.removeEventListener('click', onClick); el.removeEventListener('keydown', onKey) }
    })
    return () => handlers.forEach(off => off())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, ...deps])

  if (!state) return null
  return <Lightbox images={state.images} index={state.index} onClose={() => setState(null)} />
}
