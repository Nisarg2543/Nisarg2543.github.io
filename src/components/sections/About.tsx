import { motion } from 'framer-motion'
import { Microscope, Code2, FlaskConical, Users } from 'lucide-react'
import { CountUp } from '@/components/ui/CountUp'

const stats = [
  { value: 3, suffix: '+', label: 'Years research experience', icon: Microscope },
  { value: 4, suffix: '+', label: 'Multiphysics simulation tools', icon: Code2 },
  { value: 10, suffix: '+', label: 'CAD & simulation tools mastered', icon: FlaskConical },
  { value: 3, suffix: '', label: 'Universities collaborated with', icon: Users },
]

const primaryChips = ['FEBio', 'COMSOL Multiphysics', 'Ansys Fluent', 'MATLAB', 'Python', 'Bayesian Opt.']
const secondaryChips = ['SolidWorks', 'Abaqus', 'OpenFOAM', 'FEA / CFD']

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
}

export default function About() {
  return (
    <div className="py-28 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-14"
      >
        <p className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-accent mb-3">
          <span className="opacity-40">01 —</span> About me
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-theme-main leading-tight">
          System Architecture &amp; Insight
        </h2>
      </motion.div>

      {/* Main grid */}
      <div className="grid lg:grid-cols-12 gap-8 mb-12">
        {/* Bio card */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="lg:col-span-7 card-glass p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
          <div className="space-y-5 text-theme-muted text-base leading-relaxed">
            <p>
              I'm a computational mechanical engineer with an MSc from the University of Leeds and
              hands-on research experience at Queen's University Belfast and IIT Guwahati. My work
              sits at the boundary of numerical simulation and physical experimentation — building
              models that are both mathematically rigorous and experimentally validated.
            </p>
            <p>
              At QUB, I develop multiphysics finite element models to study Nitric Oxide diffusion and
              release in MOF-loaded polymer catheters — work with direct implications for biomedical
              device design. I build custom MATLAB-based Bayesian optimisation pipelines that automate
              the simulation-to-result workflow and identify optimal design parameters with minimal
              experimental cost.
            </p>
            <p>
              I'm equally comfortable in the lab as at the computer — having designed experimental
              rigs, operated SEM/DSC/TGA/FTIR instruments, and collaborated with cross-disciplinary
              teams across three universities. Currently on the Global Talent Visa (UK).
            </p>
          </div>
        </motion.div>

        {/* Technical protocols */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <p className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-theme-faint mb-5 pl-1 border-l-2 border-secondary">
            Technical Protocols
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {primaryChips.map((chip) => (
              <span
                key={chip}
                className="text-[0.7rem] font-medium px-3 py-1.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                style={{
                  background: 'var(--accent-surface)',
                  border: '1px solid var(--accent-border)',
                  color: 'var(--accent-primary)',
                }}
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {secondaryChips.map((chip) => (
              <span
                key={chip}
                className="text-[0.7rem] font-medium px-3 py-1.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                style={{
                  background: 'var(--accent-secondary-surface)',
                  border: '1px solid var(--accent-secondary-border)',
                  color: 'var(--accent-secondary)',
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats row with count-up */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map(({ value, suffix, label, icon: Icon }) => (
          <motion.div
            key={label}
            variants={item}
            className="card-glass p-5 group hover:bg-surface-hover transition-colors duration-200"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
              style={{ background: 'var(--accent-surface)', border: '1px solid var(--accent-border)' }}
            >
              <Icon size={16} className="text-accent" />
            </div>
            <p className="font-serif text-3xl font-semibold text-theme-main tracking-tight">
              <CountUp value={value} suffix={suffix} duration={1600} />
            </p>
            <p className="text-xs text-theme-muted mt-1 leading-snug">{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
