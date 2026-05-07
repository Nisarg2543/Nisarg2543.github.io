import { motion } from 'framer-motion'
import { ArrowDown, Mail, Github, Linkedin, Download, ArrowRight } from 'lucide-react'

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
})

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 text-center pt-24 pb-16">

      {/* Dot-grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,219,233,0.3) 1px, transparent 1px)',
          backgroundSize: '38px 38px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)',
        }}
      />

      {/* Profile image */}
      <motion.div
        variants={fadeUp(0.3)}
        initial="hidden"
        animate="visible"
        className="relative mb-8 group"
      >
        {/* Gradient glow ring */}
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-accent/30 via-secondary/20 to-transparent blur-md opacity-60 group-hover:opacity-90 transition duration-700" />
        {/* Border ring */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border border-border-subtle shadow-2xl">
          <img
            src="/nisarg.jpg"
            alt="Nisarg Makwana"
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        variants={fadeUp(0.45)}
        initial="hidden"
        animate="visible"
        className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight text-theme-main mb-4"
      >
        Nisarg Makwana
      </motion.h1>

      {/* Title + divider */}
      <motion.div
        variants={fadeUp(0.58)}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center mb-8"
      >
        <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-theme-muted mb-3">
          FEA · CFD · Design Engineer
        </p>
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />
      </motion.div>

      {/* Bio */}
      <motion.p
        variants={fadeUp(0.7)}
        initial="hidden"
        animate="visible"
        className="text-base text-theme-faint max-w-lg leading-relaxed font-light mb-10"
      >
        MSc Advanced Mechanical Engineering (Leeds) — specialising in multiphysics simulation,
        finite element analysis, CFD, and design optimisation for biomedical and industrial systems.
      </motion.p>

      {/* CTAs */}
      <motion.div
        variants={fadeUp(0.85)}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-3 justify-center mb-10"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: 'rgba(0,219,233,0.1)',
            border: '1px solid rgba(0,219,233,0.3)',
            color: 'var(--accent-primary)',
            boxShadow: '0 0 20px rgba(0,219,233,0.12)',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.boxShadow =
              '0 0 30px rgba(0,219,233,0.25)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.boxShadow =
              '0 0 20px rgba(0,219,233,0.12)'
          }}
        >
          Initiate Contact
          <ArrowRight size={13} />
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-semibold tracking-widest uppercase bg-surface border border-border-subtle text-theme-muted hover:text-theme-main hover:bg-surface-hover hover:-translate-y-0.5 transition-all duration-300"
        >
          Explore Archive
        </a>
        <a
          href="/Nisarg_Makwana_CV.pdf"
          download
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-semibold tracking-widest uppercase bg-surface border border-border-subtle text-theme-muted hover:text-theme-main hover:bg-surface-hover hover:-translate-y-0.5 transition-all duration-300"
        >
          <Download size={13} />
          Download CV
        </a>
      </motion.div>

      {/* Social links */}
      <motion.div
        variants={fadeUp(1.0)}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-5"
      >
        <a
          href="mailto:nisarg2543@gmail.com"
          className="text-theme-faint hover:text-accent transition-colors duration-200"
          aria-label="Email"
        >
          <Mail size={17} />
        </a>
        <a
          href="https://github.com/Nisarg2543"
          target="_blank"
          rel="noreferrer"
          className="text-theme-faint hover:text-accent transition-colors duration-200"
          aria-label="GitHub"
        >
          <Github size={17} />
        </a>
        <a
          href="https://www.linkedin.com/in/nisargmakwana/"
          target="_blank"
          rel="noreferrer"
          className="text-theme-faint hover:text-accent transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <Linkedin size={17} />
        </a>
        <span className="w-px h-4 bg-border-subtle" />
        <span className="text-[0.65rem] font-medium tracking-widest uppercase text-theme-faint">
          Belfast, UK · Global Talent Visa
        </span>
      </motion.div>

      {/* Floating Research Assistant badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute bottom-24 right-8 sm:right-16 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="card-glass px-4 py-3 shadow-xl"
        >
          <p className="text-xs font-semibold text-theme-main">Research Assistant</p>
          <p className="text-[10px] text-accent mt-0.5">Queen's University Belfast</p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-theme-faint" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-theme-base via-transparent to-theme-base/30 pointer-events-none" />
    </div>
  )
}
