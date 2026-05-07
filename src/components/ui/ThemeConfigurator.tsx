import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Settings, X, Moon, Sun, Leaf, Palette } from 'lucide-react'
import { useTheme, ThemePalette, ThemeMode } from '@/context/ThemeContext'

const modes: { id: ThemeMode; label: string; icon: React.ElementType }[] = [
  { id: 'dark', label: 'Dark',  icon: Moon },
  { id: 'dusk', label: 'Dusk',  icon: Leaf },
  { id: 'warm', label: 'Warm',  icon: Sun  },
]

const palettes: { id: ThemePalette; name: string; hex: string }[] = [
  { id: 'cyan',    name: 'Cyan',    hex: '#00dbe9' },
  { id: 'violet',  name: 'Violet',  hex: '#cf5cff' },
  { id: 'emerald', name: 'Emerald', hex: '#10b981' },
  { id: 'rose',    name: 'Rose',    hex: '#f43f5e' },
  { id: 'amber',   name: 'Amber',   hex: '#f59e0b' },
  { id: 'indigo',  name: 'Indigo',  hex: '#6366f1' },
  { id: 'blue',    name: 'Blue',    hex: '#3b82f6' },
]

export function ThemeConfigurator() {
  const [isOpen, setIsOpen] = useState(false)
  const { mode, setMode, palette, setPalette, glow, setGlow } = useTheme()

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-40 p-3 rounded-full bg-surface border border-border-subtle text-theme-main hover:bg-surface-hover hover:text-accent shadow-lg transition-all"
        aria-label="Open appearance settings"
      >
        <Settings size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-80 z-[101] shadow-2xl overflow-y-auto flex flex-col"
              style={{
                background: 'var(--bg-base)',
                borderRight: '1px solid var(--border-subtle)',
              }}
            >
              {/* Header */}
              <div
                className="p-6 flex items-center justify-between sticky top-0 z-10"
                style={{
                  background: 'var(--bg-base)',
                  backdropFilter: 'blur(12px)',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <div className="flex items-center gap-2">
                  <Palette size={16} className="text-accent" />
                  <h2 className="font-semibold text-theme-main">Appearance</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-theme-muted hover:text-theme-main hover:bg-surface transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 space-y-8 flex-1">

                {/* Color Mode */}
                <section>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-theme-faint mb-3">
                    Color Mode
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {modes.map(({ id, label, icon: Icon }) => (
                      <button
                        key={id}
                        onClick={() => setMode(id)}
                        className={`py-2.5 px-3 rounded-xl text-sm font-medium flex flex-col items-center gap-1.5 transition-colors border ${
                          mode === id
                            ? 'bg-accent-surface border-accent-border text-accent'
                            : 'bg-surface border-border-subtle text-theme-muted hover:text-theme-main'
                        }`}
                      >
                        <Icon size={14} />
                        {label}
                      </button>
                    ))}
                  </div>
                </section>

                {/* Accent Palette */}
                <section>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-theme-faint mb-3">
                    Accent Colour
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    {palettes.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setPalette(p.id)}
                        title={p.name}
                        className={`flex flex-col items-center gap-2 p-2 rounded-xl transition-colors ${
                          palette === p.id ? 'bg-surface-hover' : 'hover:bg-surface'
                        }`}
                      >
                        <div
                          className="w-8 h-8 rounded-full"
                          style={{
                            background: p.hex,
                            boxShadow: palette === p.id
                              ? `0 0 0 2px var(--bg-base), 0 0 0 3.5px ${p.hex}`
                              : 'none',
                          }}
                        />
                        <span className={`text-[10px] leading-none ${palette === p.id ? 'text-theme-main font-medium' : 'text-theme-muted'}`}>
                          {p.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </section>

                {/* Ambient Glow */}
                <section>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-theme-faint mb-3">
                    Ambient Glow
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {([true, false] as const).map((val) => (
                      <button
                        key={String(val)}
                        onClick={() => setGlow(val)}
                        className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-colors border ${
                          glow === val
                            ? 'bg-accent-surface border-accent-border text-accent'
                            : 'bg-surface border-border-subtle text-theme-muted hover:text-theme-main'
                        }`}
                      >
                        {val ? 'On' : 'Off'}
                      </button>
                    ))}
                  </div>
                </section>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
