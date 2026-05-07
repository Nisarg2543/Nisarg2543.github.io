import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = [
  { id: 'hero', num: '00', label: 'Home' },
  { id: 'about', num: '01', label: 'About' },
  { id: 'skills', num: '02', label: 'Skills' },
  { id: 'experience', num: '03', label: 'Experience' },
  { id: 'certifications', num: '04', label: 'Certifications' },
  { id: 'projects', num: '05', label: 'Projects' },
  { id: 'research', num: '06', label: 'Research' },
  { id: 'education', num: '07', label: 'Education' },
  { id: 'contact', num: '08', label: 'Contact' },
]

export function SectionIndicator() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.25 }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const current = sections.find((s) => s.id === active)

  return (
    <div className="fixed bottom-8 right-8 z-40 hidden xl:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={current?.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="flex items-center gap-2.5 px-4 py-2 rounded-full"
          style={{
            background: 'rgba(26,28,32,0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          <span
            className="text-[0.6rem] font-semibold tracking-widest font-mono"
            style={{ color: 'var(--accent-primary)' }}
          >
            {current?.num}
          </span>
          <span className="w-px h-3 bg-border-subtle" />
          <span className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-theme-faint">
            {current?.label}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
