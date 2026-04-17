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

function App() {
  return (
    <div className="min-h-screen bg-[#08080f] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div className="w-full h-px bg-white/[0.05]" />
        <div id="skills"><Skills /></div>
        <div className="w-full h-px bg-white/[0.05]" />
        <div id="experience"><Experience /></div>
        <div className="w-full h-px bg-white/[0.05]" />
        <div id="certifications"><Certifications /></div>
        <div className="w-full h-px bg-white/[0.05]" />
        <div id="projects"><Projects /></div>
        <div className="w-full h-px bg-white/[0.05]" />
        <div id="research"><Research /></div>
        <div className="w-full h-px bg-white/[0.05]" />
        <div id="education"><Education /></div>
        <div className="w-full h-px bg-white/[0.05]" />
        <div id="contact"><Contact /></div>
      </main>
      <footer className="text-center py-8 text-white/20 text-xs border-t border-white/[0.05]">
        © 2026 Nisarg Makwana · Belfast, UK
      </footer>
    </div>
  )
}

export default App
