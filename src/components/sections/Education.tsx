import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const education = [
  {
    degree: 'M.Sc. Advanced Mechanical Engineering',
    institution: 'University of Leeds, United Kingdom',
    period: '2021 – 2022',
    description: 'Advanced Finite Element Analysis, Engineering Computational Methods, CFD, Tribology and Surface Engineering, Team Design Project.',
    project: 'Flow analysis of a micromixer in liquid flow cell for TEM-based study.',
    tags: ['FEA', 'CFD', 'Tribology', 'Computational Methods'],
    color: 'from-indigo-500/12',
    accent: 'text-indigo-400',
  },
  {
    degree: 'B.Tech. Mechanical Engineering',
    institution: 'Sardar Vallabhbhai National Institute of Technology (SVNIT), India',
    period: '2017 – 2021',
    description: 'Plastics & Ceramics, Basic Mechanical Systems, Plant Layout and Material Handling, Advanced Refrigeration & Air Conditioning, Theory and Design of Cryogenic Systems.',
    project: 'Identification of two-phase flow using acoustic emission sensor.',
    tags: ['Thermodynamics', 'Materials', 'Cryogenics', 'Refrigeration'],
    color: 'from-violet-500/12',
    accent: 'text-violet-400',
  },
]

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

export default function Education() {
  return (
    <div className="py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-16"
      >
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-violet-400/80 mb-3">Education</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white/90">
          Academic{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-indigo-300">
            Background
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="space-y-5"
      >
        {education.map((edu) => (
          <motion.div
            key={edu.degree}
            variants={item}
            className={`card-glass bg-gradient-to-br ${edu.color} to-transparent p-7 rounded-2xl hover:bg-white/[0.05] transition-all duration-300`}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.10] flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={18} className="text-white/50" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white/90">{edu.degree}</h3>
                  <p className={`text-sm mt-0.5 ${edu.accent}`}>{edu.institution}</p>
                </div>
              </div>
              <span className="text-xs text-white/35 bg-white/[0.05] border border-white/[0.08] px-3 py-1 rounded-full">
                {edu.period}
              </span>
            </div>

            <p className="text-sm text-white/45 leading-relaxed mb-2 ml-14">
              <span className="font-medium text-white/55">Coursework: </span>{edu.description}
            </p>
            <p className="text-sm text-white/38 leading-relaxed mb-5 ml-14">
              <span className="font-medium text-white/48">Design Project: </span>{edu.project}
            </p>

            <div className="flex flex-wrap gap-2 ml-14">
              {edu.tags.map(tag => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/45">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
