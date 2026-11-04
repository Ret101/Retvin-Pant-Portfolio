import { motion, useReducedMotion } from 'framer-motion'

// New pages fade up quickly; the old page leaves at once, so a click never waits on an exit animation
export default function PageTransition({ children }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 8 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.23, 1, 0.32, 1] } }}
    >
      {children}
    </motion.div>
  )
}
