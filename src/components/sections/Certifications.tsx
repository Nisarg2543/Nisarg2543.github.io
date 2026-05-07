import { motion } from 'framer-motion'
import { Award, Download, ExternalLink } from 'lucide-react'

const certs = [
  {
    title: 'Machine Learning',
    issuer: 'Stanford University · Coursera',
    color: 'primary' as const,
    link: null as string | null,
  },
  {
    title: 'Data Analysis in Python',
    issuer: 'Jovian.ml',
    color: 'secondary' as const,
    link: '/certs/Jovian ML certificate.pdf',
  },
  {
    title: 'FEAST Software Workshop',
    issuer: 'ISRO — Indian Space Research Organisation',
    color: 'primary' as const,
    link: '/certs/FEAST software Certificate.pdf',
  },
  {
    title: 'SolidWorks Certified',
    issuer: 'RCAD Institute',
    color: 'secondary' as const,
    link: '/certs/SOLIDWORKS_RCAD.pdf',
  },
  {
    title: 'AutoCAD 2D Certified',
    issuer: 'RCAD Institute',
    color: 'primary' as const,
    link: '/certs/AutoCad Certificate.pdf',
  },
  {
    title: 'Aerial Robotics',
    issuer: 'University of Pennsylvania · Coursera',
    color: 'secondary' as const,
    link: '/certs/Coursera HHTXKY7QT6N4.pdf',
  },
  {
    title: 'Research Internship Certificate',
    issuer: 'National Innovation Foundation — India · Dec 2018',
    color: 'primary' as const,
    link: '/certs/NIF_Certi.pdf',
  },
  {
    title: 'CHRD Workshop',
    issuer: 'Certified Human Resource Development',
    color: 'secondary' as const,
    link: '/certs/CHRD Certificate.pdf',
  },
  {
    title: 'IIT Guwahati Internship',
    issuer: 'Indian Institute of Technology Guwahati',
    color: 'primary' as const,
    link: '/certs/IITG_Certi.pdf',
  },
]

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  },
}

export default function Certifications() {
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
          <span className="opacity-40">04 —</span> Certifications
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-theme-main leading-tight">
          Verified Credentials
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {certs.map((cert) => {
          const isPrimary = cert.color === 'primary'
          return (
            <motion.div
              key={cert.title}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="card-glass p-6 flex gap-4 items-start group relative overflow-hidden"
            >
              {/* Watermark icon */}
              <div
                className="absolute -right-4 -top-4 opacity-[0.06] pointer-events-none transform rotate-12"
                style={{ color: isPrimary ? 'var(--accent-primary)' : 'var(--accent-secondary)' }}
              >
                <Award size={96} />
              </div>

              {/* Verified circle */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                style={{
                  background: isPrimary ? 'var(--accent-surface)' : 'var(--accent-secondary-surface)',
                  border: `1px solid ${isPrimary ? 'var(--accent-border)' : 'var(--accent-secondary-border)'}`,
                }}
              >
                <Award
                  size={20}
                  style={{ color: isPrimary ? 'var(--accent-primary)' : 'var(--accent-secondary)' }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1.5 z-10 flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-theme-main leading-snug">{cert.title}</h3>
                <p className="text-xs text-theme-muted">{cert.issuer}</p>

                {cert.link && (
                  <div className="flex gap-2 mt-2">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[0.65rem] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        background: isPrimary ? 'var(--accent-surface)' : 'var(--accent-secondary-surface)',
                        border: `1px solid ${isPrimary ? 'var(--accent-border)' : 'var(--accent-secondary-border)'}`,
                        color: isPrimary ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                      }}
                    >
                      <Download size={11} />
                      PDF Spec
                    </a>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[0.65rem] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full bg-surface border border-border-subtle text-theme-faint hover:text-theme-main transition-all duration-200"
                    >
                      <ExternalLink size={11} />
                      View
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
