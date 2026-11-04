import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useLayoutEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'

// Loaders for every lazy page, kept so they can be fetched ahead of the first click
const load = {}
const IndustryExperience = lazy(load.IndustryExperience = () => import('./pages/IndustryExperience'))
const TeamProjects = lazy(load.TeamProjects = () => import('./pages/TeamProjects'))
const PersonalProjects = lazy(load.PersonalProjects = () => import('./pages/PersonalProjects'))
const Skills = lazy(load.Skills = () => import('./pages/Skills'))
const SwarmHeatedBed = lazy(load.SwarmHeatedBed = () => import('./pages/projects/SwarmHeatedBed'))
const SwarmExtruder = lazy(load.SwarmExtruder = () => import('./pages/projects/SwarmExtruder'))
const SpringSteelWheel = lazy(load.SpringSteelWheel = () => import('./pages/projects/SpringSteelWheel'))
const Daikin = lazy(load.Daikin = () => import('./pages/projects/Daikin'))
const CandySorter = lazy(load.CandySorter = () => import('./pages/projects/CandySorter'))
const LonghornBaja = lazy(load.LonghornBaja = () => import('./pages/projects/LonghornBaja'))
const BajaMasterSketch = lazy(load.BajaMasterSketch = () => import('./pages/projects/BajaMasterSketch'))
const BajaControlArms = lazy(load.BajaControlArms = () => import('./pages/projects/BajaControlArms'))
const BajaRearHubs = lazy(load.BajaRearHubs = () => import('./pages/projects/BajaRearHubs'))
const BajaFrontHubs = lazy(load.BajaFrontHubs = () => import('./pages/projects/BajaFrontHubs'))
const BajaGallery = lazy(load.BajaGallery = () => import('./pages/projects/BajaGallery'))
const BajaCVAxles = lazy(load.BajaCVAxles = () => import('./pages/projects/BajaCVAxles'))
const Guadaloop = lazy(load.Guadaloop = () => import('./pages/projects/Guadaloop'))
const RoboticsRoadcase = lazy(load.RoboticsRoadcase = () => import('./pages/projects/RoboticsRoadcase'))
const FRCRobots = lazy(load.FRCRobots = () => import('./pages/projects/FRCRobots'))
const FRCRooty = lazy(load.FRCRooty = () => import('./pages/projects/FRCRooty'))
const FRCRingo = lazy(load.FRCRingo = () => import('./pages/projects/FRCRingo'))
const FRCBrownout = lazy(load.FRCBrownout = () => import('./pages/projects/FRCBrownout'))
const FRCAdditional = lazy(load.FRCAdditional = () => import('./pages/projects/FRCAdditional'))
const ElectricSkateboard = lazy(load.ElectricSkateboard = () => import('./pages/projects/ElectricSkateboard'))
const NotFound = lazy(load.NotFound = () => import('./pages/NotFound'))
const Beetleweight = lazy(load.Beetleweight = () => import('./pages/projects/Beetleweight'))

// Name the browser tab after the page's own heading once it has rendered (lazy pages arrive a beat later)
const SITE_TITLE = 'Retvin Pant — Mechanical Engineering Portfolio'
function PageTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname === '/') { document.title = SITE_TITLE; return }
    let tries = 0
    const id = setInterval(() => {
      const h1 = document.querySelector('main h1')
      if (h1 || ++tries > 40) {
        clearInterval(id)
        const name = h1?.textContent.replace(/\s+/g, ' ').trim()
        document.title = name ? `${name} | Retvin Pant` : SITE_TITLE
      }
    }, 50)
    return () => clearInterval(id)
  }, [pathname])
  return null
}

// Jump (never glide) to the top on a new page, before it paints; a #hash link scrolls to its target instead
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useLayoutEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

// After the first page settles, fetch the other pages' code in the background so clicks open instantly
function PreloadPages() {
  useEffect(() => {
    const idle = window.requestIdleCallback || (cb => setTimeout(cb, 1500))
    const id = idle(() => Object.values(load).forEach(fn => fn().catch(() => {})))
    return () => (window.cancelIdleCallback || clearTimeout)(id)
  }, [])
  return null
}

// Pages other than Home are lazy-loaded; while one loads, a quiet placeholder holds the screen
function PT({ children }) {
  return <Suspense fallback={<div className="page-loading" aria-busy="true" />}><PageTransition>{children}</PageTransition></Suspense>
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
      <Routes location={location} key={location.pathname}>
        <Route path="/"                           element={<PT><Home /></PT>} />
        <Route path="/industry"                   element={<PT><IndustryExperience /></PT>} />
        <Route path="/industry/swarm-heated-bed"  element={<PT><SwarmHeatedBed /></PT>} />
        <Route path="/industry/swarm-extruder"    element={<PT><SwarmExtruder /></PT>} />
        <Route path="/industry/spring-steel-wheel" element={<PT><SpringSteelWheel /></PT>} />
        <Route path="/industry/candy-sorter"      element={<PT><CandySorter /></PT>} />
        <Route path="/industry/daikin"            element={<PT><Daikin /></PT>} />
        <Route path="/baja"                        element={<PT><LonghornBaja /></PT>} />
        <Route path="/baja/master-sketch"          element={<PT><BajaMasterSketch /></PT>} />
        <Route path="/baja/control-arms"           element={<PT><BajaControlArms /></PT>} />
        <Route path="/baja/rear-hubs"              element={<PT><BajaRearHubs /></PT>} />
        <Route path="/baja/front-hubs"             element={<PT><BajaFrontHubs /></PT>} />
        <Route path="/baja/gallery"                element={<PT><BajaGallery /></PT>} />
        <Route path="/baja/cv-axles"               element={<PT><BajaCVAxles /></PT>} />
        <Route path="/team"                       element={<PT><TeamProjects /></PT>} />
        <Route path="/team/guadaloop"             element={<PT><Guadaloop /></PT>} />
        <Route path="/team/robotics-roadcase"     element={<PT><RoboticsRoadcase /></PT>} />
        <Route path="/team/frc-robots"            element={<PT><FRCRobots /></PT>} />
        <Route path="/team/frc-robots/rooty"     element={<PT><FRCRooty /></PT>} />
        <Route path="/team/frc-robots/ringo"     element={<PT><FRCRingo /></PT>} />
        <Route path="/team/frc-robots/brownout"   element={<PT><FRCBrownout /></PT>} />
        <Route path="/team/frc-robots/additional" element={<PT><FRCAdditional /></PT>} />
        <Route path="/personal"                   element={<PT><PersonalProjects /></PT>} />
        <Route path="/personal/electric-skateboard" element={<PT><ElectricSkateboard /></PT>} />
        <Route path="/personal/beetleweight"      element={<PT><Beetleweight /></PT>} />
        <Route path="/skills"                     element={<PT><Skills /></PT>} />
        <Route path="*"                           element={<PT><NotFound /></PT>} />
      </Routes>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <PreloadPages />
      <PageTitle />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </>
  )
}
