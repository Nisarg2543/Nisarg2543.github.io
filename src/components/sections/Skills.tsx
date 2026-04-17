import { motion } from 'framer-motion'
import { Cpu, Code, Layers, FlaskConical, Brain, Globe } from 'lucide-react'

const skillGroups = [
  {
    title: 'Simulation & FEA',
    icon: Cpu,
    color: 'from-indigo-500/20 to-indigo-500/5',
    iconColor: 'text-indigo-400',
    borderColor: 'border-indigo-500/20',
    skills: ['FEBio', 'COMSOL Multiphysics', 'Ansys Workbench', 'Abaqus CAE', 'Ansoft Maxwell', 'OpenFOAM', 'SimScale', 'FEAST (ISRO)', 'Altair Hyperworks'],
  },
  {
    title: 'Programming',
    icon: Code,
    color: 'from-violet-500/20 to-violet-500/5',
    iconColor: 'text-violet-400',
    borderColor: 'border-violet-500/20',
    skills: ['MATLAB', 'Python', 'C++', 'C', 'Fortran', 'Scilab', 'LaTeX', 'Pandas', 'Gnu Octave'],
  },
  {
    title: 'CAD & Design',
    icon: Layers,
    color: 'from-cyan-500/20 to-cyan-500/5',
    iconColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
    skills: ['SolidWorks', 'Siemens NX', 'PTC Creo', 'Catia V5', 'Fusion 360', 'Autodesk Inventor', 'AutoCAD 2D', 'Simulink'],
  },
  {
    title: 'Lab & Experimental',
    icon: FlaskConical,
    color: 'from-emerald-500/20 to-emerald-500/5',
    iconColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    skills: ['SEM Imaging', 'DSC', 'TGA', 'FTIR', '3D Printing', 'Instron Testing', 'CNC', 'CAD/CAM', 'Material Testing'],
  },
  {
    title: 'Methods',
    icon: Brain,
    color: 'from-rose-500/20 to-rose-500/5',
    iconColor: 'text-rose-400',
    borderColor: 'border-rose-500/20',
    skills: ['Bayesian Optimisation', 'Surrogate Modelling', 'CFD', 'Multiphysics FEA', 'Machine Learning', 'Prototype Design', 'FEM'],
  },
  {
    title: 'Languages',
    icon: Globe,
    color: 'from-amber-500/20 to-amber-500/5',
    iconColor: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    skills: ['English', 'Hindi', 'Gujarati'],
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

export default function Skills() {
  return (
    <div className="py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-16"
      >
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-violet-400/80 mb-3">Skills</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white/90">
          Tools &{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-cyan-300">
            Technologies
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
        {skillGroups.map(({ title, icon: Icon, color, iconColor, borderColor, skills }) => (
          <motion.div
            key={title}
            variants={item}
            className={`card-glass p-6 rounded-2xl bg-gradient-to-br ${color} hover:bg-white/[0.05] transition-all duration-300 group`}
          >
            <div className={`w-9 h-9 rounded-xl bg-white/[0.05] border ${borderColor} flex items-center justify-center mb-5`}>
              <Icon size={16} className={iconColor} />
            </div>
            <h3 className="text-sm font-semibold text-white/80 mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/70 hover:text-white/80 hover:bg-white/[0.10] transition-colors duration-150"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
