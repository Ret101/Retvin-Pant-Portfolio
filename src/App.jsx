import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import IndustryExperience from './pages/IndustryExperience'
import TeamProjects from './pages/TeamProjects'
import PersonalProjects from './pages/PersonalProjects'
import Skills from './pages/Skills'
import SwarmHeatedBed from './pages/projects/SwarmHeatedBed'
import SwarmExtruder from './pages/projects/SwarmExtruder'
import SpringSteelWheel from './pages/projects/SpringSteelWheel'
import CandySorter from './pages/projects/CandySorter'
import LonghornBaja from './pages/projects/LonghornBaja'
import BajaMasterSketch from './pages/projects/BajaMasterSketch'
import BajaControlArms from './pages/projects/BajaControlArms'
import BajaRearHubs from './pages/projects/BajaRearHubs'
import BajaFrontHubs from './pages/projects/BajaFrontHubs'
import Guadaloop from './pages/projects/Guadaloop'
import RoboticsRoadcase from './pages/projects/RoboticsRoadcase'
import FRCRobots from './pages/projects/FRCRobots'
import FRCRooty from './pages/projects/FRCRooty'
import FRCRingo from './pages/projects/FRCRingo'
import FRCBrownout from './pages/projects/FRCBrownout'
import FRCAdditional from './pages/projects/FRCAdditional'
import ElectricSkateboard from './pages/projects/ElectricSkateboard'
import Beetleweight from './pages/projects/Beetleweight'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function PT({ children }) {
  return <PageTransition>{children}</PageTransition>
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
        <Route path="/team"                       element={<PT><TeamProjects /></PT>} />
        <Route path="/team/longhorn-baja"                    element={<PT><LonghornBaja /></PT>} />
        <Route path="/team/longhorn-baja/master-sketch"    element={<PT><BajaMasterSketch /></PT>} />
        <Route path="/team/longhorn-baja/control-arms"     element={<PT><BajaControlArms /></PT>} />
        <Route path="/team/longhorn-baja/rear-hubs"        element={<PT><BajaRearHubs /></PT>} />
        <Route path="/team/longhorn-baja/front-hubs"       element={<PT><BajaFrontHubs /></PT>} />
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
