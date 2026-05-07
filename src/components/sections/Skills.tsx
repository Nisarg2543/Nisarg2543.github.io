import { motion } from 'framer-motion'
import { Cpu, Code, Layers, FlaskConical, Brain } from 'lucide-react'
import { useFilter } from '@/context/FilterContext'

type SkillEntry = { name: string; level: number }

const skillGroups: {
  title: string
  icon: React.ElementType
  color: 'primary' | 'secondary'
  skills: SkillEntry[]
  tags: string[]
}[] = [
  {
    title: 'Simulation & FEA',
    icon: Cpu,
    color: 'primary',
    skills: [
      { name: 'FEBio', level: 95 },
      { name: 'COMSOL Multiphysics', level: 85 },
      { name: 'Ansys Workbench', level: 80 },
      { name: 'Abaqus CAE', level: 65 },
    ],
    tags: ['OpenFOAM', 'SimScale', 'FEAST (ISRO)', 'Altair Hyperworks', 'Ansoft Maxwell'],
  },
  {
    title: 'Programming',
    icon: Code,
    color: 'primary',
    skills: [
      { name: 'MATLAB', level: 92 },
      { name: 'Python', level: 80 },
      { name: 'LaTeX', level: 75 },
      { name: 'C++ / C', level: 60 },
    ],
    tags: ['Fortran', 'Scilab', 'Pandas', 'Gnu Octave'],
  },
  {
    title: 'CAD & Design',
    icon: Layers,
    color: 'secondary',
    skills: [
      { name: 'SolidWorks', level: 88 },
      { name: 'AutoCAD 2D', level: 82 },
      { name: 'Siemens NX', level: 65 },
      { name: 'Fusion 360', level: 65 },
    ],
    tags: ['PTC Creo', 'Catia V5', 'Autodesk Inventor', 'Simulink'],
  },
  {
    title: 'Lab & Experimental',
    icon: FlaskConical,
    color: 'secondary',
    skills: [
      { name: 'SEM / DSC / TGA / FTIR', level: 80 },
      { name: 'Instron Testing', level: 78 },
      { name: '3D Printing', level: 75 },
      { name: 'CNC & CAD/CAM', level: 65 },
    ],
    tags: ['Material Testing', 'Prototype Design'],
  },
  {
    title: 'Methods & Domains',
    icon: Brain,
    color: 'primary',
    skills: [
      { name: 'Multiphysics FEA', level: 95 },
      { name: 'CFD Analysis', level: 90 },
      { name: 'Bayesian Optimisation', level: 85 },
      { name: 'Machine Learning', level: 68 },
    ],
    tags: ['Microfluidics', 'Biomedical', 'Electromagnetics', 'Surrogate Modelling'],
  },
]

function proficiencyLabel(level: number): string {
  if (level >= 90) return 'Expert'
  if (level >= 75) return 'Advanced'
  if (level >= 60) return 'Intermediate'
  return 'Proficient'
}

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
}

export default function Skills() {
  const { activeSkill, setActiveSkill } = useFilter()

  return (
    <div className="py-28 px-6 md:px-10 max-w-7xl mx-auto">
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-14"
      >
        <p className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-accent mb-3">
          <span className="opacity-40">02 —</span> Skills
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-theme-main leading-tight">
          Core Proficiencies
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {skillGroups.map(({ title, icon: Icon, color, skills, tags }) => {
          const allSkillNames = [...skills.map((s) => s.name), ...tags]
          const hasActiveSkill = activeSkill ? allSkillNames.includes(activeSkill) : true
          const isDimmed = activeSkill && !hasActiveSkill
          const isPrimary = color === 'primary'

          return (
            <motion.div
              key={title}
              variants={item}
              className={`card-glass p-6 flex flex-col gap-5 group relative overflow-hidden transition-all duration-500 ${
                isDimmed ? 'opacity-30 grayscale saturate-50' : 'opacity-100 hover:-translate-y-1'
              }`}
            >
              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: isPrimary
                    ? 'linear-gradient(135deg, rgba(0,219,233,0.04) 0%, transparent 60%)'
                    : 'linear-gradient(135deg, rgba(207,92,255,0.04) 0%, transparent 60%)',
                }}
              />

              {/* Header */}
              <div className="flex items-center gap-3 border-b border-border-subtle pb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: isPrimary ? 'var(--accent-surface)' : 'var(--accent-secondary-surface)',
                    border: `1px solid ${isPrimary ? 'var(--accent-border)' : 'var(--accent-secondary-border)'}`,
                  }}
                >
                  <Icon
                    size={16}
                    style={{ color: isPrimary ? 'var(--accent-primary)' : 'var(--accent-secondary)' }}
                  />
                </div>
                <h3 className="text-sm font-semibold text-theme-main">{title}</h3>
              </div>

              {/* Skill bars */}
              <div className="flex flex-col gap-3.5">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-theme-main font-medium">{skill.name}</span>
                      <span
                        className="text-[0.6rem] font-semibold tracking-wider uppercase"
                        style={{ color: isPrimary ? 'var(--accent-primary)' : 'var(--accent-secondary)' }}
                      >
                        {proficiencyLabel(skill.level)}
                      </span>
                    </div>
                    <div className="h-[3px] bg-surface-high rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full skill-bar-fill"
                        style={{
                          background: isPrimary
                            ? 'linear-gradient(to right, var(--accent-primary), var(--accent-light))'
                            : 'linear-gradient(to right, var(--accent-secondary), #e1d2ff)',
                          width: `${skill.level}%`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-border-subtle">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveSkill(activeSkill === tag ? null : tag)}
                    className={`text-[0.6rem] font-semibold tracking-wider uppercase px-2 py-1 rounded-full border transition-all duration-200 ${
                      activeSkill === tag
                        ? 'text-accent bg-accent-surface border-accent-border'
                        : 'bg-surface border-border-subtle text-theme-faint hover:text-theme-main hover:border-border-hover'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
