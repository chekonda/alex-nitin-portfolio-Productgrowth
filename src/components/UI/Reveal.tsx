import type { ReactNode } from 'react'
import { motion } from 'motion/react'

// Declared at module scope (not inside the component) so identity stays
// stable across renders — creating a motion component during render would
// reset its internal state on every re-render.
const motionComponents = {
  div: motion.div,
  li: motion.li,
} as const

/**
 * Scroll-reveal wrapper: fades and lifts content into place once it enters
 * the viewport. Respects prefers-reduced-motion via Motion's reduced-motion
 * handling (transforms are skipped, opacity fade remains).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li'
}) {
  const Component = motionComponents[as]

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  )
}
