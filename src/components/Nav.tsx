import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)]/60 bg-[var(--bg)]/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-[15px] font-semibold tracking-tight">
          Sofa
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
          <a href="#rhythm" className="transition-colors duration-[180ms] hover:text-[var(--fg)]">
            Rhythm
          </a>
          <a href="#board" className="transition-colors duration-[180ms] hover:text-[var(--fg)]">
            Board
          </a>
          <a href="#taste" className="transition-colors duration-[180ms] hover:text-[var(--fg)]">
            Taste
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Log in
          </Button>
          <Button variant="accent" size="sm">
            Open app
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
