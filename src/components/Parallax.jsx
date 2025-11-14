import { useEffect, useRef } from 'react'

export default function Parallax({ strength = 30, className = '', children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handle = (e) => {
      const rect = el.getBoundingClientRect()
      const relX = (e.clientX - rect.left) / rect.width - 0.5
      const relY = (e.clientY - rect.top) / rect.height - 0.5
      const moveX = -relX * strength
      const moveY = -relY * strength
      el.style.setProperty('--parallax-x', `${moveX}px`)
      el.style.setProperty('--parallax-y', `${moveY}px`)
    }

    el.addEventListener('mousemove', handle)
    return () => el.removeEventListener('mousemove', handle)
  }, [strength])

  return (
    <div ref={ref} className={`relative [--parallax-x:0px] [--parallax-y:0px] ${className}`}>
      <div style={{ transform: `translate(var(--parallax-x), var(--parallax-y))` }}>
        {children}
      </div>
    </div>
  )
}
