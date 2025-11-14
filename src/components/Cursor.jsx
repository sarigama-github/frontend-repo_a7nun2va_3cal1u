import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  // Hide on touch devices
  useEffect(() => {
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (hasTouch) return
  }, [])

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const smoothX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.3 })
  const smoothY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.3 })

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{ translateX: smoothX, translateY: smoothY }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-fuchsia-500 mix-blend-screen blur-[1px] shadow-[0_0_40px_10px_rgba(217,70,239,0.55)]"></div>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
        style={{ translateX: smoothX, translateY: smoothY }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 blur-[2px]"></div>
      </motion.div>
    </>
  )
}
