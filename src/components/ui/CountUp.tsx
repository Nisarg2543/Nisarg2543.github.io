import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CountUpProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

export function CountUp({ value, suffix = '', duration = 1800, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className={className}>
      {display}{suffix}
    </span>
  )
}
