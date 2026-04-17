import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    role: 'Research Assistant',
    org: "Queen's University Belfast",
    period: 'Jun 2023 – Present',
    tags: ['FEBio', 'MATLAB', 'Bayesian Opt.', 'FEA', 'Biomedical'],
    color: 'from-indigo-500/15',
    description:
      'Developed multiphase continuum finite element models to simulate water diffusion and Nitric Oxide (NO) release in blank and MOF-loaded (Ni/Zn) polymer catheters using FEBio. Built custom MATLAB-based Bayesian optimisation pipelines to automate simulation runs, import flux logs, and determine optimal MOF loading and catheter geometry. Designed and built experimental rigs to test diffusion and permeation properties of porous polymer materials. Collaborated with the University of St Andrews to integrate computational and wet-lab approaches for validating NO release profiles.',
  },
  {
    role: 'Visiting Researcher',
    org: 'University of Leeds',
    period: 'Apr 2024 – Present',
    tags: ['COMSOL', 'Microfluidics', 'CFD', '3D Modelling'],
    color: 'from-violet-500/15',
    description:
      'Executed Multiphysics modelling and simulation of an existing microfluidics project using COMSOL Multiphysics, focusing on flow analysis and geometry optimisation of a liquid flow cell. Validated and refined existing computational models to ensure accuracy and reliability. Produced research documentation and 3D visualisations; strategised with supervisors and product designers on design iterations for concept substantiation.',
  },
  {
    role: 'Researcher Intern',
    org: 'University of Leeds',
    period: 'Oct 2022 – Present',
    tags: ['CAD', 'Flow Analysis', 'Ansys', 'Design Optimisation'],
    color: 'from-cyan-500/15',
    description:
      'Created complex 3D CAD models and performed CFD/flow analysis to identify potential design flaws and mechanical interference in a liquid flow cell for TEM-based studies. Analysed mechanical parts to identify stress concentration points and recommended geometry changes. Optimised flow cell design through iterative simulation, improving fluid mixing performance by 145%. Prepared clear design reports, 3D visualisations, and weekly presentations for management and research supervisors.',
  },
  {
    role: 'Engineering Intern',
    org: 'IIT Guwahati',
    period: 'Jun 2024 – Aug 2025',
    tags: ['Ansoft Maxwell', 'FEA', 'LabVIEW', 'Electromagnetics', 'BSRM'],
    color: 'from-rose-500/15',
    description:
      'Developed and verified analytical models for a 12/8 Bearing-less Switched Reluctance Motor (BSRM) using the Maxwell Stress Tensor method. Performed 2D FEA using Ansoft Maxwell to validate mathematical models under static and transient conditions, achieving strong agreement. Collaborated on assembling a prototype system incorporating displacement sensors, absolute encoders, and real-time controllers in LabVIEW. Contributed to design and development of a test rig following IEC and ISO standards (0.75 kW power output).',
  },
  {
    role: 'Course Demonstrator',
    org: "Queen's University Belfast",
    period: 'Sep 2024 – Dec 2025',
    tags: ['Teaching', 'MATLAB', 'Mathematics'],
    color: 'from-amber-500/15',
    description:
      'Provided in-class technical and mathematical support as a Demonstrator for the Mathematics and Computing module. Conducted hands-on demonstrations of computing techniques including programming tools and mathematical software to undergraduate students.',
  },
]

const item = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function Experience() {
  return (
    <div className="py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-16"
      >
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-cyan-400/80 mb-3">Work Experience</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white/90">
          Where I've{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-300">
            worked
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="relative"
      >
        {/* Timeline line */}
        <div className="absolute left-[18px] top-6 bottom-6 w-px bg-white/[0.06] hidden sm:block" />

        <div className="space-y-6">
          {experiences.map((exp) => (
            <motion.div key={exp.role + exp.org} variants={item}>
              <div className="sm:pl-12 relative">
                {/* Dot */}
                <div className="absolute left-0 top-6 w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.10] hidden sm:flex items-center justify-center">
                  <Briefcase size={14} className="text-white/40" />
                </div>

                <div className={`card-glass p-6 rounded-2xl bg-gradient-to-br ${exp.color} to-transparent hover:bg-white/[0.05] transition-all duration-300`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-white/90">{exp.role}</h3>
                      <p className="text-sm text-indigo-400/80 mt-0.5">{exp.org}</p>
                    </div>
                    <span className="text-xs text-white/35 bg-white/[0.05] border border-white/[0.08] px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-white/45 leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
