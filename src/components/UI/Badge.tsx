import { cn } from '@/lib/utils'

export function Badge({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-ink-600 bg-ink-900/60 px-3 py-1 text-xs font-medium text-ink-200',
        className,
      )}
    >
      {children}
    </span>
  )
}
