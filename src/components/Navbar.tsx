import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Circle } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const ids = [
      'hero', 'about', 'skills', 'experience', 'certifications',
      'projects', 'research', 'education', 'contact',
    ]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.25 }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-theme-base/80 backdrop-blur-2xl border-b border-border-subtle shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="font-serif text-lg font-semibold tracking-tight">
          <span className="text-theme-main">Nisarg</span>
          <span className="text-accent"> Makwana</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 h-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative text-[0.7rem] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-accent bg-accent-surface'
                      : 'text-theme-faint hover:text-theme-main hover:bg-surface'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[0.65rem] font-semibold tracking-widest uppercase text-theme-faint">
            <Circle className="h-1.5 w-1.5 fill-status-success text-status-success" />
            Available
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-theme-muted hover:text-theme-main"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-theme-base/95 backdrop-blur-2xl border-b border-border-subtle overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-xs font-semibold tracking-widest uppercase text-theme-muted hover:text-accent border-b border-border-subtle last:border-0 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
