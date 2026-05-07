import { motion } from 'framer-motion'
import { FlaskConical, BookOpen, Clock, FileText } from 'lucide-react'
import { TextWithGlossary } from '@/components/ui/GlossaryTooltip'
import { useFilter } from '@/context/FilterContext'

type ResearchStatus = 'ongoing' | 'complete'

interface ResearchItem {
  title: string
  venue: string
  note: string
  year: string
  status: ResearchStatus
  authors?: string
  abstractPdf?: string
  funding?: string
  tags?: string[]
}

const conferences: ResearchItem[] = [
  {
    title: 'Simulating Nitric Oxide Diffusion within MOF-Based Polymers Used to Prevent Catheter Related Thrombosis and Infection',
    venue: 'Northern Ireland Biomedical Engineering Society (NIBES) Symposium, 1st May 2025',
    note: 'FEBio 4.9 · Multiphase FE model · Experimentally validated NO release profiles · EPSRC funded',
    authors: 'Makwana N., Denton O., Garret G., Morris R., Duncan M., Lennon A., Menary G.',
    year: '2025',
    status: 'complete',
    abstractPdf: '/NIBES_2025_Abstract.pdf',
    funding: 'EPSRC [EP/X014436/1]',
    tags: ['FEBio', 'FEA', 'Biomedical'],
  },
  {
    title: 'Simulating Nitric Oxide Diffusion within MOF-Based Polymers Used to Prevent Catheter Related Thrombosis and Infection',
    venue: 'Bioengineering in Ireland 29 (BINI), 26–27 January 2024',
    note: 'FEBio 2.4 · Multi-solute transport FE model · Parametric study of release kinetics',
    authors: 'Makwana N., Garret G.S., Duncan M.J., Morris R.E., Lennon A., Menary G.',
    year: '2024',
    status: 'complete',
    abstractPdf: '/BINI_2024_Abstract.pdf',
    tags: ['FEBio', 'Biomedical'],
  },
]

const ongoing: ResearchItem[] = [
  {
    title: 'Multiphysics modelling of Nitric Oxide diffusion and release in MOF-loaded polymer catheters',
    venue: "Queen's University Belfast · in progress",
    note: 'With University of St Andrews · FEBio · Bayesian optimisation · experimental validation against chemiluminescence data',
    year: '2023–now',
    status: 'ongoing',
    funding: 'EPSRC [EP/X014436/1]',
    tags: ['FEBio', 'Bayesian Opt.', 'Biomedical'],
  },
]

const academic: ResearchItem[] = [
  {
    title: 'Flow analysis of a micromixer in liquid flow cell for TEM-based study',
    venue: 'MSc Design Project · University of Leeds',
    note: 'COMSOL Multiphysics · CFD · geometry optimisation · 145% mixing improvement',
    year: '2022',
    status: 'complete',
    tags: ['COMSOL', 'CFD', 'Flow Analysis'],
  },
  {
    title: 'Analytical and FEA validation of a 12/8 Bearing-less Switched Reluctance Motor',
    venue: 'Engineering Internship · IIT Guwahati',
    note: 'Ansoft Maxwell · Maxwell Stress Tensor · IEC/ISO test rig · 0.75 kW prototype',
    year: '2024',
    status: 'complete',
    tags: ['Ansoft Maxwell', 'FEA', 'Electromagnetics'],
  },
  {
    title: 'Identification of two-phase flow regimes using acoustic emission sensors',
    venue: 'BTech Final Year Project · SVNIT, India',
    note: 'SVM & CNN classification · COMSOL · Python · acoustic signal processing',
    year: '2021',
    status: 'complete',
    tags: ['Python', 'Machine Learning', 'COMSOL'],
  },
]

const fadeItem = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
}
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

function ResearchCard({ title, venue, note, year, status, authors, abstractPdf, funding, tags }: ResearchItem) {
  const { activeSkill, setActiveSkill } = useFilter()
  const isDimmed = activeSkill && tags && !tags.includes(activeSkill)

  return (
    <motion.div
      variants={fadeItem}
      className={`card-glass p-5 flex gap-5 items-start hover:border-border-hover hover:bg-surface-hover transition-all duration-300 group ${
        isDimmed ? 'opacity-30 grayscale saturate-50' : 'opacity-100'
      }`}
    >
      <div className="flex-shrink-0 mt-0.5">
        <span
          className={`inline-flex items-center gap-1 text-[0.6rem] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border ${
            status === 'ongoing'
              ? 'bg-status-success/10 border-status-success/25 text-status-success'
              : 'bg-accent-surface border-accent-border text-accent'
          }`}
        >
          {status === 'ongoing' ? <Clock size={9} /> : <BookOpen size={9} />}
          {year}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-theme-main leading-snug mb-1">
          <TextWithGlossary text={title} />
        </h3>
        {authors && <p className="text-xs text-theme-faint mb-1 italic">{authors}</p>}
        <p className="text-xs text-theme-muted mb-1">{venue}</p>
        <p className="text-xs text-theme-faint italic mb-3">
          <TextWithGlossary text={note} />
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveSkill(activeSkill === tag ? null : tag)}
                className={`text-[0.6rem] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full border transition-colors duration-200 ${
                  activeSkill === tag
                    ? 'bg-accent-surface border-accent-border text-accent'
                    : 'bg-surface border-border-subtle text-theme-faint hover:text-theme-main'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {funding && (
            <span className="inline-flex items-center text-[0.6rem] font-semibold tracking-wider uppercase text-status-warning bg-status-warning/10 border border-status-warning/20 px-2 py-0.5 rounded-full">
              {funding}
            </span>
          )}
          {abstractPdf && (
            <a
              href={abstractPdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[0.65rem] font-semibold tracking-wider uppercase text-accent bg-accent-surface border border-accent-border hover:bg-accent-surface/60 px-2.5 py-1 rounded-full transition-all duration-150"
            >
              <FileText size={10} />
              View Abstract
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Research() {
  const groups = [
    { label: 'Conference Presentations', icon: FileText, iconColor: 'text-status-danger', items: conferences },
    { label: 'Ongoing Research', icon: FlaskConical, iconColor: 'text-status-success', items: ongoing },
    { label: 'Academic Design Projects', icon: BookOpen, iconColor: 'text-status-info', items: academic },
  ]

  return (
    <div className="py-28 px-6 md:px-10 max-w-7xl mx-auto">
      <motion.div
        variants={fadeItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-14"
      >
        <p className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-accent mb-3">
          <span className="opacity-40">06 —</span> Research
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-theme-main leading-tight">
          Research &amp; Academic Work
        </h2>
        <p className="text-sm text-theme-muted max-w-xl mt-4 leading-relaxed">
          Conference presentations, ongoing funded research, and academic design projects.
          Simulation data and full documentation available on request.
        </p>
      </motion.div>

      <div className="space-y-10">
        {groups.map(({ label, icon: Icon, iconColor, items }) => (
          <div key={label}>
            <div className="flex items-center gap-2 mb-5">
              <Icon size={13} className={iconColor} />
              <p className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-theme-faint">
                {label}
              </p>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-3"
            >
              {items.map((r) => (
                <ResearchCard key={r.title + r.year} {...r} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
