import { motion } from 'framer-motion'
import Parallax from './Parallax'

export default function ProjectCard({ title, tags = [], image, link }) {
  return (
    <Parallax strength={20} className="group">
      <motion.a
        href={link}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileHover={{ scale: 1.02 }}
        className="block overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 border border-white/10 shadow-[0_20px_80px_-20px_rgba(168,85,247,0.35)]"
      >
        <div className="relative aspect-[16/10]">
          <img src={image} alt="project" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="px-2 py-1 text-xs rounded-full bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-400/20">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.a>
    </Parallax>
  )
}
