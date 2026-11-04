import { useEffect, useRef } from 'react'

// Shared safety net: anything still waiting that sits at or above the bottom of the screen is shown,
// so a fling, the End key or a jump from the contents list never leaves a block invisible.
let netInstalled = false
function revealPassed() {
  document.querySelectorAll('.reveal-pending').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.remove('reveal-pending')
      el.classList.add('revealed')
    }
  })
}
export function installNet() {
  if (netInstalled) return
  netInstalled = true
  let queued = false
  const onScroll = () => {
    if (queued) return
    queued = true
    requestAnimationFrame(() => { queued = false; revealPassed() })
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
}

// Content is visible by default; the hidden starting state only exists in CSS
// under prefers-reduced-motion: no-preference, once JS has marked the element.
export default function ScrollReveal({ children, delay = 0, className = '', style }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.height > window.innerHeight) return // taller than the screen: just be there
    if (rect.top < window.innerHeight * 0.9) { el.classList.add('revealed'); return } // on screen at load
    el.classList.add('reveal-pending')
    installNet()
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('reveal-pending')
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal${delay ? ` reveal-delay-${Math.min(delay, 4)}` : ''}${className ? ` ${className}` : ''}`}
      style={style}
    >
      {children}
    </div>
  )
}
