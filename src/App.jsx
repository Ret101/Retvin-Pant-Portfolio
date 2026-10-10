import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
const IndustryExperience = lazy(() => import('./pages/IndustryExperience'))
const TeamProjects = lazy(() => import('./pages/TeamProjects'))
const PersonalProjects = lazy(() => import('./pages/PersonalProjects'))
const Skills = lazy(() => import('./pages/Skills'))
const SwarmHeatedBed = lazy(() => import('./pages/projects/SwarmHeatedBed'))
const SwarmExtruder = lazy(() => import('./pages/projects/SwarmExtruder'))
const SpringSteelWheel = lazy(() => import('./pages/projects/SpringSteelWheel'))
const Daikin = lazy(() => import('./pages/projects/Daikin'))
const CandySorter = lazy(() => import('./pages/projects/CandySorter'))
const LonghornBaja = lazy(() => import('./pages/projects/LonghornBaja'))
const BajaMasterSketch = lazy(() => import('./pages/projects/BajaMasterSketch'))
const BajaControlArms = lazy(() => import('./pages/projects/BajaControlArms'))
const BajaRearHubs = lazy(() => import('./pages/projects/BajaRearHubs'))
const BajaFrontHubs = lazy(() => import('./pages/projects/BajaFrontHubs'))
const BajaGallery = lazy(() => import('./pages/projects/BajaGallery'))
const BajaCVAxles = lazy(() => import('./pages/projects/BajaCVAxles'))
const Guadaloop = lazy(() => import('./pages/projects/Guadaloop'))
const RoboticsRoadcase = lazy(() => import('./pages/projects/RoboticsRoadcase'))
const FRCRobots = lazy(() => import('./pages/projects/FRCRobots'))
const FRCRooty = lazy(() => import('./pages/projects/FRCRooty'))
const FRCRingo = lazy(() => import('./pages/projects/FRCRingo'))
const FRCBrownout = lazy(() => import('./pages/projects/FRCBrownout'))
const FRCAdditional = lazy(() => import('./pages/projects/FRCAdditional'))
const ElectricSkateboard = lazy(() => import('./pages/projects/ElectricSkateboard'))
const Beetleweight = lazy(() => import('./pages/projects/Beetleweight'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// Pages other than Home are lazy-loaded; Suspense sits inside the transition so animations still run
function PT({ children }) {
  return <PageTransition><Suspense fallback={null}>{children}</Suspense></PageTransition>
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
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
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </>
  )
}
