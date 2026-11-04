import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

// The page's sections as one line with a station per section, from the requirement to the lessons.
// Sits in the detail page sidebar when there is one, otherwise floats at the right edge.
export default function StickyTOC({ sections }) {
  const [active, setActive] = useState(sections[0]?.id)
  const [slot, setSlot] = useState(null)

  useEffect(() => { setSlot(document.getElementById('toc-slot')) }, [])

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [sections])

  const activeIndex = Math.max(0, sections.findIndex(s => s.id === active))

  const nav = (
    <nav className={`sticky-toc${slot ? ' in-sidebar' : ''}`} aria-label="On this page">
      <h2 className="sticky-toc-label">On this page</h2>
      <ol className="sticky-toc-line" style={{ '--progress': sections.length > 1 ? activeIndex / (sections.length - 1) : 1 }}>
        {sections.map(({ id, label }, i) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`sticky-toc-item${active === id ? ' active' : ''}${i < activeIndex ? ' passed' : ''}`}
              aria-current={active === id ? 'location' : undefined}
              onClick={e => {
                e.preventDefault()
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )

  return slot ? createPortal(nav, slot) : nav
}
