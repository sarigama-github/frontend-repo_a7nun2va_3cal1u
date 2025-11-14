import { motion } from 'framer-motion'

export default function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12 md:mb-16"
          >
            {subtitle && (
              <div className="text-sm uppercase tracking-[0.3em] text-fuchsia-400/80">{subtitle}</div>
            )}
            {title && (
              <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-white">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
