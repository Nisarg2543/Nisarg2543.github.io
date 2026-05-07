import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type ThemeMode = 'dark' | 'dusk' | 'warm'
export type ThemePalette = 'cyan' | 'violet' | 'emerald' | 'rose' | 'amber' | 'indigo' | 'blue'
export type ThemeStyle = 'glassmorphism' | 'minimalist' | 'cyberpunk' | 'precision' | 'blueprint'

interface ThemeContextType {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  palette: ThemePalette
  setPalette: (palette: ThemePalette) => void
  style: ThemeStyle
  setStyle: (style: ThemeStyle) => void
  glow: boolean
  setGlow: (glow: boolean) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem('theme-mode') as ThemeMode
    // Migrate old 'light' to 'warm'
    if (stored === 'light' as string) return 'warm'
    return stored || 'dark'
  })

  const [palette, setPalette] = useState<ThemePalette>(() => {
    const stored = localStorage.getItem('theme-palette')
    // Migrate old default 'indigo' (which was actually cyan) → 'cyan'
    if (!stored || stored === 'indigo') return 'cyan'
    return stored as ThemePalette
  })

  const [style, setStyle] = useState<ThemeStyle>(
    () => (localStorage.getItem('theme-style') as ThemeStyle) || 'glassmorphism'
  )

  const [glow, setGlow] = useState<boolean>(
    () => localStorage.getItem('theme-glow') !== 'false'
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.setAttribute('data-mode', mode)
    root.setAttribute('data-palette', palette)
    // Remove any stale data-style from localStorage so old style values
    // (blueprint, precision, etc.) don't override the mode background
    root.removeAttribute('data-style')
    localStorage.removeItem('theme-style')
    localStorage.setItem('theme-mode', mode)
    localStorage.setItem('theme-palette', palette)
  }, [mode, palette, style])

  useEffect(() => {
    localStorage.setItem('theme-glow', String(glow))
  }, [glow])

  return (
    <ThemeContext.Provider value={{ mode, setMode, palette, setPalette, style, setStyle, glow, setGlow }}>
      {children}
    </ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
