import { motion } from 'motion/react'

const issues = [
  { id: 'SOF-241', title: 'Ship intake from Slack threads', tag: 'Intake', status: 'In Progress' },
  { id: 'SOF-238', title: 'Spring dock for agent drafts', tag: 'Motion', status: 'Review' },
  { id: 'SOF-229', title: 'Encode rejections into TASTES.md', tag: 'Taste', status: 'Done' },
]

const ease = [0.2, 0.8, 0.2, 1] as const

export function ProductStage() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-4 rounded-[28px] opacity-60 blur-2xl"
        style={{
          background:
            'linear-gradient(135deg, color-mix(in srgb, var(--accent) 18%, transparent), transparent 50%, color-mix(in srgb, var(--warm) 12%, transparent))',
        }}
      />
      <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
          <span className="size-2.5 rounded-full bg-[#3a3d46]" />
          <span className="size-2.5 rounded-full bg-[#3a3d46]" />
          <span className="size-2.5 rounded-full bg-[#3a3d46]" />
          <span className="ml-3 text-xs text-[var(--muted)]">sofa · cycle 12</span>
        </div>

        <div className="grid gap-0 md:grid-cols-[140px_1fr]">
          <aside className="hidden border-r border-[var(--border)] p-4 text-xs text-[var(--muted)] md:block">
            <p className="mb-3 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]/70">
              Workspace
            </p>
            {['Pulse', 'Inbox', 'My issues', 'Reviews'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.04, duration: 0.18, ease }}
                className={`mb-1 rounded-md px-2 py-1.5 ${i === 2 ? 'bg-[var(--surface-2)] text-[var(--fg)]' : ''}`}
              >
                {item}
              </motion.div>
            ))}
          </aside>

          <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="font-display text-sm font-semibold">Faster app launch</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">Agent + human · shared cycle</p>
              </div>
              <span className="rounded-md border border-[var(--border)] px-2 py-1 text-[10px] text-[var(--accent)]">
                Live
              </span>
            </div>

            <ul className="space-y-2">
              {issues.map((issue, i) => (
                <motion.li
                  key={issue.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 + i * 0.06, duration: 0.2, ease }}
                  whileHover={{ x: 2 }}
                  className="flex items-start justify-between gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg)]/60 px-3 py-2.5"
                >
                  <div>
                    <p className="text-[11px] text-[var(--muted)]">{issue.id}</p>
                    <p className="mt-0.5 text-sm text-[var(--fg)]">{issue.title}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-[var(--warm)]">
                      {issue.tag}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-md bg-[var(--surface-2)] px-2 py-1 text-[10px] text-[var(--muted)]">
                    {issue.status}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-4 h-1 overflow-hidden rounded-full bg-[var(--surface-2)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.2 }}
            >
              <motion.div
                className="h-full origin-left rounded-full bg-[var(--accent)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0.72 }}
                transition={{ delay: 0.55, duration: 0.45, ease }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
