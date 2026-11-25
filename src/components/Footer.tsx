import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl font-bold tracking-tight">Sofa</p>
            <p className="mt-2 max-w-sm text-sm text-[var(--muted)]">
              Infinite generation demands infinite discernment.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-[var(--muted)]">
            <a
              href="https://tastes.md/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--fg)]"
            >
              tastes.md
            </a>
            <a
              href="https://linear.app/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--fg)]"
            >
              Linear
            </a>
            <a
              href="https://motion.dev/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--fg)]"
            >
              Motion
            </a>
          </div>
        </div>
        <Separator className="my-8" />
        <p className="text-xs text-[var(--muted)]">
          MIT-0 — Taste cannot be owned. Only practiced.
        </p>
      </div>
    </footer>
  )
}
