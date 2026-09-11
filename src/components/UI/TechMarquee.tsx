import { skillCategories } from '@/data/portfolio'
import { skillIconMap } from '@/lib/skillIcons'

// Derived from the real skills data (never hand-typed) — only skills that
// have a genuine brand mark are shown here, so this strip can never drift
// out of sync with the resume or imply a technology that isn't listed.
const strip = skillCategories
  .flatMap((category) => category.skills)
  .filter((skill) => skill in skillIconMap)

/**
 * A slow, continuous horizontal scroll of brand-colored tech marks — purely
 * decorative motion, disabled automatically for prefers-reduced-motion via
 * the global CSS rule that zeroes animation-duration.
 */
export function TechMarquee() {
  const items = [...strip, ...strip]

  return (
    <div
      className="relative overflow-hidden border-y border-ink-800/80 py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee items-center gap-12">
        {items.map((name, i) => {
          const entry = skillIconMap[name]
          if (!entry) return null
          const { Icon, color } = entry
          return (
            <span
              key={`${name}-${i}`}
              className="flex items-center gap-2.5 text-sm font-medium text-ink-400 opacity-80 transition-opacity hover:opacity-100"
            >
              <Icon size={20} color={color} />
              {name}
            </span>
          )
        })}
      </div>
    </div>
  )
}
