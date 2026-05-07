import { useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Certifications from './components/sections/Certifications'
import Projects from './components/sections/Projects'
import Research from './components/sections/Research'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'

import { FilterProvider } from '@/context/FilterContext'
import { ThemeProvider } from '@/context/ThemeContext'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { BackToTop } from '@/components/ui/BackToTop'
import { FilterToast } from '@/components/ui/FilterToast'
import { ThemeConfigurator } from '@/components/ui/ThemeConfigurator'
import { SectionIndicator } from '@/components/ui/SectionIndicator'

const SectionDivider = () => (
  <div
    className="w-full h-px"
    style={{
      background:
        'linear-gradient(to right, transparent, rgba(0,219,233,0.18) 30%, rgba(207,92,255,0.12) 70%, transparent)',
    }}
  />
)

function AppInner() {
  const { glow } = useTheme()

  // Global cursor-spotlight for all card-glass elements
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const card = (e.target as Element)?.closest('.card-glass') as HTMLElement | null
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--glow-x', `${e.clientX - rect.left}px`)
      card.style.setProperty('--glow-y', `${e.clientY - rect.top}px`)
    }
    document.addEventListener('mousemove', onMouseMove)
    return () => document.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
        <div className="min-h-screen bg-theme-base text-theme-main overflow-x-hidden transition-colors duration-500">
          {/* Ambient background orbs — toggled via appearance panel */}
          {glow && (
            <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
              <div
                className="absolute rounded-full blur-[120px] opacity-50"
                style={{
                  top: '-10%', left: '-10%', width: '50vw', height: '50vw',
                  background: 'radial-gradient(circle, rgba(0,219,233,0.12) 0%, transparent 70%)',
                }}
              />
              <div
                className="absolute rounded-full blur-[150px] opacity-35"
                style={{
                  bottom: '-20%', right: '-10%', width: '60vw', height: '60vw',
                  background: 'radial-gradient(circle, rgba(207,92,255,0.10) 0%, transparent 70%)',
                }}
              />
              <div
                className="absolute rounded-full blur-[100px] opacity-20"
                style={{
                  top: '40%', left: '55%', width: '30vw', height: '30vw',
                  background: 'radial-gradient(circle, rgba(0,219,233,0.08) 0%, transparent 70%)',
                }}
              />
            </div>
          )}

          <ScrollProgress />
          <Navbar />
          <main className="relative z-10">
            <div id="hero"><Hero /></div>
            <div id="about"><About /></div>
            <SectionDivider />
            <div id="skills"><Skills /></div>
            <SectionDivider />
            <div id="experience"><Experience /></div>
            <SectionDivider />
            <div id="certifications"><Certifications /></div>
            <SectionDivider />
            <div id="projects"><Projects /></div>
            <SectionDivider />
            <div id="research"><Research /></div>
            <SectionDivider />
            <div id="education"><Education /></div>
            <SectionDivider />
            <div id="contact"><Contact /></div>
          </main>

          <footer className="relative z-10 text-center py-10 border-t border-border-subtle bg-surface-lowest">
            <p className="text-xs tracking-widest uppercase text-theme-faint font-medium">
              © 2026 Nisarg Makwana &nbsp;·&nbsp; Belfast, UK &nbsp;·&nbsp; Built with Precision
            </p>
          </footer>

          <BackToTop />
          <FilterToast />
          <ThemeConfigurator />
          <SectionIndicator />
        </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <FilterProvider>
        <AppInner />
      </FilterProvider>
    </ThemeProvider>
  )
}

export default App
