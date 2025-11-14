import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

export default function MagneticButton({ children, className = '', onClick }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX * 0.25)
    y.set(relY * 0.25)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const shadow = useMotionTemplate`0px 0px 30px rgba(217,70,239,0.5)`

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ translateX: x, translateY: y, boxShadow: shadow }}
      className={`relative overflow-hidden rounded-full px-6 py-3 font-semibold tracking-wide bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 text-white hover:from-fuchsia-500 hover:to-indigo-500 transition-colors ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.25),transparent_35%)]"></span>
    </motion.button>
  )
}
