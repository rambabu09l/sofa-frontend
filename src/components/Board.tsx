import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'

const ease = [0.2, 0.8, 0.2, 1] as const

type Column = 'todo' | 'progress' | 'done'

type Card = {
  id: string
  title: string
  column: Column
}

const initial: Card[] = [
  { id: '1', title: 'Draft PRD for agent loops', column: 'todo' },
  { id: '2', title: 'Calibrate 150–200ms transitions', column: 'progress' },
  { id: '3', title: 'Reject opacity-as-gray', column: 'done' },
  { id: '4', title: 'Wire Motion layout spring', column: 'progress' },
]

const columns: { key: Column; label: string }[] = [
  { key: 'todo', label: 'Todo' },
  { key: 'progress', label: 'In Progress' },
  { key: 'done', label: 'Done' },
]

export function Board() {
  const [cards, setCards] = useState(initial)

  const advance = (id: string) => {
    setCards((prev) =>
      prev.map((card) => {
        if (card.id !== id) return card
        const next: Column =
          card.column === 'todo' ? 'progress' : card.column === 'progress' ? 'done' : 'todo'
        return { ...card, column: next }
      }),
    )
  }

  return (
    <section id="board" className="border-t border-[var(--border)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.2, ease }}
          className="mb-12 max-w-xl"
        >
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--accent)]">Board</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Click an issue. Watch it move.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted)]">
            Layout animation inspired by Motion — shared presence across columns, no card clutter in
            the hero, only where interaction lives.
          </p>
        </motion.div>

        <LayoutGroup>
          <div className="grid gap-4 md:grid-cols-3">
            {columns.map((col) => (
              <div
                key={col.key}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 p-3"
              >
                <div className="mb-3 flex items-center justify-between px-1">
                  <span className="text-xs font-medium text-[var(--muted)]">{col.label}</span>
                  <span className="text-[10px] text-[var(--muted)]/70">
                    {cards.filter((c) => c.column === col.key).length}
                  </span>
                </div>
                <div className="min-h-[160px] space-y-2">
                  <AnimatePresence mode="popLayout">
                    {cards
                      .filter((c) => c.column === col.key)
                      .map((card) => (
                        <motion.button
                          key={card.id}
                          layout
                          layoutId={card.id}
                          type="button"
                          onClick={() => advance(card.id)}
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }}
                          transition={{ duration: 0.18, ease }}
                          className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-3 text-left text-sm text-[var(--fg)] transition-colors duration-[180ms] hover:border-[var(--accent)]/50"
                        >
                          {card.title}
                        </motion.button>
                      ))}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </LayoutGroup>
      </div>
    </section>
  )
}
