import { ArrowUp } from 'lucide-react'
import { useScrolled } from '@/hooks/useScrolled'

export function BackToTop() {
  const visible = useScrolled(480)

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-ink-600 bg-ink-900/80 text-ink-200 backdrop-blur-md transition-all duration-300 hover:border-accent-400 hover:text-white ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUp size={18} strokeWidth={2} />
    </button>
  )
}
