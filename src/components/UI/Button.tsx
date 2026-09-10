import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium ' +
  'transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-accent-400 ' +
  'focus-visible:outline-offset-2'

const variants: Record<Variant, string> = {
  primary:
    'bg-ink-50 text-ink-950 shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset] hover:bg-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-glow',
  secondary:
    'border border-ink-600 text-ink-100 hover:border-accent-400 hover:text-white hover:-translate-y-0.5 bg-ink-900/40',
  ghost: 'text-ink-300 hover:text-white hover:bg-ink-800',
}

export function Button({
  children,
  variant = 'primary',
  className,
  ...props
}: {
  children: ReactNode
  variant?: Variant
  className?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  )
}
