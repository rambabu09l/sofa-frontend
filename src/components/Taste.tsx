import { motion } from 'motion/react'

const ease = [0.2, 0.8, 0.2, 1] as const

const rejects = [
  'Never use purple-to-indigo gradients or glow-as-decoration.',
  'Never fake gray with opacity-on-white.',
  'Never exceed 200ms for UI chrome transitions.',
]

const requires = [
  'Restraint first — when in doubt, subtract.',
  'Brand as hero signal; one headline, one CTA group.',
  'Motion with meaning: 150–200ms, cubic-bezier(0.2, 0.8, 0.2, 1).',
]

export function Taste() {
  return (
    <section id="taste" className="border-t border-[var(--border)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.2, ease }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--accent)]">Taste</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Judgment, not a style guide.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted)]">
            Executable constraints from{' '}
            <a
              href="https://tastes.md/"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--fg)] underline decoration-[var(--border)] underline-offset-4 transition-colors hover:decoration-[var(--accent)]"
            >
              tastes.md
            </a>
            . Rejection is definition. Tension over resolution.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease }}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6"
          >
            <h3 className="font-display text-sm font-semibold tracking-wide text-[var(--warm)]">
              REJECT
            </h3>
            <ul className="mt-4 space-y-3">
              {rejects.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-[var(--muted)]">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.05, ease }}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6"
          >
            <h3 className="font-display text-sm font-semibold tracking-wide text-[var(--accent)]">
              REQUIRE
            </h3>
            <ul className="mt-4 space-y-3">
              {requires.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-[var(--muted)]">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.pre
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.08 }}
          className="mt-8 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5 text-xs leading-relaxed text-[var(--muted)]"
        >
{`# TASTES.md — Sofa
## Thresholds
animation:  150–200ms
easing:     cubic-bezier(0.2, 0.8, 0.2, 1)
space:      minimum negative space ratio 40%
## Anchors
product:    Linear — craft, velocity, quiet chrome
temporal:   Motion — small APIs, expressive motion
judgment:   tastes.md — trained perception`}
        </motion.pre>
      </div>
    </section>
  )
}
