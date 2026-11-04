import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import img from '../img'

const links = [
  { to: '/industry', label: 'Industry & Research' },
  { to: '/baja', label: 'Baja' },
  { to: '/team', label: 'Team' },
  { to: '/personal', label: 'Personal' },
  { to: '/skills', label: 'Skills' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = e => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand">Retvin Pant</NavLink>
        <nav aria-label="Main">
          <ul className="navbar-links">
            {links.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} className={({ isActive }) => isActive ? 'active' : ''}>{l.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <a href={img('/resume.pdf')} download="Resume_Retvin_Pant.pdf" className="btn btn-primary btn-small navbar-cta">Resume</a>
        <button
          className="navbar-menu"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      <nav id="mobile-menu" className={`navbar-mobile${open ? ' open' : ''}`} aria-label="Main, mobile" hidden={!open}>
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        {links.map(l => (
          <NavLink key={l.to} to={l.to} className={({ isActive }) => isActive ? 'active' : ''}>{l.label}</NavLink>
        ))}
        <a href={img('/resume.pdf')} download="Resume_Retvin_Pant.pdf">Resume</a>
      </nav>
    </header>
  )
}
