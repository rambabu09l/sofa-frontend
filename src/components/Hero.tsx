import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductStage } from '@/components/ProductStage'

const ease = [0.2, 0.8, 0.2, 1] as const

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-10 pt-24 md:justify-center md:pb-16 md:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 grain opacity-40" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 70% 20%, color-mix(in srgb, var(--accent) 8%, transparent), transparent 60%), radial-gradient(ellipse 60% 40% at 10% 80%, color-mix(in srgb, var(--warm) 6%, transparent), transparent 55%)',
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.15fr] lg:items-end lg:gap-16">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease }}
            className="font-display text-5xl font-extrabold tracking-tight text-[var(--fg)] sm:text-6xl md:text-7xl"
          >
            Sofa
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.05, ease }}
            className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-[var(--fg)] sm:text-3xl"
          >
            Product rhythm for teams and agents.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1, ease }}
            className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--muted)]"
          >
            Plan like Linear. Move like Motion. Decide with taste — the layer between soul and skill.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.15, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button size="lg" variant="accent">
              Start building
              <ArrowRight />
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#taste">Read the taste file</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.12, ease }}
          className="relative"
        >
          <ProductStage />
        </motion.div>
      </div>
    </section>
  )
}
