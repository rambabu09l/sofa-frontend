import { motion } from 'motion/react'
import { GitBranch, Sparkles, Workflow } from 'lucide-react'

const ease = [0.2, 0.8, 0.2, 1] as const

const pillars = [
  {
    icon: Workflow,
    title: 'Intake like Linear',
    body: 'Conversations become issues — routed, labeled, and ready for humans or agents without the noise.',
    href: 'https://linear.app/',
  },
  {
    icon: Sparkles,
    title: 'Move like Motion',
    body: 'Small APIs, expressive interfaces. Layout, gesture, and scroll that feel native — not decorative.',
    href: 'https://motion.dev/',
  },
  {
    icon: GitBranch,
    title: 'Judge with taste',
    body: 'TASTES.md sits between soul and skill: principles, hard rejections, and thresholds you can execute.',
    href: 'https://tastes.md/',
  },
]

export function Rhythm() {
  return (
    <section id="rhythm" className="border-t border-[var(--border)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.2, ease }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--accent)]">Rhythm</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            One composition. Three references.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted)]">
            Sofa borrows craft from product systems, temporal feel from animation libraries, and
            discernment from the missing judgment layer.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.a
              key={pillar.title}
              href={pillar.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.2, delay: i * 0.05, ease }}
              className="group block border-t border-[var(--border)] pt-6 transition-colors duration-[180ms] hover:border-[var(--accent)]"
            >
              <pillar.icon className="size-5 text-[var(--accent)]" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] group-hover:text-[var(--fg)]/80">
                {pillar.body}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
