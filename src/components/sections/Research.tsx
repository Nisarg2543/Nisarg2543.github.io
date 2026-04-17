import { motion } from 'framer-motion'
import { FlaskConical, BookOpen, Clock } from 'lucide-react'

type ResearchStatus = 'ongoing' | 'complete'

const ongoing: { title: string; venue: string; note: string; year: string; status: ResearchStatus }[] = [
  {
    title: 'Multiphysics modelling of Nitric Oxide diffusion and release in MOF-loaded polymer catheters',
    venue: "Queen's University Belfast · in progress",
    note: 'With University of St Andrews · FEBio · Bayesian optimisation · experimental validation',
    year: '2023–now',
    status: 'ongoing',
  },
]

const academic: { title: string; venue: string; note: string; year: string; status: ResearchStatus }[] = [
  {
    title: 'Flow analysis of a micromixer in liquid flow cell for TEM-based study',
    venue: 'MSc Design Project · University of Leeds',
    note: 'COMSOL Multiphysics · CFD · geometry optimisation · 145% mixing improvement',
    year: '2022',
    status: 'complete',
  },
  {
    title: 'Analytical and FEA validation of a 12/8 Bearing-less Switched Reluctance Motor',
    venue: 'Engineering Internship · IIT Guwahati',
    note: 'Ansoft Maxwell · Maxwell Stress Tensor · IEC/ISO test rig · 0.75 kW prototype',
    year: '2024',
    status: 'complete',
  },
  {
    title: 'Identification of two-phase flow regimes using acoustic emission sensors',
    venue: 'BTech Final Year Project · SVNIT, India',
    note: 'SVM & CNN classification · COMSOL · Python · acoustic signal processing',
    year: '2021',
    status: 'complete',
  },
]

const fadeItem = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function ResearchCard({ title, venue, note, year, status }: { title: string; venue: string; note: string; year: string; status: 'ongoing' | 'complete' }) {
  return (
    <motion.div
      variants={fadeItem}
      className="card-glass p-5 rounded-2xl flex gap-5 items-start hover:bg-white/[0.05] transition-colors duration-200 group"
    >
      <div className="flex-shrink-0 mt-0.5">
        <span className={`inline-flex items-center gap-1 text-[10px] font-medium px-2.5 py-1 rounded-full border ${
          status === 'ongoing'
            ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400'
            : 'bg-indigo-500/10 border-indigo-500/25 text-indigo-400'
        }`}>
          {status === 'ongoing' ? <Clock size={9} /> : <BookOpen size={9} />}
          {year}
        </span>
      </div>
      <div>
        <h3 className="text-sm font-medium text-white/85 leading-snug mb-1">{title}</h3>
        <p className="text-xs text-white/58 mb-1">{venue}</p>
        <p className="text-xs text-white/45 italic">{note}</p>
      </div>
    </motion.div>
  )
}

export default function Research() {
  return (
    <div className="py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        variants={fadeItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-16"
      >
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-amber-400/80 mb-3">Research</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white/90">
          Research &{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-rose-300">
            Academic Work
          </span>
        </h2>
        <p className="text-sm text-white/55 max-w-xl mt-4 leading-relaxed">
          Ongoing work, academic design projects, and internship research outputs.
          Simulation data and project documentation available on request.
        </p>
      </motion.div>

      <div className="space-y-10">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <FlaskConical size={13} className="text-emerald-400/70" />
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/35">Ongoing Research</p>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-3"
          >
            {ongoing.map(r => <ResearchCard key={r.title} {...r} />)}
          </motion.div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-5">
            <BookOpen size={13} className="text-indigo-400/70" />
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/35">Academic Design Projects</p>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-3"
          >
            {academic.map(r => <ResearchCard key={r.title} {...r} />)}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
