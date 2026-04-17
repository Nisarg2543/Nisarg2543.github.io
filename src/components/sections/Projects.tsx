import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    emoji: '🧬',
    title: 'NO Diffusion in MOF-Loaded Catheters',
    description:
      'Multiphysics FE model simulating Nitric Oxide diffusion and release in Ni/Zn MOF-loaded polymer catheters. Includes four solutes, reaction kinetics, and boundary condition studies validated against experimental data from the University of St Andrews.',
    tags: ['FEBio', 'MATLAB', 'Diffusion Modelling', 'QUB'],
    metric: 'Bayesian-optimised release kinetics',
    color: 'from-indigo-500/10',
    accentColor: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/30',
  },
  {
    emoji: '⚙️',
    title: 'MecadiOptimizer',
    description:
      'Modular MATLAB Bayesian optimisation pipeline for FEBio diffusion simulations. Fully self-contained for GitHub deployment — automates FEB file editing, simulation runs, log import, and fitness evaluation with minimal user intervention.',
    tags: ['MATLAB', 'Bayesian Opt.', 'FEBio', 'Open Source'],
    metric: 'Fully automated sim pipeline',
    color: 'from-violet-500/10',
    accentColor: 'text-violet-400',
    borderHover: 'hover:border-violet-500/30',
  },
  {
    emoji: '💧',
    title: 'Micromixer Flow Analysis',
    description:
      'CFD analysis of a micromixer in a liquid flow cell for Transmission Electron Microscope (TEM)-based studies. Redesigned flow cell geometry through iterative COMSOL simulations, achieving a 145% improvement in fluid mixing performance.',
    tags: ['COMSOL', 'CFD', 'TEM', 'Leeds'],
    metric: '145% mixing improvement',
    color: 'from-cyan-500/10',
    accentColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/30',
  },
  {
    emoji: '⚡',
    title: 'Bearing-less SRM (BSRM) Modelling',
    description:
      'Analytical and 2D FEA validation of a 12/8 Bearing-less Switched Reluctance Motor using Maxwell Stress Tensor method. Strong agreement between mathematical and numerical results; prototype test rig built to IEC/ISO standards at IIT Guwahati.',
    tags: ['Ansoft Maxwell', 'LabVIEW', 'FEA', 'IIT Guwahati'],
    metric: 'Analytical–FEA agreement validated',
    color: 'from-rose-500/10',
    accentColor: 'text-rose-400',
    borderHover: 'hover:border-rose-500/30',
  },
  {
    emoji: '🔊',
    title: 'Flow Regime Classification',
    description:
      'Identified two-phase flow regimes using acoustic emission (AE) sensor data. Applied COMSOL for simulation and MATLAB/Python-based machine learning (SVM, CNN) for classification — BTech final-year project at SVNIT.',
    tags: ['Python', 'SVM', 'CNN', 'COMSOL', 'SVNIT'],
    metric: 'ML-based AE classification',
    color: 'from-amber-500/10',
    accentColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/30',
  },
  {
    emoji: '🏗️',
    title: 'Street Lighting System',
    description:
      'Mechanical and structural modelling for a complete street-lighting system. Covered supply, delivery, installation, commissioning and maintenance planning. Used Ansys and Abaqus for structural FEA validation.',
    tags: ['Ansys', 'Abaqus', 'Structural FEA', 'Team Project'],
    metric: 'Full system design lifecycle',
    color: 'from-emerald-500/10',
    accentColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/30',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
}

export default function Projects() {
  return (
    <div className="py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-16"
      >
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-emerald-400/80 mb-3">Projects</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white/90">
          Selected{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300">
            Work
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {projects.map((proj) => (
          <motion.div
            key={proj.title}
            variants={item}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 280 }}
            className={`card-glass bg-gradient-to-br ${proj.color} to-transparent p-6 rounded-2xl border border-white/[0.08] ${proj.borderHover} transition-all duration-300 group flex flex-col`}
          >
            <div className="text-3xl mb-4">{proj.emoji}</div>
            <h3 className="text-sm font-semibold text-white/90 mb-2 leading-snug">{proj.title}</h3>
            <p className="text-xs text-white/42 leading-relaxed mb-5 flex-1">{proj.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {proj.tags.map(tag => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/45">
                  {tag}
                </span>
              ))}
            </div>
            <div className={`inline-flex items-center gap-1.5 text-xs font-medium ${proj.accentColor}`}>
              <ArrowUpRight size={12} />
              {proj.metric}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
