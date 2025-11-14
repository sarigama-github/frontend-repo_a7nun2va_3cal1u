import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react'
import Cursor from './components/Cursor'
import Section from './components/Section'
import MagneticButton from './components/MagneticButton'
import ProjectCard from './components/ProjectCard'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

function useSmoothScroll() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]')
    const onClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      const id = href?.slice(1)
      const el = id ? document.getElementById(id) : null
      if (!el) return
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    links.forEach((l) => l.addEventListener('click', onClick))
    return () => links.forEach((l) => l.removeEventListener('click', onClick))
  }, [])
}

export default function App() {
  useSmoothScroll()

  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] text-white overflow-x-hidden">
      <Cursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/70 backdrop-blur-xl px-4 py-3">
          <a href="#" className="font-extrabold tracking-widest text-fuchsia-400">FLX</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-white/70 hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact"><MagneticButton>Let’s build <ArrowRight className="inline ml-2 h-4 w-4" /></MagneticButton></a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative h-[100svh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_60%_20%,rgba(139,92,246,0.15),transparent_60%)] pointer-events-none" />

      <div className="relative h-full mx-auto max-w-6xl px-6 flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95]"
          >
            Building immersive, performant web experiences.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-white/70"
          >
            Full‑stack developer blending 3D, motion, and robust engineering.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#projects"><MagneticButton>View Work</MagneticButton></a>
            <a href="#contact" className="group inline-flex items-center gap-2 text-fuchsia-300 hover:text-fuchsia-200 transition-colors">
              Contact <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
          <div className="mt-10 flex items-center gap-4 text-white/60">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white"><Github /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin /></a>
            <a href="#contact" className="hover:text-white"><Mail /></a>
            <a href="#" className="hover:text-white"><Download /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="about" subtitle="Who I am" title="Craft, code, and curiosity.">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white/70 leading-relaxed"
        >
          I design and build high‑impact web apps with a focus on performance, accessibility, and motion systems that feel alive. From complex backends to delightful frontends — I ship.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 shadow-[0_20px_80px_-20px_rgba(99,102,241,0.35)]"
        >
          <div className="grid grid-cols-2 gap-6 text-sm">
            <Stat label="Years" value="7+" />
            <Stat label="Projects" value="60+" />
            <Stat label="Clients" value="25+" />
            <Stat label="Stack" value="TS · React · Node · Python" />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-zinc-900/70 border border-white/10 p-5">
      <div className="text-3xl font-extrabold text-white">{value}</div>
      <div className="text-xs uppercase tracking-wider text-white/50">{label}</div>
    </div>
  )
}

function Skills() {
  const items = [
    'React', 'Next.js', 'TypeScript', 'Node', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'GraphQL', 'WebGL', 'Three.js', 'GSAP', 'Framer Motion', 'Tailwind', 'Docker', 'AWS'
  ]
  return (
    <Section id="skills" subtitle="Capabilities" title="Core skills & tools.">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((s) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-white/80 hover:text-white hover:bg-zinc-800/70 transition-colors"
          >
            {s}
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function Experience() {
  const items = [
    { role: 'Senior Full‑stack Engineer', company: 'Quantum Labs', period: '2022 — Present', points: ['Led complex web platforms', 'Scaled services to millions', 'Mentored teams'] },
    { role: 'Frontend Engineer', company: 'Neon Systems', period: '2020 — 2022', points: ['Built motion‑heavy UI', 'Design systems', 'Performance wins'] },
    { role: 'Full‑stack Developer', company: 'Freelance', period: '2017 — 2020', points: ['Launched 30+ projects', 'UX + engineering'] },
  ]
  return (
    <Section id="experience" subtitle="Journey" title="Selected experience.">
      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-fuchsia-400/60 via-fuchsia-400/20 to-transparent" />
        <div className="space-y-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative pl-12"
            >
              <span className="absolute left-0 top-2 w-3 h-3 rounded-full bg-fuchsia-400 shadow-[0_0_20px_4px_rgba(217,70,239,0.6)]" />
              <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-lg font-bold">{item.role} · {item.company}</div>
                  <div className="text-white/50 text-sm">{item.period}</div>
                </div>
                <ul className="mt-3 list-disc list-inside text-white/70">
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Projects() {
  const cards = [
    { title: 'Neon Commerce', tags: ['Next.js', 'Stripe', 'Prisma'], image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop', link: '#' },
    { title: 'Vision OS', tags: ['Three.js', 'WebGL', 'Shaders'], image: 'https://images.unsplash.com/photo-1751759196124-a0b55924a36d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwQ29tbWVyY2V8ZW58MHwwfHx8MTc2MzEwOTY3M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', link: '#' },
    { title: 'Pulse Analytics', tags: ['React', 'D3', 'FastAPI'], image: 'https://images.unsplash.com/photo-1751759196124-a0b55924a36d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwQ29tbWVyY2V8ZW58MHwwfHx8MTc2MzEwOTY3M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', link: '#' },
    { title: 'Nova Studio', tags: ['GSAP', 'Motion', 'CMS'], image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop', link: '#' },
  ]
  return (
    <Section id="projects" subtitle="Work" title="Highlighted projects.">
      <div className="grid md:grid-cols-2 gap-8">
        {cards.map((c) => (
          <ProjectCard key={c.title} {...c} />
        ))}
      </div>
    </Section>
  )
}

function Testimonials() {
  const items = [
    { quote: 'A rare blend of engineering excellence and design taste.', name: 'C. Rivera, CTO' },
    { quote: 'Transformed our product into a world‑class experience.', name: 'J. Patel, CEO' },
    { quote: 'Fast, reliable, and visionary. Our go‑to engineer.', name: 'A. Kim, Founder' },
  ]
  return (
    <Section id="testimonials" subtitle="Words" title="Client feedback.">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6"
          >
            <div className="text-white/80">“{t.quote}”</div>
            <div className="mt-4 text-sm text-white/50">{t.name}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" subtitle="Let’s talk" title="Have an idea?">
      <div className="grid md:grid-cols-2 gap-10">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8"
          onSubmit={(e) => { e.preventDefault(); alert('Message sent!') }}
        >
          <div className="grid grid-cols-1 gap-4">
            <Input placeholder="Your name" />
            <Input placeholder="Email" type="email" />
            <Textarea placeholder="Tell me about your project" rows={5} />
            <MagneticButton className="justify-center">Send</MagneticButton>
          </div>
        </motion.form>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-8"
        >
          <div className="text-white/70">Available for select opportunities. Based remotely. Open to collaborations that push the web forward.</div>
          <div className="mt-6 flex items-center gap-4 text-white/60">
            <a href="mailto:hello@example.com" className="hover:text-white"><Mail /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white"><Github /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin /></a>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

function Input(props) {
  return (
    <input {...props} className="w-full rounded-xl bg-zinc-950/60 border border-white/10 px-4 py-3 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
  )
}
function Textarea(props) {
  return (
    <textarea {...props} className="w-full rounded-xl bg-zinc-950/60 border border-white/10 px-4 py-3 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
  )
}

function Footer() {
  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between text-white/50 text-sm">
        <div>© {new Date().getFullYear()} FLX — All rights reserved.</div>
        <a href="#" className="hover:text-white">Back to top</a>
      </div>
    </footer>
  )
}
